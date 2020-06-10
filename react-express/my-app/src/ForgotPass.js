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
            <Logo/>
          </Typography>
          <Typography component="h1" variant="h5" align='center'>
      Enter Username to get Password: 
            <br></br>
          </Typography>
      <form id="name-form" action="http://localhost:8000/forgotPass" method="POST" className={useStyles.form} noValidate>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
      className={useStyles.submit}
            >
              Retrieve Password
            </Button>
            
        </form>
        </div>
      <Box mt={8}>
      <p className="App-intro" align="center"> {this.state.apiResponse}</p>
          <Copyright />
        </Box>
        <br></br>
      </Container>
      </div>
		);
    }
}

export default ForgotPass;