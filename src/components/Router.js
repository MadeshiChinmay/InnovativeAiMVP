import React from 'react';
import { BrowserRouter , Switch , Route } from "react-router-dom";
import App from "../App";
//import ExamScreen from './ExamScreen';
import InstructionVideo from './InstructionVideo';
import TestScreen from './TestScreen'
import StudentProfile from './StudentProfile';
import Header from './Header'
import Recording from './recording/recording'
import UserForm from './UserForm';
import ResultPage from './ResultPage'



function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/Instructions" component={InstructionVideo} />
                <Route path="/TestScreen" component={TestScreen} />
                <Route path="/StudentProfile" component={StudentProfile}/>
                <Route path="/Recording" component={Recording}/>
                <Route path="/UserForm" exact component={UserForm} />
                <Route path="/Result" exact component={ResultPage} />

            </Switch>
        </BrowserRouter>
    )
}

export default Router