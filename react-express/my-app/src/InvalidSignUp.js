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
import NavBar from './NavBar';
import Copyright from './Copyright'
import { UncontrolledAlert as Alert} from 'reactstrap';


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

class InvalidSignUp extends React.Component {

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

  //API STUFF ^^
  //Sign up page STUFF vv

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
            Sign Up
          </Typography>
      <form id="name-form" action="http://localhost:8000/signup" method="POST" className={useStyles.form} noValidate>
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Confirm Password"
              type="password"
              id="password2"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              id="email"
              autoComplete="email"
              autoFocus
            />
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
            <Alert color="danger">
                Passwords don't match, try again
            </Alert>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
            >
              Create Account
            </Button>
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

export default InvalidSignUp;