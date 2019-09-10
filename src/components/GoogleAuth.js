import React from 'react'
import {connect} from 'react-redux'
import {signIn,signOut} from './actions'
import { Link } from "react-router-dom";
import UserForm from './UserForm'
import axios from 'axios'
import { browserHistory } from 'react-router'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class GoogleAuth extends React.Component{

    //state={isSignedIn:null}
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: "777070728663-sr5gm7c0n3ejsghv809lehrdvqtfblp9.apps.googleusercontent.com",
                scope:"email"///basically asks what we want abt user from google
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                //this.setState({isSignedIn : this.auth.isSignedIn.get()})
                this.onAuthChange(this.auth.isSignedIn.get())//INTITIALISATION
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }
    //listen function automatically calls the callback function which
    //we defined..listens automatically listens to user's auth status
    onAuthChange=(isSignedIn)=>{
        //this.setState({isSignedIn : this.auth.isSignedIn.get()})
        //.currentUser.get().getBasicProfile().getName() for the name
        
        if(isSignedIn){
            console.log(this.auth.currentUser.get().getBasicProfile().getName())
            this.props.signIn(this.auth.currentUser.get().getBasicProfile().getName());
            console.log(this.auth.currentUser.get().getBasicProfile().getEmail())
            axios.post('/isUser',{
                "email":this.auth.currentUser.get().getBasicProfile().getEmail()
            }).then((res)=>{
                console.log(res)
                if(res.data==="Not Found")
                {
                    browserHistory.push('https://innovative-ai.herokuapp.com/')
                    window.location.href('https://innovative-ai.herokuapp.com/')
                    this.auth.signOut()
                    this.forceUpdate()
                    NotificationManager.error("YOU ARE NOT REGISTERED")
                    
                }
            })
        }
        else
        {
            this.props.signOut();
        }
    }  
    

    onSignInClick=()=>{
        this.auth.signIn()
        //NotificationManager.success('SUCCESSFULLY SIGNED IN',"",1500);
        /*axios.post('/isUser',{
            "email":this.auth.currentUser.get().getBasicProfile().getEmail()
        }).then((res)=>{
            if(!res)
            {
                this.auth.signOut()
                //browserHistory.push('https://innovative-ai.herokuapp.com/')
            }
        })*/
        
        
    }
    onSignOutClick=()=>{
        
        this.auth.signOut()
        this.forceUpdate()
        browserHistory.push('https://innovative-ai.herokuapp.com/')
        NotificationManager.info('SUCCESSFULLY SIGNED OUT',"",1200);
        
    }




    renderAuthButton(){
        if(this.props.auth.isSignedIn===null){
            return (
            null
            )
        }
        //else if
        else if(this.props.auth.isSignedIn && this.props.auth.userDetails.email)
        {
            return(
            <div>
            <button class="btn btn-primary">
               <i class="user icon"></i>{this.userName}
               <Link to="/StudentProfile" className='white '>View Profile</Link>
             </button>
             &nbsp;
               <button className="ui red google button" onClick={this.onSignOutClick}> 
                   <i className="google icon" />
                   Sign Out
               </button>
               
               {/* &nbsp;
               <button className="ui red google button">
                   <Link to="/UserForm" className='white '>Fill The Form</Link>
               </button> */}
             </div>
            )
        }
        else if(this.props.auth.isSignedIn && !this.props.auth.userDetails.email)
        {
            return(
                <div>
                   <button className="ui red google button">
                       <Link to="/UserForm" className='white '>Fill The Form</Link>
                   </button>
                   &nbsp;
                   <button className="ui red google button" onClick={this.onSignOutClick}> 
                       <i className="google icon"/>
                       Sign Out
                   </button>
                   {/* <NotificationContainer/> */}
                 </div>
            )
        }
        else
        {
            return (
                <div>
                <button className="ui red google button" onClick={this.onSignInClick}>
                   <i className="google icon" />
                   Sign In
               </button>
               {/* <NotificationContainer/> */}
               
               </div>
            )
        }

    }


    render(){
        console.log("Called The Header")
        return(
            <div>{this.renderAuthButton()}
            <NotificationContainer/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {auth:state.auth}
}




export default connect(mapStateToProps,{
    signIn:signIn,
    signOut:signOut
})(GoogleAuth);