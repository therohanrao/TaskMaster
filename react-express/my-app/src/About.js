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

class About extends React.Component {

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
          <h1>CMD TaskMaster</h1>
          <h2>(C-M-Del TaskMaster)</h2>
          <h3> 
            By Jerry (J.R.) Bronkar, Brian Chap, Ethan Ngo, and Rohan Rao
          </h3>
          <p><strong>INTRODUCTION AND BACKGROUND</strong></p>
          <div>
          <p>
          <i>CMD TaskMaster</i> is a task and event-focused calendar application. 
          It will be able to solve organizational challenges faced by the user(s) as 
          either an individual or member of a community, company, or a group by providing 
          an easy to use framework for events, project development, task distribution, and 
          “to-do” lists with no specific deadline.
          </p>
          </div>

          <p><strong>FEATURES</strong></p>
          <div>
          <p>
          Users will be able to create tasks and sub-tasks within time-windows/deadlines 
          or until the task is actively marked as complete. Group features will also be part 
          of this application as users will be able to assign and delegate tasks to other users 
          in the group, accept tasks from other users, and invite users to their group. 
          Critical to the app is the idea of nesting, particularly nested tasks and nested groups. 
          For example, this software project is a task that can be subdivided into many sub-tasks, 
          and the CS97 class is a group that is divided into subgroups. We hope to also include 
          location services (with respective permissions) by extending the application to local 
          events, where users could view public events around their area. Out of scope features 
          that this application will not implement in the time allotted will be a completely public 
          marketplace where users could post tasks for anyone to complete. Users must assign tasks 
          to specific groups or other specific users. Also any kind of locational directions to 
          event locations found on the app will be an out of scope feature that we will not implement. 
          The app will merely be able to indicate the location of an event.
          </p>
          </div>

          <p><strong>TECHNOLOGY STACK</strong></p>
          <div class="indent1">
          <p>
          Our application utilizes React and additional APIs as well as Google Maps 
          for mapping purposes. React is useful because it is not restricted to one OS and 
          because it can be easily repurposed across web and mobile applications. A centralized 
          GitHub repository holds our shared code. You can access our repository 
          <a href="https://github.com/jrbronkar/TaskMaster"> here</a>. 
          We're currently using SQL for our database.
          </p>
          </div>
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

export default About;