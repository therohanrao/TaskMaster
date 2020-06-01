import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from './TMLogo';
import LogoBackground from './JR_logo.png';
import {Alert} from 'reactstrap'
import NavBar from './NavBar'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
    backgroundImage: `url(${LogoBackground})`
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function myFunction(){
    fetch("./create-account.html")
}

function attemptLogin(){
    var form = document.getElementByID("name-form");
    console.log(form.username, form.password);
}

function EnterUname() {
    return(
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="username"
              label="Username"
              id="username"
              autoComplete="username"
              autoFocus
            />
    );
}

function DisplaySQ() {
    return(
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="securityquestion"
              label="Security Question"
              id="securityquestion"
              autoComplete="security-question"
              autoFocus
            />
    );
}

function EnterSA() {
    return (
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="securityanswer"
          label="Security Answer"
          id="securityanswer"
          autoComplete="security-answer"
          autoFocus
        />
    );
}


function GetPassButton(props) {
    const unameExists = props.unameExists;
    
    if(unameExists) {
        var buttonName = "Return To Sign In"
    } else {
        var buttonName = "Retrieve Password"
    }

    return (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
            >
              {buttonName}
            </Button>
    );
}

function Greeting(props) {
    const unameExists = props.unameExists;
  if (unameExists) {
    return <DisplaySQ/>;
  }
  return <EnterUname/>;
}

class SecurityControl extends React.Component {
    constructor(props) {
        super(props);
        this.GetSQClick = this.GetSQClick.bind(this);
        this.state = {unameExists: false};
      }

      GetSQClick() {
        this.setState({unameExists: true});
      }
    
      handleLogoutClick() {
        this.setState({unameExists: false});
      }

      render() {
        const unameExists = this.state.unameExists;
        let button;
        if (unameExists) {
          button = <GetPassButton onClick='http://localhost:3000/SignIn' />;
        } else {
          button = <GetPassButton/>;
        }
    
        return (
          <div>
            <Greeting unameExists={unameExists} />
            {button}
          </div>
        );
      }
    }

class ForgotPass extends React.Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "API not working" };
  }
  
  callAPI() {
    fetch("http://localhost:8000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }
  
  componentWillMount() {
    this.callAPI();
  }

  displaySecurityQuestion(props) {
    const userFound=props.userFound;
    if(userFound) {

    }}


  //API STUFF ^^
  //Forgot Password page STUFF vv

  render() {
    return (
      <div>
        <NavBar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper}>
          <Typography align='center'> 
          <p className="App-intro"> {this.state.apiResponse}</p>
            <Logo/>
          </Typography>
          <Typography component="h1" variant="h5" align='center'>
            Enter Username to get Password: 
            <br></br>
          </Typography>
        <form id="name-form" action="http://localhost:8000/SignUpExp" method="POST" className={useStyles.form} noValidate>
            <SecurityControl/>
            
        </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
        <br></br>
      </Container>
      </div>
    );
  }
}

export default ForgotPass;