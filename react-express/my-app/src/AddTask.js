import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

let newDate = new Date();
let date = newDate.getDate();
let date2 = newDate.getDate() + 1;
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let hours = newDate.getHours();
let min = newDate.getMinutes();
let seconds = newDate.getSeconds();

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
    },
    container: {
		display: 'flex',
		flexWrap: 'wrap',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function AddTask() {
if (month < 10) {
    month = "0" + month;
} else if (date < 10) {
    date = "0" + date;
} else if (date2 < 10) {
    date2 = "0" + date2;
}
let dateFormat = year + "-" + month + "-" + date;
let dateFormat2 = year + "-" + month + "-" + date2;
let timeFormat = hours + ":" + min + ":" + seconds;
return(
    <Container component="main" maxWidth="xs">
<Accordion>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Add Task
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <form id="name-form" action="http://localhost:8000/addTask" method="POST" className={useStyles.form} noValidate>
      <TextField
              variant="outlined"
              margin="dense"
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
              margin="dense"
              required
              fullWidth
              name="Description"
              label="Description"
              id="Description"
              autoComplete="Description"
              autoFocus
        />
        <TextField
              variant="outlined"
              margin="dense"
              fullWidth
              name="Password"
              label="Password"
              id="Password"
              autoComplete="Password Protection"
              autoFocus
        />
        <br></br>
        <br></br>
        <TextField
                name="startdate"
		id="startdate"
		label="Start Date"
		type="date"
                defaultValue={dateFormat}
		className={useStyles.textField}
		InputLabelProps={{
			shrink: true,
		    }}
        />
	<TextField
                name="enddate"
                id="enddate"
                label="End Date"
                type="date"
                defaultValue={dateFormat2}
                className={useStyles.textField}
                InputLabelProps={{
                        shrink: true,
                    }}
        />
	<br></br>
        <br></br>
        <TextField
                name="starttime"
		id="starttime"
		label="Start Time"
		type="time"
                defaultValue={timeFormat}
		className={useStyles.textField}
		InputLabelProps={{
			shrink: true,
		    }}
        />
	<TextField
                name="endtime"
                id="endtime"
                label="End Time"
                type="time"
                defaultValue={timeFormat}
                className={useStyles.textField}
                InputLabelProps={{
                        shrink: true,
                    }}
        />
        <br></br>
        <Button
              type="submit"
              fullWidth
              variant="contained"

              color="primary"
              className={useStyles.submit}
            >
              Create Task
        </Button>
        </form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
  </Container>
);
}

export default AddTask