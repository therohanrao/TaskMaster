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


function DatePickers() {
const classes = useStyles();

    return (
      <Grid container justify="space-around">
       <form className={classes.container} noValidate>
      <TextField
        id="startdate"
        label="Start Date"
        type="date"
        defaultValue="2020-06-01"
	    className={classes.textField}
	    InputLabelProps={{
		    shrink: true,
		}}
      />
       <TextField
        id="enddate"
        label="End Date"
        type="date"
        defaultValue="2020-06-01"
       className={classes.textField}
       InputLabelProps={{
	       shrink: true,
	   }}
      />

    </form>
    </Grid>  
	    );
}
    

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
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


class addTask extends React.Component {

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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper}>
          <Typography align='center'> 
          <p className="App-intro"> {this.state.apiResponse}</p>
            <Logo/> 
          </Typography>
          <Typography component="h1" variant="h5" align='center'>
              Add Task
          </Typography>
      <form id="name-form" action="http://localhost:8000/addTask" method="POST" className={useStyles.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Name"
              label="Name"
              id="Name"
              autoComplete="Name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Description"
              label="Description"
              type="Description"
              id="Description"
              autoComplete="Description"
            />
            <Box mt={8}>
               <DatePickers />
            </Box>   
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
              Add Task
            </Button>
            <Grid container>
              <Grid item xs>
                  <RouterLink to="/myCal">
                    Back to Calendar
                  </RouterLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default addTask;