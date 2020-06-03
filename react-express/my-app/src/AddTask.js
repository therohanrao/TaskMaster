import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


function DatePickers() {
    const classes = useStyles();
    
        return (
		<form className={classes.container} noValidate>
		<TextField
		id="startdate"
		label="Start Date, Time"
		type="datetime-local"
		defaultValue="2020-06-02T10:30"
		className={classes.textField}
		InputLabelProps={{
			shrink: true,
		    }}
                />
		<TextField
                id="enddate"
                label="End Date, Time"
                type="datetime-local"
                defaultValue="2020-06-02T10:30"
                className={classes.textField}
                InputLabelProps={{
                        shrink: true,
                    }}
                />
	       </form>
            );
    }
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
        <br></br>
        <br></br>
        <DatePickers />  
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