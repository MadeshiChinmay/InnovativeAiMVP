import React from 'react'
import ReactDOM from 'react-dom';
import videojs from 'video.js';
import RecordRTC from 'recordrtc';
import Timeline from 'react-wavesurfer';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { ReactMic } from 'react-mic';
import { setTimeout } from 'timers';
import { captureUserMedia, S3Upload } from './AppUtils';
import Webcam from 'react-webcam'
import Iframe from 'react-iframe'
import {CircularProgressbar} from 'react-circular-progressbar'
import axios from 'axios';





var recorder;

class TestScreen extends React.Component{
    //arr=[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]];
    
    constructor(p){
        super(p);
        this.question_arr=[];
        this.question_arr=[...this.props.auth.userDetails.data]
        // setTimeout(()=>{
        //     window.location.href='/'; //Will take you to The END PAGE after 25 minutes
        // },10000) //uncomment this function during demo;
        this.myRef = React.createRef();
        this.videoInput=React.createRef();
        this.state = {
            Question:"",
            time:100,
            record:false,
            recordVideo: null,
            src: null,
            uploadSuccess: null,
            uploading: false,
            Response:"Think"
        };//===============================API CALL FOR QUESTIONS===========================
        /*NOW PLACED IN ACTION CREATOR*/
        //===================================================================================
        this.flag=0;
        this.rarr=["Answer","Think"];
        this.question=[{q:this.question_arr[0],a:"Answer",t:"Think"},{q:this.question_arr[1],a:"Answer",t:"Think"},{q:this.question_arr[2],a:"Answer",t:"Think"}]
        this.timePerQuestion=4000;//milliseconds
        this.index=0;this.j=0;
        this.i =Math.floor(Math.random() * (6 - 0)) + 0;
        this.seconds=10000;
        
        setInterval(()=>{this.setState({time:this.seconds});
            this.seconds--},
        1000)
        setInterval(()=>{this.setState({Question:this.question[this.index].q});this.index++;
                            if(this.index===3){
                                this.index=0;
                            }},

                            this.timePerQuestion)
        /*Here the questions change according to given time interval */
        
        
        
        setInterval(()=>{
            this.setState({Response:this.rarr[this.j]});
            this.j++;
            if(this.j===2){
                this.j=0;
        }},
        this.timePerQuestion/2)
       
        
        
        
        // code for video recording
        this.requestUserMedia = this.requestUserMedia.bind(this);
        this.startRecord = this.startRecord.bind(this);
        this.stopRecord = this.stopRecord.bind(this);

    }
    
    //Event Handler for "NEXT Question" clicks
    random_index=(event)=>{
        console.log(this.state.Question);
        this.setState({Question:this.question[this.arr[this.i][this.index]]});
        this.index++;
        if(this.index===3){
            this.index=0;
        }
    }

    
    // Here the function which help ReactMic will come
    //===========================================================

    startRecording = () => {
        //console.log("recording started")
         this.setState({
          record: true
        });
        setTimeout(()=>{
            this.setState({
                record:false
            })
            console.log("Stopped the recording")
        },10000)
      }
     
      onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
      }
     
      onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
      }

    //   =================================
    // Code for recodrtc

      requestUserMedia() {
        console.log('requestUserMedia')
        captureUserMedia((stream) => {
          this.setState({ src: stream });
          console.log('setting state', this.state)
        });
      }

    //   captureUserMedia(function(stream) {
    //     mediaStream = stream;

    //     videoElement.srcObject=stream;
    //     videoElement.play();
    //     videoElement.muted = true;
    //     videoElement.controls = false;

    //     recorder = RecordRTC(stream, {
    //         type: 'video'
    //     });

    //     recorder.startRecording();

    //     // enable stop-recording button
    //     btnStopRecording.disabled = false;
    // });

      startRecord() {

        //UNCOMMENT THESE 
        this.startRecording()
        captureUserMedia((stream) => {
            console.log(stream)
          this.setState({
              recordVideo : RecordRTC(stream, { type: 'video' })
          });
          this.videoInput.current.srcObject=stream;
          this.videoInput.current.play()
          this.state.recordVideo.startRecording();
          
        
        // videoElement.srcObject=stream;
        // videoElement.play();
        // videoElement.muted = true;
        // videoElement.controls = false;

        });
    
        setTimeout(() => {
          this.stopRecord();
        }, 100000);
      }

      stopRecord() {
        this.state.recordVideo.stopRecording(() => {
          let params = {
            type: 'video/webm',
            data: this.state.recordVideo.blob,
            id: Math.floor(Math.random()*90000) + 10000
          }
          console.log(params.data)
          
          var blob = params.data;

            // getting unique identifier for the file name
            var fileName = generateRandomString() + '.webm';

            var file = new File([blob], fileName, {
                type: 'video/webm'
            });

            xhr('/uploadFile', file, function(responseText) {
                var fileURL = JSON.parse(responseText).fileURL;

                console.info('fileURL', fileURL);
                // videoElement.src = fileURL;
                // videoElement.play();
                // videoElement.muted = false;
                // videoElement.controls = true;
            });

    // for uploading to S3, uncomment the following code
        //   this.setState({ uploading: true });
    
        //   S3Upload(params)
        //   .then((success) => {
        //     console.log('enter then statement')
        //     if(success) {
        //       console.log(success)
        //       this.setState({ uploadSuccess: true, uploading: false });
        //     }
        //   }, (error) => {
        //     alert(error, 'error occurred. check your aws settings and try again.')
        //   })
        });

        function generateRandomString() {
            if (window.crypto) {
                var a = window.crypto.getRandomValues(new Uint32Array(3)),
                    token = '';
                for (var i = 0, l = a.length; i < l; i++) token += a[i].toString(36);
                return token;
            } else {
                return (Math.random() * new Date().getTime()).toString(36).replace( /\./g , '');
            }
        }

        function xhr(url, data, callback) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (request.readyState == 4 && request.status == 200) {
                    callback(request.responseText);
                }
            };
            
            request.open('POST', url);

            var formData = new FormData();
            formData.append('file', data);
            request.send(formData);
        }

        let postFiles=()=>{
            var blob = this.state.recordVideo.getBlob();

            // getting unique identifier for the file name
            var fileName = generateRandomString() + '.webm';

            var file = new File([blob], fileName, {
                type: 'video/webm'
            });

            xhr('/uploadFile', file, function(responseText) {
                var fileURL = JSON.parse(responseText).fileURL;

                console.info('fileURL', fileURL);
                // videoElement.src = fileURL;
                // videoElement.play();
                // videoElement.muted = false;
                // videoElement.controls = true;
            });

        }

      }
      

    //===========================================================    

    render(){
        if(this.props.auth.isSignedIn && this.props.auth.userDetails.data){
        return(
            <div className ='white'>
                <meta charSet="utf-8" />
        <title>Exam Screen</title>
        <link href="Testscreendata/node_modules/video.js/dist/video-js.min.css" rel="stylesheet" />
        <link href="Testscreendata/dist/css/videojs.record.css" rel="stylesheet" />
        <link href="Testscreendata/assets/css/examples.css" rel="stylesheet" />
        <h3 align="center" style={{color:'white'}}>Timer: {this.state.time}</h3>
                
        <style dangerouslySetInnerHTML={{__html: "\n  /* change player background color */\n  #myVideo {\n      background-color: #000;\n      \n  }\n  " }} />
        <h3 align="center" style={{color:"white"}}><i class="user icon" ></i> {this.props.auth.userDetails.username}</h3>

        <h1 style={{margin: '40px 100px', fontSize: '350%',color:'white'}}> ENGLISH TEST
        <div style={{position:"fixed" ,right:400, top:"150px"}}>
            <div><button className = 'ui button' onClick={this.startRecord}>Start Record</button></div>
            <div><button className = 'ui button' onClick={this.stopRecord}>Stop Record</button></div>
            
        </div>
        <video  ref={this.videoInput} style={{position:"fixed",right:50,height:300,width:300,border: '1px solid rgb(15, 158, 238)',top:"120px"}} muted />
        
            {/* =================WEBCAM DIVISION==================== */}
            {/* <Webcam 
                style={{position:"fixed",right:10}}
            height={150}
            width={290}
            /> */}
            
            {/* <iframe src="http://localhost:9001/" allow="microphone camera"></iframe> */}
            
            

            {/* =================WEBCAM DIVISION=====================*/}
        

        </h1>
                
        
                <h2 style={{margin: '40px 100px', fontSize: '250%' ,color:'white'}}>PART-1</h2>
                <h3 style={{margin: '40px 100px', fontSize: '250%' ,color:'white'}}>
                    {this.state.Question}
                    <br></br><br/>
                    {this.state.Response}
                </h3>

                <button onClick={this.random_index}style={{margin: '40px 100px', fontSize: '150%'}}>
                    Click Me!
                </button>
                <br></br>
                <br></br>
                
                {/* here the waveform component will come */}

                <div className="ui container">
                <div style={{opacity:0.5}}>
                
                
                <ReactMic
                    //style={{position:"fixed"}}
                    record={this.state.record}
                    className="ui container"
                    onStop={this.onStop}
                    //onData={this.onData}
                    strokeColor="#000000"
                    backgroundColor="#122d76"
                />
                </div>

                {/* ========================================TAB SPACES TO KEEP BUTTONS IN CENTER================================================= */}

                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                {/* =============================================TAB SPACES TO KEEP BUTTONS IN CENTER============================================ */}

                {/* <button onClick={this.startRecording} type="button" className="ui button" >Start</button> */}
                {/* <button onClick={this.stopRecording} type="button" className="ui button">Stop</button> */}
                </div>

                {/*======================================== */}
                
                <button onClick={(()=>{window.location.href='/'})} style={{margin: '40px 100px', fontSize: '150%'}}>
                    <h4 >FINISH TEST</h4>
                </button>
                <br></br>
                <h5 style={{margin: '40px 100px', fontSize: '150%',color:"white"}}>(After 25 minutes test will automatically finish)</h5>
                <br></br>
                <br></br>
      </div>
        )
        }
        else
        {
            return(
                <div className = "div1">
                        <h1>ERROR</h1>
                        <button className="btn btn-info">
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



export default connect(mapStateToProps)(TestScreen);