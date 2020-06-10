import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPass from './ForgotPass'
import SignUpExp from './SignUpExp'
import MyCal from './MyCal'
import MyCalError from './MyCalError'
import MyCalError2 from './MyCalError2'
import MyCalError3 from './MyCalError3'
import MyCalError4 from './MyCalError4'
import InvalidPwd from './InvalidPwd'
import About from './About'
import Contact from './Contact'
import AddTask from './AddTask'
import ContributeTask from './ContributeTask'
import InvalidSignUp from './InvalidSignUp';
import InvalidSignUp2 from './InvalidSignUp2';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function TMRouter() {
  return (
    <Router>
      <div>
      <Switch>
          <Route path="/SignUp">
            <SignUp/>
          </Route>
          <Route path="/SignUpExp">
            <SignUpExp/>
          </Route>
          <Route path="/ForgotPass">
            <ForgotPass/>
          </Route>
          <Route path="/MyCal">
            <MyCal/>
          </Route>
          <Route path="/MyCalError">
            <MyCalError/>
          </Route>
          <Route path="/MyCalError2">
            <MyCalError2/>
          </Route>
	  <Route path="/MyCalError3">
            <MyCalError3/>
          </Route>
          <Route path="/MyCalError4">
            <MyCalError4/>
          </Route>
          <Route path="/InvalidPwd">
            <InvalidPwd/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/AddTask">
            <AddTask/>
          </Route> 
	  <Route path="/ContributeTask">
            <ContributeTask/>
	  </Route>
          <Route path="/InvalidSignUp">
            <InvalidSignUp/>
          </Route>
	  <Route path="/InvalidSignUp2">
            <InvalidSignUp2/>
          </Route>
          <Route path="/">
            <SignIn/>
          </Route>
        </Switch>
        </div>
    </Router>
        /*
            NOTE!!!: ALWAYS make the path "/" last
            This is because the router will search for any routes that match 
            "/" and all the paths begin with "/". It'     
        */

        /* EXAMPLE of how to link:
            <Link to="/">SignIn</Link>
            <Link to="/SignUp">SignUp</Link>
        */
        /*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */


  );
}