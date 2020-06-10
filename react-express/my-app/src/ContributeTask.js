import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


function ContributeTask() {
return(
<Container component="main" maxWidth="xs">
<Accordion>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Contribute Task
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <form id="name-form" action="http://localhost:8000/contributeTask" method="POST" className={useStyles.form} noValidate>
        <TextField
              variant="outlined"
              margin="dense"
              fullWidth
              name="taskID"
              label="Task ID"
              id="taskID"
              autoComplete="taskID"
              autoFocus
        />
        <TextField
              variant="outlined"
              margin="dense"
              fullWidth
              name="password"
              label="Optional Password"
              id="password"
              autoComplete="password"
              autoFocus
        />
        <br></br>
        <br></br>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
            >
              Contribute Task
        </Button>
        </form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</Container>
);
}

export default ContributeTask