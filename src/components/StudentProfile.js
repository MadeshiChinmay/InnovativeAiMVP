import React from 'react';
import { Link } from "react-router-dom";
import faker from 'faker'
import {connect} from 'react-redux'
import UserForm from './UserForm'
import axios from 'axios'

class StudentProfile extends React.Component {
    
    render(){
        
    if(this.props.auth.isSignedIn){
        
            return (
                
                <div className="div1" >
                    <div align="center" style={{color:"white"}}><h1>Student Profile</h1></div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <table className="table" cellpadding="5" >
                            <tr>
                                <td align="left">Name:</td>
                                <td align="left">{this.props.auth.userDetails.username}</td> 
                            </tr>
                            <tr>
                                <td align="left">Institute:</td>
                                <td align="left">{this.props.auth.userDetails.institute}</td> 
                            </tr>
                            <tr>
                                <td align="left">Address:</td>
                                <td align="left">{this.props.auth.userDetails.address}</td> 
                            </tr>
                            <tr>
                                <td align="left">Package:</td>
                                <td align="left">Hire/Not Hire</td> 
                            </tr>
                            <tr>
                                <td align="left">Email:</td>
                                <td align="left">{this.props.auth.userDetails.email}</td> 
                            </tr>
                            <tr>
                                <td align="left">No. Of Testings:</td>
                                <td align="left">{faker.random.number()}/{faker.random.number()}</td> 
                            </tr>
                        
                        </table>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button  className='ui right labeled icon button'>
                        <i class="right arrow icon"></i>
                        <Link to="/Instructions">Assessment</Link>
                        </button>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div style={{position: 'relative'}} className = 'f5 white center ma3'>
                            <p style={{position: 'fixed',bottom: '0'}} >(If you find any discrepencies in the data then take a screenshot and mail to support@hireonai.com . cc your institute)</p>
                        </div>
                    </div>
                </div>
                )
            
    }
    else
    {
        return(
            <div className = "div1">
                <h1>ERROR</h1>
                <button className='w-40 grow f4 link ph3 pv2 dib bg-white'>
                    <Link to="/">It seems you are'nt logged in. Press the button to go to homepage.</Link>
                </button>
            </div>
        )
    }
    }
    
}


const mapStateToProps=(state)=>{
    return {auth:state.auth}
}

export default connect(mapStateToProps)(StudentProfile)
