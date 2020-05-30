import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SignIn from './SignIn';
import SignUp from './SignUp'
import ForgotPass from './ForgotPass'
//import {Alert} from 'react-alert'
import TMRouter from './TMRouter'

var element = React.createElement('h1', {className: 'greetings'}, "hello world");
var login = <SignIn/>

ReactDOM.render(<TMRouter/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

