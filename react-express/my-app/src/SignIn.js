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
import {Link as RouterLink} from "react-router-dom";
import NavBar from "./NavBar"
import Copyright from './Copyright'


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

class SignIn extends React.Component {

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
  //Sign in page STUFF vv

  render() {
    return (
      <div>
      <NavBar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper}>
          <Typography align='center'> 
            <Logo/> 
          </Typography>
          <Typography component="h1" variant="h5" align='center'>
            Sign in
          </Typography>
      <form id="name-form" action="http://localhost:8000/login" method="POST" className={useStyles.form} noValidate>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                  <RouterLink to="/ForgotPass">
                    Forgot your password?
                  </RouterLink>
              </Grid>
              <Grid item >
                  <RouterLink to="/SignUp">
                    Don't have an account? Sign up!
                  </RouterLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
        <p className="App-intro" align="center"> {this.state.apiResponse}</p>
          <Copyright />
        </Box>
      </Container>
      </div>
    );
  }
}

export default SignIn;