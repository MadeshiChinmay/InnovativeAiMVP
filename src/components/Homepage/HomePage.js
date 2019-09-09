import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import Tilt from 'react-tilt'
import logo from './logo.png';
import axios from 'axios'
import face_rec from './500x300.png'
import face_rec1 from './500x301.png'

const mapStateToProps=(state)=>{
  return {auth:state.auth}
}

class HomePage extends React.Component{
        constructor(props){
          super(props)
          this.email=""
        }
        onFormSubmit=()=>{
            console.log(this.email)
            axios.post("http://localhost:4000/subscribe",({
              "email":this.email
            })).then((result)=>{
              console.log(result)
            })
        }
        render(){
          if(this.props.auth.isSignedIn){
          // window.location.href="/StudentProfile";
          return(
                    <div>
                      
                      {/* <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                      <meta charSet="utf-8" />
                      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                      <meta name="viewport" content="width=device-width, initial-scale=1" />
                      <meta id="descriptionTag" name="description" content="This is a description for the site." />
                      <meta name="author" content /> */}
                      {/* <Link id="favicon" rel="icon" href="images/favicon.png" />
                      <title>Innovative AI | Interviews Redifned</title>
                      {/* Plugin Core CSS */}
                      {/* <Link href="releases/v5-0-8/css/all.css" rel="stylesheet" /> */}
                      {/* Custom Fonts */}
                      {/* <Link href="//fonts.googleapis.com/css?family=Oswald:300,400,700&subset=latin-ext" rel="stylesheet" /> */}
                      {/* Theme CSS */}
                      {/* <Link rel="stylesheet" href="css/sweetalert.css" /> */}
                      {/* <Link href="css/bootstrap.min.css" rel="stylesheet" />  */}
                      <style id="generalStyle" dangerouslySetInnerHTML={{__html: "\n        .navbar-brand {\n            padding: 0;\n        }\n        .teamItem a { color: rgb(239, 84, 59);}.headerSectionDiv {text-shadow: 2px 2px 2px rgba(16, 16, 16, 0.57);}.sectionTitle {text-shadow: 2px 2px 2px rgba(16, 16, 16, 0.57);}#shopButton {\n    text-shadow: none;\n}\n#bookButton {\n    text-shadow: none;\n}\n.newsLetterForm {\n    padding: 30px;\n    border-radius: 10px;\n    box-shadow: 0px 0px 52px -10px white;\n    border: solid 1px white !important;\n}\n.newsletterTitle {\n    font-weight: bold;\n}\n.newsLetterForm .input-group-addon {\n    display: none;\n}\n.newsLetterForm input {\n    height: 45px;\n    margin: 10px 0;\n}body {\n        font-family: 'Oswald', sans-serif !important;\n    }.overlay {\n            position: fixed;\n            width: 20%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            z-index: 9999;\n        }\n        @media only screen and (max-width : 800px) {\n            .overlay {\n                width: 40%;\n            }\n        }\n        @media only screen and (max-width : 400px) {\n            .overlay {\n                width: 65%;\n            }\n        }\n        #trigger-overlay {\n            background: transparent;\n            border: none;\n            outline: none;\n            float: right;\n            margin-top: 2.5px;\n            position: fixed;\n            left: 20px;\n            top: 20px;\n            z-index: 100;\n            cursor: pointer;\n        }\n        #trigger-overlay i {\n            color: rgb(51,51,51);\n            font-size: 25px;\n            padding: 11px 14px;\n            background: rgb(255,255,255);\n        }\n        .overlay .overlay-close {\n            font-size: 19px;\n            width: 40px;\n            height: 40px;\n            position: absolute;\n            right: 20px;\n            top: 20px;\n            overflow: hidden;\n            border: none;\n            background: rgb(239, 84, 59);\n            color: rgb(255,255,255) !important;\n            outline: none;\n        }\n        .overlay nav {\n            text-align: center;\n            position: relative;\n            top: 50%;\n            height: 60%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n        }\n        .overlay ul {\n            list-style: none;\n            padding: 0;\n            margin: 0 auto;\n            display: inline-block;\n            height: 100%;\n            position: relative;\n        }\n        .overlay ul li {\n            display: block;\n            height: 20%;\n            height: calc(100% /7);\n            min-height: 54px;\n            -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n        }\n        .overlay ul li a {\n            font-size: 22px;\n            display: block;\n            color: rgb(51,51,51);\n            -webkit-transition: color 0.2s;\n            transition: color 0.2s;\n            letter-spacing: 2px;\n            text-decoration: none;\n            cursor: pointer;\n        }\n        .overlay ul li a:hover,\n        .overlay ul li a:focus {\n            color: rgb(239, 84, 59);\n            text-decoration: none;\n        }\n        .overlay-open::after {\n            visibility: visible;\n            opacity: 1;\n            -webkit-transition: opacity 0.5s;\n            transition: opacity 0.5s;\n        }\n        .overlay-contentpush {\n            background: rgb(255,255,255);\n            visibility: hidden;\n            -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n            -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n            -webkit-transition: -webkit-transform 0.5s, visibility 0s 0.5s;\n            transition: transform 0.5s, visibility 0s 0.5s;\n        }\n        .overlay-contentpush.open {\n            visibility: visible;\n            -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n            -webkit-transition: -webkit-transform 0.5s;\n            transition: transform 0.5s;\n        }header .btn {\n        border: solid 2px rgb(255,255,255);\n        color: rgb(255,255,255);\n        background: rgb(239, 84, 59);\n        text-transform: none;\n        margin-top: 20px;\n        font-size: 20px;\n        margin-right: 10px;\n    }\n    header .btn:hover {\n        background: rgb(255,255,255) !important;\n        color:  !important;\n        border: solid 2px rgb(255,255,255) !important;\n    }\n    header .btn::selection {\n        color: rgb(255,255,255);\n    }\n    header .btn::-moz-selection {\n        color: rgb(255,255,255);\n    }\n    header .btn:active {\n        color: rgb(255,255,255);\n    }\n    header .btn:active {\n        color: rgb(255,255,255);\n    }\n    #singleImageHeader {\n        background-repeat: no-repeat !important;\n        background-size: cover, 100% 100% !important;\n        background-position: 50% 50%, center !important;\n    }\n    footer {\n        background: rgb(255,255,255);\n        color: rgb(51,51,51);\n        text-align: center;\n        padding: 20px;\n    }\n    footer p {\n        margin-bottom: 0px !important;\n    }\n    .contactForm textarea {\n        resize: none;\n        height: 150px !important;\n    }\n    .sweet-alert h2 {\n        font-size: 30px !important;\n        text-shadow: none !important;\n        text-transform: none !important;\n    }\n    .user-stats {\n        width: 80%;\n        left: 10%;\n        margin-top: 40px;\n    }\n    #sEmail {\n        height: 30px;\n    }\n    .outerGrid {\n        display: inline-grid;\n        position: relative;\n    }\n    .innerGridTable {\n        display: table;\n        height: 100%;\n        width: 100%;\n    }\n    .innerTableContent {\n        display: table-cell;\n        vertical-align: middle;\n    }\n    .customFrameElem {\n        width: 100%;\n        margin-top: 50px;\n        margin-bottom: 50px;\n    }\n    .insertNewBtn {\n        font-size: 30px;\n    }\n    @media only screen and (max-width : 800px) {\n        .affix-top .navbar-nav>li>a {\n            color: rgb(51,51,51) !important;\n        }\n        .affix-top #pageTitle {\n            color: rgb(51,51,51) !important;\n        }\n        .row {\n            display: initial !important;\n            margin: 0;\n        }\n        .col-md-10 {\n            width: 100%;\n        }\n        .headerSectionDiv {\n            margin-top: 80px;\n            text-align: center !important;\n            display: block !important;\n            margin-bottom: 80px;\n        }\n        .headerContentContainer {\n            display: block !important;\n        }\n        .extraTextSection {\n            position: initial !important;\n            width: 100%;\n        }\n        .extraTextSectionLeft {\n            margin-bottom: 50px;\n        }\n        .extraTextSectionRight {\n            margin-top: 50px;\n        }\n        header .newsLetterForm {\n            width: 60%;\n            left: 20%;\n        }\n        .user-stats {\n            width: 60%;\n            left: 20%;\n        }\n    }\n    @media only screen and (max-width : 400px) {\n        .headerSectionDiv {\n            text-align: center !important;\n            margin-top: 80px;\n            padding-left: 0;\n            padding-right: 0;\n            margin-bottom: 80px;\n        }\n        .pSection {\n            margin-top: 20px !important;\n        }\n        header .newsLetterForm {\n            width: 100%;\n            left: 0;\n        }\n        .user-stats {\n            width: 100%;\n            left: 0%;\n        }\n    }\n    html {\n        position: absolute;\n        width: 100%;\n        overflow-x: hidden;\n    }\n    body {\n        position: absolute;\n        width: 100%;\n    }\n    header {\n        height: 700px;\n        width: 100%;\n        display: table;\n             text-shadow: 2px 2px 3px black;\n        table-layout: fixed;\n        word-wrap: break-word;\n    }\n    section {\n        background-repeat: no-repeat !important;\n        background-size: cover, 100% 100% !important;\n        background-position: 50% 50%, center !important;\n        position: relative;\n        table-layout: fixed;\n        word-wrap: break-word;\n    }\n    .headerContainer {\n        margin-top: 50px;\n        height: 100%;\n        display: table-cell;\n        vertical-align: middle;\n        position: relative;\n        padding-bottom: 50px;\n    }\n    h1 {\n        font-size: 130px;\n    }\n    h2 {\n        font-size: 110px;\n    }\n    h3 {\n        font-size: 90px;\n    }\n    h4 {\n        font-size: 40px;\n    }\n    h5 {\n        font-size: 35px;\n    }\n    h6 {\n        font-size: 30px;\n    }\n    .row {\n        display: flex;\n    }\n    #mainTitleSection {\n        display: table !important;\n        height: 100%;\n        table-layout: fixed;\n    }\n    .headerContentContainer {\n        vertical-align: middle;\n        display: table-cell !important;\n        padding-bottom: 20px;\n        padding-top: 50px;\n    }\n    .newsLetterForm .input-group {\n        margin-left: 10%;\n        width: 80%;\n    }\n    .newsLetterForm input {\n        height: 30px;\n    }\n    .contactForm input {\n        height: 30px;\n    }\n    .pSection {\n        position: relative;\n        margin-top: 20px !important;\n        display: table;\n        height: 100%;\n    }\n    .pContainer {\n        display: table;\n        position absolute;\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n        text-align: center;\n    }\n    .aboutP {\n        display: table-cell;\n        height: 100%;\n        vertical-align: middle;\n        font-size: 16px;\n    }\n    .galleryItem img {\n        min-width: 20px;\n        min-height: 20px;\n    }\n    \n    @media only screen and (max-width : 400px) {\n        #pageTitle {\n            padding-top: 20px !important;\n        }\n    }#mainSubtitle {\n                        color: rgb(255,255,255);\n                        text-transform: none;\n                    }#mainTitle {\n                    color: rgb(255,255,255);\n                    text-transform: none;\n                }.sectionTitle {\n        font-size: 50px;\n        text-align: center;\n        text-transform: none;\n        color: rgb(239, 84, 59);\n    }\n    .sectionSubtitle {\n        font-size: 20px;\n        text-align: center;\n        margin-bottom: 50px;\n        text-transform: none;\n        color: rgb(239, 84, 59);\n    }\n    .pageSection {\n        padding: 50px 20px;\n        text-align: center;\n        position: relative;\n    }\n    .pageSection p {\n        padding: 0px 20px;\n    }\n    .descriptionText {\n        font-size: 18px;\n    }.descriptionText {\n                font-size: 18px;\n            }\n    " }} />
                      {/* <button id="trigger-overlay" type="button">
                        <i className="fa fa-bars" aria-hidden="true" />
                      </button> */}
                      {/* <div id="menuOverlaySection" className="overlay overlay-contentpush">
                        <button id="close-menu" style={{color: 'white', padding: 0, float: 'none', textAlign: 'center'}} type="button" className="overlay-close">
                          <i className="fa fa-times" aria-hidden="true" />
                        </button>
                        <nav id="mainNav" role="navigation">
                          <ul>
                            <li>
                              <a id="aboutItem" className="menuItem page-scroll " href="#about">About</a>
                            </li><li>
                              <a id="featuresItem" className="menuItem page-scroll " href="#features">Features</a>
                            </li><li>
                              <a id="galleryItem" className="menuItem page-scroll " href="#gallery">Gallery</a>
                            </li><li>
                              <a id="testimonialsItem" className="menuItem page-scroll " href="#testimonials">Testimonials</a>
                            </li><li>
                              <a id="teamItem" className="menuItem page-scroll " href="#team">Team</a>
                            </li><li>
                              <a id="blogItem" className="menuItem page-scroll " href="#blog">Blog</a>
                            </li><li>
                              <a id="contactItem" className="menuItem page-scroll " href="#contact">Contact</a>
                            </li>
                          </ul>
                        </nav>
                      </div> */}
                      <header id="page-top">
                        <div id="singleImageHeader" className="container headerContainer" >
                        
                          <div style={{display: 'flex', position: 'relative', height: '100%', width: '100%'}} className="row row-eq-height">
                            <div style={{textAlign: 'center'}} className="col-md-6 col-md-offset-1 headerSectionDiv" id="mainTitleSection">
                            <div className="headerContentContainer">
                          <Tilt className="Tilt br2 shadow-2 center" options={{ max : 55 }} style={{ height: 150, width: 250 }} >
                          <div className="Tilt-inner pa3">
                              <img style={{paddingTop: '5px'}} src={logo} /> 
                          </div>
                        </Tilt>
                                <h3 id="mainTitle">Innovative AI</h3>
                                <h6 id="mainSubtitle">Interviews Redifned</h6>
                              </div>
                            </div>
                            <div style={{textAlign: 'left'}} className="col-md-4 pSection headerSectionDiv">
                              <div className="pContainer"><div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                                  <style dangerouslySetInnerHTML={{__html: "#extraHTML h4 {font-size: 3.5em;text-transform: uppercase;color: #ffffff;font-weight: 600;letter-spacing: 4px;text-align: center;}#extraHTML i {color: rgb(239, 84, 59);}#extraHTML span {text-shadow: 0px 5px 11px #000000;font-size: 40px; display: block; color: white;} #extraHTML {margin-bottom: 50px; font-size: 5em;}" }} /><div className="row"><div className="col-md-12"><style id="newsletterStyle" dangerouslySetInnerHTML={{__html: "\n            .newsLetterForm {\n                text-align: left;\n                margin-top: 30px;\n            }\n            .newsLetterForm p {\n                text-align: left;\n                font-size: 18px;\n            }\n            #subscribeButton {\n                color: rgb(255,255,255) !important;\n                background: rgb(239, 84, 59) !important;\n                border-color: rgb(255,255,255) !important;\n                border-radius: 0px !important;\n                margin-bottom: 10px;\n                margin-right: 0;\n            }\n            #subscribeButton:hover {\n                color: rgb(239, 84, 59) !important;\n                background: rgb(255,255,255) !important;\n                border-color: rgb(239, 84, 59) !important;\n            }\n            .newsLetterForm .input-group input, textarea {\n                background: rgb(255,255,255) !important;\n                color: rgb(0,0,0) !important;\n                border-radius: 0px !important;\n                text-transform: none !important;\n                border-bottom-left-radius: 0 !important;\n                border-top-left-radius: 0 !important;\n            }\n            .newsLetterForm .input-group input::placeholder {\n                color: rgb(117,117,117) !important;\n            }\n            .newsLetterForm .input-group textarea::placeholder {\n                color: rgb(117,117,117) !important;\n            }\n            .newsLetterForm .input-group input:-ms-input-placeholder {\n                color: rgb(117,117,117) !important;\n            }\n            .newsLetterForm .input-group textarea:-ms-input-placeholder {\n                color: rgb(117,117,117) !important;\n            }\n            .newsLetterForm .input-group input::-ms-input-placeholder {\n                color: rgb(117,117,117) !important;\n            }\n            .newsLetterForm .input-group textarea::-ms-input-placeholder {\n                color: rgb(117,117,117) !important;\n            }\n            .newsLetterForm .input-group-addon {\n                background: rgb(239, 84, 59) !important;\n                color: rgb(255,255,255) !important;\n                border-radius: 0px;\n                border-top-right-radius: 0;\n                border-bottom-right-radius: 0;\n            }\n            .newsLetterForm .input-group-addon:firstChild {\n                margin-left: 0px;\n            }\n            .newsLetterForm {\n                background: rgba(0,0,0,0.75) !important;\n                border: none !important;\n                color: rgb(255,255,255) !important;\n                padding: 10px;\n                text-align: center;\n            }\n            .newsLetterForm .form-control {\n                border: 1px solid rgb(255,255,255);\n            }\n            .newsletterTitle {\n                color: rgb(255,255,255) !important;\n                font-size: 40px;\n                padding-bottom: 15px;\n                text-align: center;\n            }\n        " }} />
                                      <form className="newsLetterForm col-md-12" onSubmit={this.onFormSubmit}>
                                        <h5 id="newsletterTitle" className="sectionTitle newsletterTitle">Subscribe to Our NewsLetter</h5>
                                        <div className="form-group">
                                          <div className="input-group">
                                            <span className="input-group-addon"><i id="newsletterAddOn" className="fa fa-envelope" /></span>
                                            <input name="sEmail" type="email" className="form-control" id="sEmail" placeholder="Your Email" required="required" 
                                              onChange={(e)=>{this.email=e.target.value;console.log(this.email)}}
                                            />
                                          </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary" id="subscribeButton">Subscribe</button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                     </div>          
                      </header>
                      <section style={{background: 'white'}}><div className="container pageSection text-section-1 u483dhvBpO9Js5rgliBYQU5hyjHnA51xAxFXEU5i">
                          <div className="row">
                            <div className="col-md-4 outerGrid">
                              <div className="innerGridTable">
                                <div className="innerTableContent">
                                  <img src={face_rec} />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 outerGrid">
                              <div className="innerGridTable">
                                <div className="innerTableContent">
                                  <h4>Check Us Out</h4>
                                  <p>Our AI services center around our customers' most basic issues and openings for a desireable solution: technique, quality, expertise, delivery, efficiency, and sharpness. We bring profound, useful aptitude, and are known for our all encompassing point of view: we catch an incentive crosswise over limits and between the existing solutions of any of our customers. We have demonstrated a multiplier impact from streamlining the aggregate of the parts, not simply the individual pieces.</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 outerGrid">
                              <div className="innerGridTable">
                                <div className="innerTableContent">
                                  <img src={face_rec1} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <style dangerouslySetInnerHTML={{__html: "\n            .text-section-1 img {\n                width: 100%;\n            }\n            .text-section-1 {\n                text-align: center;\n            }\n            .text-section-1 .col-md-4 {\n                padding: 30px 15px;\n            }\n            .text-section-1 h4 {\n                font-size: 40px;\n            }\n        " }} />
                        </div>
                        </section>
                        <section style={{background: 'url("img/VAQl2-4jy5T-wvpkD-6eBCR-28RlZ.jpeg")', position: 'relative'}}>
                        <div style={{backgroundColor: 'rgba(0,0,0,0.7)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
                        <style id="aboutStyle" dangerouslySetInnerHTML={{__html: "\n                #aboutParagraph {\n                    font-size: 18px;\n                    padding-bottom: 40px;\n                }\n                #aboutImage {\n                    max-width: 100%;\n                    margin-top: 20px;\n                    margin-bottom: 20px;\n                }\n                #about {\n                    color: rgb(255,255,255) !important;\n                }\n                #about .sectionTitle {\n                    color: rgb(255,255,255) !important;\n                }\n                #about .sectionSubtitle {\n                    color: rgb(255,255,255) !important;\n                }\n                #about hr {\n            border-width: 2px;\n            border-color: rgb(255,255,255);\n            max-width: 150px;\n            margin-bottom: 30px;\n        }\n            " }} />
                        <div className="container pageSection" id="about">
                          <h1 id="aboutTitle" className="sectionTitle">About</h1>
                          <h4 id="aboutSubtitle" className="sectionSubtitle">Learn more about what we do.</h4>
                          <hr />
                          <div id="aboutContent" style={{display: 'flex'}} className="row">
                            <div className><div className="row"><div style={{display: 'inline-block', position: 'relative'}}><div style={{height: '100%', width: '100%', display: 'table'}}>
                                    <p style={{display: 'table-cell', verticalAlign: 'middle'}} className="aboutParagraph" id="aboutParagraph" > We didn't try filling in this paragraph for you because there is no one on this planet - not even A.I. as smart as Innovative :) - who knows what you do as well as you! Try replacing this paragraph with a few sentances that describe what you do, how you do it, and why you are better than everyone else. Remember that sometimes less is more, so it is ok to be brief here if you don't know what to write. The main goal is to communicate to your viewer that you can offer them some value, and encourage them to reach out to you to learn even more about what that value is! Also, feel free to look up other websites like yours online for some inspiration. </p>
                                  </div>
                                  </div>
                                {/* <div style='position: relative; padding: 0; display: inline-grid;' class='col-md-6'><div style='height: 100%; width: 100%; display: table;'>
                                      <div style='display: table-cell; vertical-align: middle; width: 100%; height: 100%;'>
                                          <img id='aboutImage' style='max-width: 100%; max-height: 100%;' src='img/v1BhY-MFGNw-AGm6G-g8yDv-kQSkC.jpeg' />
                                      </div>
                                  </div> */}
                              </div>
                            </div>
                          </div>
                        
                      {/* further homepage will be made after building of the product */}
                      
                        {/* <section style={{background: 'url("img/NwIkt-8QnZy-CVND4-Bs8KU-nxfHa.png")', position: 'relative'}}>
                        <div style={{backgroundColor: 'rgba(0,0,0,0.4)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
                        <style id="featureStyle" dangerouslySetInnerHTML={{__html: "\n                .featureText {\n                    margin-bottom: 40px;\n                }\n                .featureIcon {\n                    color: rgb(255,255,255);\n                    background: rgba(0,0,0,0);\n                    border-radius: 0px;\n                }\n                .featureElem {\n                    color: rgb(255,255,255);\n                    background: rgba(0,0,0,0);\n                    border: none;\n                    cursor: pointer;\n                }\n                .featureElem:hover {\n                    background: rgba(0,0,0,0);\n                    color: rgb(255,255,255);\n                }\n                .featureHr {\n                max-width: 100px !important;\n                margin: 15px auto !important;\n                border-width: 2px !important;\n                border-color: rgb(255,255,255) !important;\n            }\n                #features {\n                    color: rgb(255,255,255) !important;\n                }\n                #features .sectionTitle {\n                    color: rgb(255,255,255) !important;\n                }\n                #features .sectionSubtitle {\n                    color: rgb(255,255,255) !important;\n                }\n                #features hr {\n            border-width: 2px;\n            border-color: rgb(255,255,255);\n            max-width: 150px;\n            margin-bottom: 30px;\n        }\n            " }} />
                        <div className="container pageSection" id="features">
                          <h1 id="featuresTitle" className="sectionTitle">Features</h1>
                          <h4 id="featuresSubtitle" className="sectionSubtitle">Check out some of our awesome features.</h4>
                          <hr />
                          <div style={{display: 'flex'}} className="row"><div className="col-md-8"><div className="row" id="featuresContent"><div className="featureElem col-md-4">
                                  <i className="featureIcon fa-3x fa fa-thumbs-up" />
                                  <h5 className="featureHeader">Quality</h5>
                                  <hr className="featureHr" />
                                  <p className="featureText">We always perform our projects with the utmost quality and integrity.</p>
                                </div><div className="featureElem col-md-4">
                                  <i className="featureIcon fa-3x fa fa-briefcase" />
                                  <h5 className="featureHeader">Pro</h5>
                                  <hr className="featureHr" />
                                  <p className="featureText">Every step of the process will be handled by our team with true professionalism.</p>
                                </div><div className="featureElem col-md-4">
                                  <i className="featureIcon fa-3x fa fa-lock" />
                                  <h5 className="featureHeader">Reliable</h5>
                                  <hr className="featureHr" />
                                  <p className="featureText">You can count on us to make sure your project is completed with care.</p>
                                </div></div></div>
                            <div style={{display: 'inline-grid', position: 'relative'}} className="col-md-4"><div className="extraTextSection extraTextSectionRight" style={{position: 'absolute', height: '100%', display: 'table'}}><p id="featureP" style={{display: 'table-cell', verticalAlign: 'middle'}} className="descriptionText">As a leader in the AI space, we are an imaginative group of problem solvers who are energetic about sparing our customers time, dissatisfaction, and cash. Utilizing our associations with extravagant suppliers, overall we deliver solutions explicit to our customer's exceptional needs, guaranteeing that the unlimited subtleties are dealt with and top-level specialist organizations are foreseeing your landing all throughout the adventure of working together.</p></div></div></div>
                        </div>
                      </section> */}
                      {/* <section style={{background: 'white', position: 'relative'}}>
                        <div style={{backgroundColor: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
                        <div className="container pageSection" id="contact">
                          <h1 id="contactTitle" className="sectionTitle">Contact</h1>
                          <h4 id="contactSubtitle" className="sectionSubtitle">Send us a message using the form below.</h4>
                          <hr />
                          <div className="row">
                            <div className="col-md-12"><div className="row"><div className="col-md-6">
                                  <div className="contactDetails">
                                    <div>
                                      <h4>Get In Touch</h4>
                                      <div>
                                        <div>
                                          <i className="fa fa-phone" /> <span>Telephone:</span> <span>+91 7982666579</span>
                                        </div>
                                      </div>
                                      <div>
                                        <div>
                                          <i className="fa fa-envelope" /> <span>Mail:</span> <span>disha.onai@gmail.com</span>
                                        </div>
                                      </div>
                                      <div>
                                        {/* <div>
                                  <i class="fa fa-map-marker"></i> <span>Location:</span> <span>1 Website Lane, Suite 1000<br>Boston, MA 11111</span>
                              </div> */}
                                      {/* </div>
                                    </div>
                                    <style dangerouslySetInnerHTML={{__html: "\n            .contactDetails {\n                padding: 20px;\n            }\n            .contactDetails div div div {\n                padding: 12px;\n                font-size: 18px;\n            }\n            .contactDetails i {\n                margin-right: 10px;\n                background: black;\n                color: white;\n                border-radius: 20px;\n                padding: 5px;\n            }\n        " }} />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <style id="contactStyle1" dangerouslySetInnerHTML={{__html: "\n            .contactForm {\n                text-align: left;\n                margin-top: 30px;\n            }\n            .contactDetails p {\n                text-align: left;\n                font-size: 18px;\n            }\n            .textarea-group {\n                width: 100%;\n            }\n        " }} />
                                  <form className="contactForm col-md-12" onsubmit="event.preventDefault(); return false;">
                                    <div className="form-group">
                                      <label id="contactFormNameLabel" htmlFor="name">Name</label>
                                      <div className="input-group">
                                        <span className="input-group-addon"><i id="nameAddOn" className="fa fa-envelope" /></span>
                                        <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required="required" />
                                      </div>
                                    </div><div className="form-group">
                                      <label id="contactFormEmailLabel" htmlFor="email">Email Address</label>
                                      <div className="input-group">
                                        <span className="input-group-addon"><i id="emailAddOn" className="fa fa-envelope" /></span>
                                        <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" required="required" />
                                      </div>
                                    </div><div className="form-group">
                                      <label id="contactFormSubjectLabel" htmlFor="subject">Subject</label>
                                      <div className="input-group">
                                        <span className="input-group-addon"><i id="subjectAddOn" className="fa fa-envelope" /></span>
                                        <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required="required" />
                                      </div>
                                    </div><div className="form-group">
                                      <label id="contactFormMessageLabel" htmlFor="subject">Message</label>
                                      <div className="input-group textarea-group">
                                        <textarea name="message" id="message" className="form-control" required="required" placeholder="Message" defaultValue={""} />
                                      </div>
                                    </div>
                                    <button onclick="submitMessage()" type="submit" className="btn btn-primary" id="contactButton">Send Message</button>
                                  </form>
                                </div></div></div>
                          </div>
                        </div>
                        <style id="contactStyle2" dangerouslySetInnerHTML={{__html: "\n                #contact hr {\n            border-width: 2px;\n            border-color: grey;\n            max-width: 150px;\n            margin-bottom: 30px;\n        }\n                #contactButton {\n                    color: rgb(255,255,255) !important;\n                    background: rgb(239, 84, 59) !important;\n                    border-color: rgb(255,255,255) !important;\n                    border-radius: 0px !important;\n                }\n                #contactButton:hover {\n                    color: rgb(239, 84, 59) !important;\n                    background: rgb(255,255,255) !important;\n                    border-color: rgb(239, 84, 59) !important;\n                }\n                .contactForm .input-group input, textarea {\n                    background: rgb(255,255,255) !important;\n                    color: rgb(0,0,0) !important;\n                    border-radius: 0px !important;\n                    text-transform: none !important;\n                    border-bottom-left-radius: 0 !important;\n                    border-top-left-radius: 0 !important;\n                }\n                .contactForm .input-group input::placeholder {\n                    color: rgb(117,117,117) !important;\n                }\n                .contactForm .input-group textarea::placeholder {\n                    color: rgb(117,117,117) !important;\n                }\n                .contactForm .input-group input:-ms-input-placeholder {\n                    color: rgb(117,117,117) !important;\n                }\n                .contactForm .input-group textarea:-ms-input-placeholder {\n                    color: rgb(117,117,117) !important;\n                }\n                .contactForm .input-group input::-ms-input-placeholder {\n                    color: rgb(117,117,117) !important;\n                }\n                .contactForm .input-group textarea::-ms-input-placeholder {\n                    color: rgb(117,117,117) !important;\n                }\n                .contactForm .input-group-addon {\n                    background: rgb(239, 84, 59) !important;\n                    color: rgb(255,255,255) !important;\n                    border-radius: 0px;\n                    border-top-right-radius: 0;\n                    border-bottom-right-radius: 0;\n                }\n                .contactForm .input-group-addon:firstChild {\n                    margin-left: 0px;\n                }\n                .contactForm {\n                    background: rgba(0,0,0,0) !important;\n                    border: none !important;\n                    color: rgb(0,0,0) !important;\n                    padding: 20px 10px;\n                    margin-bottom: 50px;\n                }\n                .contactForm .form-control {\n                    border: 1px solid rgb(0,0,0);\n                }\n            " }} />
                      </section>  */}
                      <footer>
                        <p id="footerText">© Innovative AI 2019. All Rights Reserved.</p>
                      </footer>
                 </div>
                 </section>
                 </div>
                    )
                  }
                  else
                  {
                    return (
                      <div>
                      
                      {/* <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                      <meta charSet="utf-8" />
                      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                      <meta name="viewport" content="width=device-width, initial-scale=1" />
                      <meta id="descriptionTag" name="description" content="This is a description for the site." />
                      <meta name="author" content /> */}
                      {/* <Link id="favicon" rel="icon" href="images/favicon.png" />
                      <title>Innovative AI | Interviews Redifned</title>
                      {/* Plugin Core CSS */}
                      {/* <Link href="releases/v5-0-8/css/all.css" rel="stylesheet" /> */}
                      {/* Custom Fonts */}
                      {/* <Link href="//fonts.googleapis.com/css?family=Oswald:300,400,700&subset=latin-ext" rel="stylesheet" /> */}
                      {/* Theme CSS */}
                      {/* <Link rel="stylesheet" href="css/sweetalert.css" /> */}
                      {/* <Link href="css/bootstrap.min.css" rel="stylesheet" />  */}
                      <style id="generalStyle" dangerouslySetInnerHTML={{__html: "\n        .navbar-brand {\n            padding: 0;\n        }\n        .teamItem a { color: rgb(239, 84, 59);}.headerSectionDiv {text-shadow: 2px 2px 2px rgba(16, 16, 16, 0.57);}.sectionTitle {text-shadow: 2px 2px 2px rgba(16, 16, 16, 0.57);}#shopButton {\n    text-shadow: none;\n}\n#bookButton {\n    text-shadow: none;\n}\n.newsLetterForm {\n    padding: 30px;\n    border-radius: 10px;\n    box-shadow: 0px 0px 52px -10px white;\n    border: solid 1px white !important;\n}\n.newsletterTitle {\n    font-weight: bold;\n}\n.newsLetterForm .input-group-addon {\n    display: none;\n}\n.newsLetterForm input {\n    height: 45px;\n    margin: 10px 0;\n}body {\n        font-family: 'Oswald', sans-serif !important;\n    }.overlay {\n            position: fixed;\n            width: 20%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            z-index: 9999;\n        }\n        @media only screen and (max-width : 800px) {\n            .overlay {\n                width: 40%;\n            }\n        }\n        @media only screen and (max-width : 400px) {\n            .overlay {\n                width: 65%;\n            }\n        }\n        #trigger-overlay {\n            background: transparent;\n            border: none;\n            outline: none;\n            float: right;\n            margin-top: 2.5px;\n            position: fixed;\n            left: 20px;\n            top: 20px;\n            z-index: 100;\n            cursor: pointer;\n        }\n        #trigger-overlay i {\n            color: rgb(51,51,51);\n            font-size: 25px;\n            padding: 11px 14px;\n            background: rgb(255,255,255);\n        }\n        .overlay .overlay-close {\n            font-size: 19px;\n            width: 40px;\n            height: 40px;\n            position: absolute;\n            right: 20px;\n            top: 20px;\n            overflow: hidden;\n            border: none;\n            background: rgb(239, 84, 59);\n            color: rgb(255,255,255) !important;\n            outline: none;\n        }\n        .overlay nav {\n            text-align: center;\n            position: relative;\n            top: 50%;\n            height: 60%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n        }\n        .overlay ul {\n            list-style: none;\n            padding: 0;\n            margin: 0 auto;\n            display: inline-block;\n            height: 100%;\n            position: relative;\n        }\n        .overlay ul li {\n            display: block;\n            height: 20%;\n            height: calc(100% /7);\n            min-height: 54px;\n            -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n        }\n        .overlay ul li a {\n            font-size: 22px;\n            display: block;\n            color: rgb(51,51,51);\n            -webkit-transition: color 0.2s;\n            transition: color 0.2s;\n            letter-spacing: 2px;\n            text-decoration: none;\n            cursor: pointer;\n        }\n        .overlay ul li a:hover,\n        .overlay ul li a:focus {\n            color: rgb(239, 84, 59);\n            text-decoration: none;\n        }\n        .overlay-open::after {\n            visibility: visible;\n            opacity: 1;\n            -webkit-transition: opacity 0.5s;\n            transition: opacity 0.5s;\n        }\n        .overlay-contentpush {\n            background: rgb(255,255,255);\n            visibility: hidden;\n            -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n            -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n            -webkit-transition: -webkit-transform 0.5s, visibility 0s 0.5s;\n            transition: transform 0.5s, visibility 0s 0.5s;\n        }\n        .overlay-contentpush.open {\n            visibility: visible;\n            -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n            -webkit-transition: -webkit-transform 0.5s;\n            transition: transform 0.5s;\n        }header .btn {\n        border: solid 2px rgb(255,255,255);\n        color: rgb(255,255,255);\n        background: rgb(239, 84, 59);\n        text-transform: none;\n        margin-top: 20px;\n        font-size: 20px;\n        margin-right: 10px;\n    }\n    header .btn:hover {\n        background: rgb(255,255,255) !important;\n        color:  !important;\n        border: solid 2px rgb(255,255,255) !important;\n    }\n    header .btn::selection {\n        color: rgb(255,255,255);\n    }\n    header .btn::-moz-selection {\n        color: rgb(255,255,255);\n    }\n    header .btn:active {\n        color: rgb(255,255,255);\n    }\n    header .btn:active {\n        color: rgb(255,255,255);\n    }\n    #singleImageHeader {\n        background-repeat: no-repeat !important;\n        background-size: cover, 100% 100% !important;\n        background-position: 50% 50%, center !important;\n    }\n    footer {\n        background: rgb(255,255,255);\n        color: rgb(51,51,51);\n        text-align: center;\n        padding: 20px;\n    }\n    footer p {\n        margin-bottom: 0px !important;\n    }\n    .contactForm textarea {\n        resize: none;\n        height: 150px !important;\n    }\n    .sweet-alert h2 {\n        font-size: 30px !important;\n        text-shadow: none !important;\n        text-transform: none !important;\n    }\n    .user-stats {\n        width: 80%;\n        left: 10%;\n        margin-top: 40px;\n    }\n    #sEmail {\n        height: 30px;\n    }\n    .outerGrid {\n        display: inline-grid;\n        position: relative;\n    }\n    .innerGridTable {\n        display: table;\n        height: 100%;\n        width: 100%;\n    }\n    .innerTableContent {\n        display: table-cell;\n        vertical-align: middle;\n    }\n    .customFrameElem {\n        width: 100%;\n        margin-top: 50px;\n        margin-bottom: 50px;\n    }\n    .insertNewBtn {\n        font-size: 30px;\n    }\n    @media only screen and (max-width : 800px) {\n        .affix-top .navbar-nav>li>a {\n            color: rgb(51,51,51) !important;\n        }\n        .affix-top #pageTitle {\n            color: rgb(51,51,51) !important;\n        }\n        .row {\n            display: initial !important;\n            margin: 0;\n        }\n        .col-md-10 {\n            width: 100%;\n        }\n        .headerSectionDiv {\n            margin-top: 80px;\n            text-align: center !important;\n            display: block !important;\n            margin-bottom: 80px;\n        }\n        .headerContentContainer {\n            display: block !important;\n        }\n        .extraTextSection {\n            position: initial !important;\n            width: 100%;\n        }\n        .extraTextSectionLeft {\n            margin-bottom: 50px;\n        }\n        .extraTextSectionRight {\n            margin-top: 50px;\n        }\n        header .newsLetterForm {\n            width: 60%;\n            left: 20%;\n        }\n        .user-stats {\n            width: 60%;\n            left: 20%;\n        }\n    }\n    @media only screen and (max-width : 400px) {\n        .headerSectionDiv {\n            text-align: center !important;\n            margin-top: 80px;\n            padding-left: 0;\n            padding-right: 0;\n            margin-bottom: 80px;\n        }\n        .pSection {\n            margin-top: 20px !important;\n        }\n        header .newsLetterForm {\n            width: 100%;\n            left: 0;\n        }\n        .user-stats {\n            width: 100%;\n            left: 0%;\n        }\n    }\n    html {\n        position: absolute;\n        width: 100%;\n        overflow-x: hidden;\n    }\n    body {\n        position: absolute;\n        width: 100%;\n    }\n    header {\n        height: 700px;\n        width: 100%;\n        display: table;\n             text-shadow: 2px 2px 3px black;\n        table-layout: fixed;\n        word-wrap: break-word;\n    }\n    section {\n        background-repeat: no-repeat !important;\n        background-size: cover, 100% 100% !important;\n        background-position: 50% 50%, center !important;\n        position: relative;\n        table-layout: fixed;\n        word-wrap: break-word;\n    }\n    .headerContainer {\n        margin-top: 50px;\n        height: 100%;\n        display: table-cell;\n        vertical-align: middle;\n        position: relative;\n        padding-bottom: 50px;\n    }\n    h1 {\n        font-size: 130px;\n    }\n    h2 {\n        font-size: 110px;\n    }\n    h3 {\n        font-size: 90px;\n    }\n    h4 {\n        font-size: 40px;\n    }\n    h5 {\n        font-size: 35px;\n    }\n    h6 {\n        font-size: 30px;\n    }\n    .row {\n        display: flex;\n    }\n    #mainTitleSection {\n        display: table !important;\n        height: 100%;\n        table-layout: fixed;\n    }\n    .headerContentContainer {\n        vertical-align: middle;\n        display: table-cell !important;\n        padding-bottom: 20px;\n        padding-top: 50px;\n    }\n    .newsLetterForm .input-group {\n        margin-left: 10%;\n        width: 80%;\n    }\n    .newsLetterForm input {\n        height: 30px;\n    }\n    .contactForm input {\n        height: 30px;\n    }\n    .pSection {\n        position: relative;\n        margin-top: 20px !important;\n        display: table;\n        height: 100%;\n    }\n    .pContainer {\n        display: table;\n        position absolute;\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n        text-align: center;\n    }\n    .aboutP {\n        display: table-cell;\n        height: 100%;\n        vertical-align: middle;\n        font-size: 16px;\n    }\n    .galleryItem img {\n        min-width: 20px;\n        min-height: 20px;\n    }\n    \n    @media only screen and (max-width : 400px) {\n        #pageTitle {\n            padding-top: 20px !important;\n        }\n    }#mainSubtitle {\n                        color: rgb(255,255,255);\n                        text-transform: none;\n                    }#mainTitle {\n                    color: rgb(255,255,255);\n                    text-transform: none;\n                }.sectionTitle {\n        font-size: 50px;\n        text-align: center;\n        text-transform: none;\n        color: rgb(239, 84, 59);\n    }\n    .sectionSubtitle {\n        font-size: 20px;\n        text-align: center;\n        margin-bottom: 50px;\n        text-transform: none;\n        color: rgb(239, 84, 59);\n    }\n    .pageSection {\n        padding: 50px 20px;\n        text-align: center;\n        position: relative;\n    }\n    .pageSection p {\n        padding: 0px 20px;\n    }\n    .descriptionText {\n        font-size: 18px;\n    }.descriptionText {\n                font-size: 18px;\n            }\n    " }} />
                      {/* <button id="trigger-overlay" type="button">
                        <i className="fa fa-bars" aria-hidden="true" />
                      </button> */}
                      {/* <div id="menuOverlaySection" className="overlay overlay-contentpush">
                        <button id="close-menu" style={{color: 'white', padding: 0, float: 'none', textAlign: 'center'}} type="button" className="overlay-close">
                          <i className="fa fa-times" aria-hidden="true" />
                        </button>
                        <nav id="mainNav" role="navigation">
                          <ul>
                            <li>
                              <a id="aboutItem" className="menuItem page-scroll " href="#about">About</a>
                            </li><li>
                              <a id="featuresItem" className="menuItem page-scroll " href="#features">Features</a>
                            </li><li>
                              <a id="galleryItem" className="menuItem page-scroll " href="#gallery">Gallery</a>
                            </li><li>
                              <a id="testimonialsItem" className="menuItem page-scroll " href="#testimonials">Testimonials</a>
                            </li><li>
                              <a id="teamItem" className="menuItem page-scroll " href="#team">Team</a>
                            </li><li>
                              <a id="blogItem" className="menuItem page-scroll " href="#blog">Blog</a>
                            </li><li>
                              <a id="contactItem" className="menuItem page-scroll " href="#contact">Contact</a>
                            </li>
                          </ul>
                        </nav>
                      </div> */}
                      <header id="page-top">
                        <div id="singleImageHeader" className="container headerContainer" >
                        
                          <div style={{display: 'flex', position: 'relative', height: '100%', width: '100%'}} className="row row-eq-height">
                            <div style={{textAlign: 'center'}} className="col-md-6 col-md-offset-1 headerSectionDiv" id="mainTitleSection">
                            <div className="headerContentContainer">
                          <Tilt className="Tilt br2 shadow-2 center" options={{ max : 55 }} style={{ height: 150, width: 250 }} >
                          <div className="Tilt-inner pa3">
                              <img style={{paddingTop: '5px'}} src={logo} /> 
                          </div>
                        </Tilt>
                                <h3 id="mainTitle">Innovative AI</h3>
                                <h6 id="mainSubtitle">Interviews Redifned</h6>
                              </div>
                            </div>
                            <div style={{textAlign: 'left'}} className="col-md-4 pSection headerSectionDiv">
                              <div className="pContainer"><div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                                  <style dangerouslySetInnerHTML={{__html: "#extraHTML h4 {font-size: 3.5em;text-transform: uppercase;color: #ffffff;font-weight: 600;letter-spacing: 4px;text-align: center;}#extraHTML i {color: rgb(239, 84, 59);}#extraHTML span {text-shadow: 0px 5px 11px #000000;font-size: 40px; display: block; color: white;} #extraHTML {margin-bottom: 50px; font-size: 5em;}" }} /><div className="row"><div className="col-md-12"><style id="newsletterStyle" dangerouslySetInnerHTML={{__html: "\n            .newsLetterForm {\n                text-align: left;\n                margin-top: 30px;\n            }\n            .newsLetterForm p {\n                text-align: left;\n                font-size: 18px;\n            }\n            #subscribeButton {\n                color: rgb(255,255,255) !important;\n                background: rgb(239, 84, 59) !important;\n                border-color: rgb(255,255,255) !important;\n                border-radius: 0px !important;\n                margin-bottom: 10px;\n                margin-right: 0;\n            }\n            #subscribeButton:hover {\n                color: rgb(239, 84, 59) !important;\n                background: rgb(255,255,255) !important;\n                border-color: rgb(239, 84, 59) !important;\n            }\n            .newsLetterForm .input-group input, textarea {\n                background: rgb(255,255,255) !important;\n                color: rgb(0,0,0) !important;\n                border-radius: 0px !important;\n                text-transform: none !important;\n                border-bottom-left-radius: 0 !important;\n                border-top-left-radius: 0 !important;\n            }\n            .newsLetterForm .input-group input::placeholder {\n                color: rgb(117,117,117) !important;\n            }\n            .newsLetterForm .input-group textarea::placeholder {\n                color: rgb(117,117,117) !important;\n            }\n            .newsLetterForm .input-group input:-ms-input-placeholder {\n                color: rgb(117,117,117) !important;\n            }\n            .newsLetterForm .input-group textarea:-ms-input-placeholder {\n                color: rgb(117,117,117) !important;\n            }\n            .newsLetterForm .input-group input::-ms-input-placeholder {\n                color: rgb(117,117,117) !important;\n            }\n            .newsLetterForm .input-group textarea::-ms-input-placeholder {\n                color: rgb(117,117,117) !important;\n            }\n            .newsLetterForm .input-group-addon {\n                background: rgb(239, 84, 59) !important;\n                color: rgb(255,255,255) !important;\n                border-radius: 0px;\n                border-top-right-radius: 0;\n                border-bottom-right-radius: 0;\n            }\n            .newsLetterForm .input-group-addon:firstChild {\n                margin-left: 0px;\n            }\n            .newsLetterForm {\n                background: rgba(0,0,0,0.75) !important;\n                border: none !important;\n                color: rgb(255,255,255) !important;\n                padding: 10px;\n                text-align: center;\n            }\n            .newsLetterForm .form-control {\n                border: 1px solid rgb(255,255,255);\n            }\n            .newsletterTitle {\n                color: rgb(255,255,255) !important;\n                font-size: 40px;\n                padding-bottom: 15px;\n                text-align: center;\n            }\n        " }} />
                                      <form className="newsLetterForm col-md-12" onSubmit={this.onFormSubmit}>
                                        <h5 id="newsletterTitle" className="sectionTitle newsletterTitle">Subscribe to Our NewsLetter</h5>
                                        <div className="form-group">
                                          <div className="input-group">
                                            <span className="input-group-addon"><i id="newsletterAddOn" className="fa fa-envelope" /></span>
                                            <input name="sEmail" type="email" className="form-control" id="sEmail" placeholder="Your Email" required="required" 
                                              onChange={(e)=>{this.email=e.target.value;console.log(this.email)}}
                                            />
                                          </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary" id="subscribeButton">Subscribe</button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                     </div>          
                      </header>
                      <section style={{background: 'white'}}><div className="container pageSection text-section-1 u483dhvBpO9Js5rgliBYQU5hyjHnA51xAxFXEU5i">
                          <div className="row">
                            <div className="col-md-4 outerGrid">
                              <div className="innerGridTable">
                                <div className="innerTableContent">
                                  <img src={face_rec} />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 outerGrid">
                              <div className="innerGridTable">
                                <div className="innerTableContent">
                                  <h4>Check Us Out</h4>
                                  <p>Our AI services center around our customers' most basic issues and openings for a desireable solution: technique, quality, expertise, delivery, efficiency, and sharpness. We bring profound, useful aptitude, and are known for our all encompassing point of view: we catch an incentive crosswise over limits and between the existing solutions of any of our customers. We have demonstrated a multiplier impact from streamlining the aggregate of the parts, not simply the individual pieces.</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 outerGrid">
                              <div className="innerGridTable">
                                <div className="innerTableContent">
                                  <img src={face_rec1} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <style dangerouslySetInnerHTML={{__html: "\n            .text-section-1 img {\n                width: 100%;\n            }\n            .text-section-1 {\n                text-align: center;\n            }\n            .text-section-1 .col-md-4 {\n                padding: 30px 15px;\n            }\n            .text-section-1 h4 {\n                font-size: 40px;\n            }\n        " }} />
                        </div>
                        </section>
                        <section style={{background: 'url("img/VAQl2-4jy5T-wvpkD-6eBCR-28RlZ.jpeg")', position: 'relative'}}>
                        <div style={{backgroundColor: 'rgba(0,0,0,0.7)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
                        <style id="aboutStyle" dangerouslySetInnerHTML={{__html: "\n                #aboutParagraph {\n                    font-size: 18px;\n                    padding-bottom: 40px;\n                }\n                #aboutImage {\n                    max-width: 100%;\n                    margin-top: 20px;\n                    margin-bottom: 20px;\n                }\n                #about {\n                    color: rgb(255,255,255) !important;\n                }\n                #about .sectionTitle {\n                    color: rgb(255,255,255) !important;\n                }\n                #about .sectionSubtitle {\n                    color: rgb(255,255,255) !important;\n                }\n                #about hr {\n            border-width: 2px;\n            border-color: rgb(255,255,255);\n            max-width: 150px;\n            margin-bottom: 30px;\n        }\n            " }} />
                        <div className="container pageSection" id="about">
                          <h1 id="aboutTitle" className="sectionTitle">About</h1>
                          <h4 id="aboutSubtitle" className="sectionSubtitle">Learn more about what we do.</h4>
                          <hr />
                          <div id="aboutContent" style={{display: 'flex'}} className="row">
                            <div className><div className="row"><div style={{display: 'inline-block', position: 'relative'}}><div style={{height: '100%', width: '100%', display: 'table'}}>
                                    <p style={{display: 'table-cell', verticalAlign: 'middle'}} className="aboutParagraph" id="aboutParagraph" > We didn't try filling in this paragraph for you because there is no one on this planet - not even A.I. as smart as Innovative :) - who knows what you do as well as you! Try replacing this paragraph with a few sentances that describe what you do, how you do it, and why you are better than everyone else. Remember that sometimes less is more, so it is ok to be brief here if you don't know what to write. The main goal is to communicate to your viewer that you can offer them some value, and encourage them to reach out to you to learn even more about what that value is! Also, feel free to look up other websites like yours online for some inspiration. </p>
                                  </div>
                                  </div>
                                {/* <div style='position: relative; padding: 0; display: inline-grid;' class='col-md-6'><div style='height: 100%; width: 100%; display: table;'>
                                      <div style='display: table-cell; vertical-align: middle; width: 100%; height: 100%;'>
                                          <img id='aboutImage' style='max-width: 100%; max-height: 100%;' src='img/v1BhY-MFGNw-AGm6G-g8yDv-kQSkC.jpeg' />
                                      </div>
                                  </div> */}
                              </div>
                            </div>
                          </div>
                        
                      {/* further homepage will be made after building of the product */}
                      
                        {/* <section style={{background: 'url("img/NwIkt-8QnZy-CVND4-Bs8KU-nxfHa.png")', position: 'relative'}}>
                        <div style={{backgroundColor: 'rgba(0,0,0,0.4)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
                        <style id="featureStyle" dangerouslySetInnerHTML={{__html: "\n                .featureText {\n                    margin-bottom: 40px;\n                }\n                .featureIcon {\n                    color: rgb(255,255,255);\n                    background: rgba(0,0,0,0);\n                    border-radius: 0px;\n                }\n                .featureElem {\n                    color: rgb(255,255,255);\n                    background: rgba(0,0,0,0);\n                    border: none;\n                    cursor: pointer;\n                }\n                .featureElem:hover {\n                    background: rgba(0,0,0,0);\n                    color: rgb(255,255,255);\n                }\n                .featureHr {\n                max-width: 100px !important;\n                margin: 15px auto !important;\n                border-width: 2px !important;\n                border-color: rgb(255,255,255) !important;\n            }\n                #features {\n                    color: rgb(255,255,255) !important;\n                }\n                #features .sectionTitle {\n                    color: rgb(255,255,255) !important;\n                }\n                #features .sectionSubtitle {\n                    color: rgb(255,255,255) !important;\n                }\n                #features hr {\n            border-width: 2px;\n            border-color: rgb(255,255,255);\n            max-width: 150px;\n            margin-bottom: 30px;\n        }\n            " }} />
                        <div className="container pageSection" id="features">
                          <h1 id="featuresTitle" className="sectionTitle">Features</h1>
                          <h4 id="featuresSubtitle" className="sectionSubtitle">Check out some of our awesome features.</h4>
                          <hr />
                          <div style={{display: 'flex'}} className="row"><div className="col-md-8"><div className="row" id="featuresContent"><div className="featureElem col-md-4">
                                  <i className="featureIcon fa-3x fa fa-thumbs-up" />
                                  <h5 className="featureHeader">Quality</h5>
                                  <hr className="featureHr" />
                                  <p className="featureText">We always perform our projects with the utmost quality and integrity.</p>
                                </div><div className="featureElem col-md-4">
                                  <i className="featureIcon fa-3x fa fa-briefcase" />
                                  <h5 className="featureHeader">Pro</h5>
                                  <hr className="featureHr" />
                                  <p className="featureText">Every step of the process will be handled by our team with true professionalism.</p>
                                </div><div className="featureElem col-md-4">
                                  <i className="featureIcon fa-3x fa fa-lock" />
                                  <h5 className="featureHeader">Reliable</h5>
                                  <hr className="featureHr" />
                                  <p className="featureText">You can count on us to make sure your project is completed with care.</p>
                                </div></div></div>
                            <div style={{display: 'inline-grid', position: 'relative'}} className="col-md-4"><div className="extraTextSection extraTextSectionRight" style={{position: 'absolute', height: '100%', display: 'table'}}><p id="featureP" style={{display: 'table-cell', verticalAlign: 'middle'}} className="descriptionText">As a leader in the AI space, we are an imaginative group of problem solvers who are energetic about sparing our customers time, dissatisfaction, and cash. Utilizing our associations with extravagant suppliers, overall we deliver solutions explicit to our customer's exceptional needs, guaranteeing that the unlimited subtleties are dealt with and top-level specialist organizations are foreseeing your landing all throughout the adventure of working together.</p></div></div></div>
                        </div>
                      </section> */}
                      {/* <section style={{background: 'white', position: 'relative'}}>
                        <div style={{backgroundColor: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} />
                        <div className="container pageSection" id="contact">
                          <h1 id="contactTitle" className="sectionTitle">Contact</h1>
                          <h4 id="contactSubtitle" className="sectionSubtitle">Send us a message using the form below.</h4>
                          <hr />
                          <div className="row">
                            <div className="col-md-12"><div className="row"><div className="col-md-6">
                                  <div className="contactDetails">
                                    <div>
                                      <h4>Get In Touch</h4>
                                      <div>
                                        <div>
                                          <i className="fa fa-phone" /> <span>Telephone:</span> <span>+91 7982666579</span>
                                        </div>
                                      </div>
                                      <div>
                                        <div>
                                          <i className="fa fa-envelope" /> <span>Mail:</span> <span>disha.onai@gmail.com</span>
                                        </div>
                                      </div>
                                      <div>
                                        {/* <div>
                                  <i class="fa fa-map-marker"></i> <span>Location:</span> <span>1 Website Lane, Suite 1000<br>Boston, MA 11111</span>
                              </div> */}
                                      {/* </div>
                                    </div>
                                    <style dangerouslySetInnerHTML={{__html: "\n            .contactDetails {\n                padding: 20px;\n            }\n            .contactDetails div div div {\n                padding: 12px;\n                font-size: 18px;\n            }\n            .contactDetails i {\n                margin-right: 10px;\n                background: black;\n                color: white;\n                border-radius: 20px;\n                padding: 5px;\n            }\n        " }} />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <style id="contactStyle1" dangerouslySetInnerHTML={{__html: "\n            .contactForm {\n                text-align: left;\n                margin-top: 30px;\n            }\n            .contactDetails p {\n                text-align: left;\n                font-size: 18px;\n            }\n            .textarea-group {\n                width: 100%;\n            }\n        " }} />
                                  <form className="contactForm col-md-12" onsubmit="event.preventDefault(); return false;">
                                    <div className="form-group">
                                      <label id="contactFormNameLabel" htmlFor="name">Name</label>
                                      <div className="input-group">
                                        <span className="input-group-addon"><i id="nameAddOn" className="fa fa-envelope" /></span>
                                        <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required="required" />
                                      </div>
                                    </div><div className="form-group">
                                      <label id="contactFormEmailLabel" htmlFor="email">Email Address</label>
                                      <div className="input-group">
                                        <span className="input-group-addon"><i id="emailAddOn" className="fa fa-envelope" /></span>
                                        <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" required="required" />
                                      </div>
                                    </div><div className="form-group">
                                      <label id="contactFormSubjectLabel" htmlFor="subject">Subject</label>
                                      <div className="input-group">
                                        <span className="input-group-addon"><i id="subjectAddOn" className="fa fa-envelope" /></span>
                                        <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required="required" />
                                      </div>
                                    </div><div className="form-group">
                                      <label id="contactFormMessageLabel" htmlFor="subject">Message</label>
                                      <div className="input-group textarea-group">
                                        <textarea name="message" id="message" className="form-control" required="required" placeholder="Message" defaultValue={""} />
                                      </div>
                                    </div>
                                    <button onclick="submitMessage()" type="submit" className="btn btn-primary" id="contactButton">Send Message</button>
                                  </form>
                                </div></div></div>
                          </div>
                        </div>
                        <style id="contactStyle2" dangerouslySetInnerHTML={{__html: "\n                #contact hr {\n            border-width: 2px;\n            border-color: grey;\n            max-width: 150px;\n            margin-bottom: 30px;\n        }\n                #contactButton {\n                    color: rgb(255,255,255) !important;\n                    background: rgb(239, 84, 59) !important;\n                    border-color: rgb(255,255,255) !important;\n                    border-radius: 0px !important;\n                }\n                #contactButton:hover {\n                    color: rgb(239, 84, 59) !important;\n                    background: rgb(255,255,255) !important;\n                    border-color: rgb(239, 84, 59) !important;\n                }\n                .contactForm .input-group input, textarea {\n                    background: rgb(255,255,255) !important;\n                    color: rgb(0,0,0) !important;\n                    border-radius: 0px !important;\n                    text-transform: none !important;\n                    border-bottom-left-radius: 0 !important;\n                    border-top-left-radius: 0 !important;\n                }\n                .contactForm .input-group input::placeholder {\n                    color: rgb(117,117,117) !important;\n                }\n                .contactForm .input-group textarea::placeholder {\n                    color: rgb(117,117,117) !important;\n                }\n                .contactForm .input-group input:-ms-input-placeholder {\n                    color: rgb(117,117,117) !important;\n                }\n                .contactForm .input-group textarea:-ms-input-placeholder {\n                    color: rgb(117,117,117) !important;\n                }\n                .contactForm .input-group input::-ms-input-placeholder {\n                    color: rgb(117,117,117) !important;\n                }\n                .contactForm .input-group textarea::-ms-input-placeholder {\n                    color: rgb(117,117,117) !important;\n                }\n                .contactForm .input-group-addon {\n                    background: rgb(239, 84, 59) !important;\n                    color: rgb(255,255,255) !important;\n                    border-radius: 0px;\n                    border-top-right-radius: 0;\n                    border-bottom-right-radius: 0;\n                }\n                .contactForm .input-group-addon:firstChild {\n                    margin-left: 0px;\n                }\n                .contactForm {\n                    background: rgba(0,0,0,0) !important;\n                    border: none !important;\n                    color: rgb(0,0,0) !important;\n                    padding: 20px 10px;\n                    margin-bottom: 50px;\n                }\n                .contactForm .form-control {\n                    border: 1px solid rgb(0,0,0);\n                }\n            " }} />
                      </section>  */}
                      <footer>
                        <p id="footerText">© Innovative AI 2019. All Rights Reserved.</p>
                      </footer>
                 </div>
                 </section>
                 </div>
        )
      }
    }
  }
    

export default connect(mapStateToProps)(HomePage)