import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from './TMLogo';
import {Link as RouterLink} from "react-router-dom";
import NavBar from "./NavBar"

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
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class Contact extends React.Component {

  render() {
    return (
      <div>
      <NavBar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper}>
          <Typography align='center'> 
          <p className="App-intro"> </p>
            <Logo/> 
          </Typography>
          <Typography component="h5" align='center'>
          <h3>CMD TaskMaster</h3>
          <br></br>
            <strong>CONTACT US</strong>
            <br></br>
            Have a question? Want to comment? Need to bring up a concern? Feel free to contact any of our technicians, via email. 
            <br></br>
            <br></br>
            <strong>J.R. BRONKAR:</strong> 
            <br></br>
            jrbronkar@gmail.com
            <br></br>
            <strong>BRIAN CHAP:</strong> 
            <br></br>
            bchapcreative@gmail.com
            <br></br>
            <strong>ETHAN NGO:</strong> 
            <br></br>
            ethan.ngo2019@gmail.com
            <br></br>
            <strong>ROHAN RAO:</strong> 
            <br></br>
            raokrohan@gmail.com
            <br></br>
            <RouterLink to="/MyCal">
                Retun to Home
              </RouterLink>
          </Typography>
        </div>
        <Box mt={3}>
          <Copyright />
        </Box>
      </Container>
      </div>
    );
  }
}

export default Contact;