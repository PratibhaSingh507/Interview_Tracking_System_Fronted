//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListInterviewComponent from './components/ListInterviewComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateInterviewComponent from './components/CreateInterviewComponent';
import UpdateInterviewComponent from './components/UpdateInterviewComponent';
import ViewInterviewComponent from './components/ViewInterviewComponent';


function App() {
  return (


<div>
<Router>
      <HeaderComponent />
        <div className="container">
            <Switch> 
                  <Route path = "/" exact component = {ListInterviewComponent}></Route>
                  <Route path = "/interviews" component = {ListInterviewComponent}></Route>
                  <Route path = "/add-interview/:interviewId" component = {CreateInterviewComponent}></Route>
                  <Route path = "/view-interview/:interviewId" component = {ViewInterviewComponent}></Route>
                  { <Route path = "/update-interview/:interviewId" component = {UpdateInterviewComponent}></Route> }
            </Switch>
        </div>
      <FooterComponent />
</Router>
</div>
  );
}

export default App;
