import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import ReactPlayer from 'react-player'
class InstructionVideo extends React.Component {
    //https://www.youtube.com/embed/rEFWbU0SlT0
    
    render(){
        if(this.props.auth.isSignedIn){
        return (
            <div className="container div1" align="center">
                <i class="user icon"></i>{this.props.auth.userDetails.username}
                <div className="row">
                
                    <div className="white f4 col-md-12 ma4">
                        <h3>Please take a note of all these instructions clearly.</h3>
                        <div>
                        <ReactPlayer width="1100px" height="500px" url='https://www.youtube.com/embed/rEFWbU0SlT0' playing />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end', margin:'10px'}}>
                            <button  className="ui right labeled icon button">
                            <i class="right arrow icon"></i>
                            <Link to="/TestScreen">Go For Exam</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
        else
        {
            return(
                <div className = "ui container" align="center" style={{color:"white"}}>
                        <h1>ERROR</h1>
                        <button className="negative ui button">
                            <Link to="/">PLEASE LOGIN AND THEN COME HERE</Link>
                        </button>
                </div>
            )
        }
   }
}

const mapStateToProps=(state)=>{
    return {auth:state.auth}
}




export default connect(mapStateToProps)(InstructionVideo)