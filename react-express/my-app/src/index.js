import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import SignIn from './SignIn';
<<<<<<< HEAD
import SignUp from './SignUp';
import ForgotPass from './ForgotPass';
import AddTask from './AddTask';
//import {Alert} from 'react-alert'
=======
import SignUp from './SignUp'
import ForgotPass from './ForgotPass'
>>>>>>> 0e7008c9794eb78d807a7c86b99df0325cafa7b8
import TMRouter from './TMRouter'

ReactDOM.render(<TMRouter/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

