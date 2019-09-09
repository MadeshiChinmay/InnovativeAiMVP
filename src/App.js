import React, { Component } from 'react'
import './index.css';
// import TempHomePage from './components/TempHomePage'
import './App.css'

// import StudentProfile from './components/StudentProfile';
import HomePage from './components/Homepage/HomePage';


class App extends Component{
  render(){
    return(
      <div onContextMenu={(e)=> e.preventDefault()}>
        {/* <StudentProfile></StudentProfile> */}
        {/* <HomePage></HomePage> */}
        
        <HomePage />
      </div>
    )
  }
}


export default App;
