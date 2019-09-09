import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './recording.css';
import RecordRTC from 'recordrtc';
// import htmlContent from '../RecordRTC-to-Nodejs/index.html';

class Recording extends Component {

  render() {
    

    return (
      // <div className="Recording, container">
      //   <video id="recording" ref="recoding" controls src={this.props.video}></video>
      //   <div className="buttons">
      //     <Link to="/video">
      //       <button id="record">Try Again</button>
      //     </Link>
      //     <Link to="/loading">
      //       <button id="upload">Save</button>
      //     </Link>
      //   </div>
      // </div>
      // <div dangerouslySetInnerHTML={ {__html: htmlContent} } /

      <div>
        <style dangerouslySetInnerHTML={{__html: "\n          \n\n          body {\n               text-align: center;float:right; padding:10px\n          }\n\n               a {\n              color: #2844FA;\n              text-decoration: none;\n          }\n\n          a:hover, a:focus { color: #1B29A4; }\n\n          a:active { color: #000; }\n\n          audio, video {\n              border: 1px solid rgb(15, 158, 238); width: 90%;\n          }\n\n          "}} />
        <h1 className="white">RecordRTC to Node.js</h1>
        <p>
          <video />
        </p>
        
        <div>
          <button onClick={this.startRecording} id="btn-start-recording">Start Recording</button>
          <button id="btn-stop-recording">Stop Recording</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.video,
})

export default connect(mapStateToProps)(Recording);
