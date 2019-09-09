import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import { browserHistory } from 'react-router'


class UserForm extends React.Component{

    constructor(props)
    {
        super(props)
        this.username=""
        this.address=""
        this.institute=""
        this.email=""
        this.obj={}
    }
    

    

    onFormSubmit=(e)=>{
        
        console.log("SUBMITTED")
        axios.post('/sendinfo',{
            "username":this.props.auth.userDetails.username,
            "address":this.address,
            "institute":this.institute,
            "email":this.email
        }).then((response)=>{
            this.obj=response
        })
        browserHistory.push('https://innovative-ai.herokuapp.com/')

    }
    








    render(){
        return(

            <div className="ui container">
                {/* <div style={{color:"white"}}>{this.props.auth.userName}</div> */}
                <h1 align="center" style={{color:"white"}}>UserForm</h1>
                <form className="ui form " onSubmit={this.onFormSubmit}>
                    <div className="field">
                    {/* <label style={{color:"white"}}>UserName</label>
                    <input type="text" value={this.props.auth.username} /> */}
                    {/* <br/> */}
                    <label style={{color:"white"}}>Address</label>
                    <input type="text" onChange={(e)=>{this.address=e.target.value}} />
                    {/* <br/> */}
                    <label style={{color:"white"}}>Institute</label>
                    <input type="text" onChange={(e)=>{this.institute=e.target.value}} />
                    {/* <br/> */}
                    <label style={{color:"white"}}>Email-Id</label>
                    <input type="text" onChange={(e)=>{this.email=e.target.value}} />
                    </div>
                    <input type="submit" value="Submit" />

                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    
    //const auth=state.auth
    console.log(state.auth)
    return {auth:state.auth}
}

export default connect(mapStateToProps)(UserForm)