import React, { Component, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import 'bootstrap/dist/css/bootstrap.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import AddTask from './AddTask'
import SearchTask from './SearchTask'
import ContributeTask from './ContributeTask'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Copyright from './Copyright'
import { Redirect } from "react-router-dom";
import { UncontrolledAlert as Alert} from 'reactstrap';


function alter(date){
    var s = (date.getYear() + 1900) + "-" +
	("0" + (date.getMonth() + 1)).slice(-2) + "-" +
	("0" + date.getDate()).slice(-2);
    return s;
}
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/MyCal">TaskMaster</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/jrbronkar/TaskMaster">GitHub</NavLink>
            </NavItem>
            
            {/*<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem>
		  Option 3
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <Nav>
            <NavItem>
              <NavLink href="/">Log Out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

class MyCal extends Component {
  state = {
      date : new Date(),
      stringdate: alter(new Date()),
      todaydate: alter(new Date())
  }
      onChange = date => this.setState({ date : date,
					 stringdate : alter(date) })
      
     

  render() {
    return (
      <p>
      <center>
      <h6>Today's date is: {this.state.todaydate}</h6>
      <h6>Selected date is: {this.state.stringdate}</h6>
      <Alert color="danger">
           The task to be deleted was not identified.
      </Alert>
      </center>
      <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: '70vh'
        }}
      >
     
      <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
      <center>
      <form method="POST" action="http://localhost:8000/getDate"> 
           <input type="hidden" id="date" value={this.state.stringdate} name="date"></input> 
           <input type ="submit" value={"Get Tasks on " + this.state.stringdate}></input> 
      </form>
      </center>
      </p>
    );
  }
}
function findTask(date){
}
function NavCal() {
  return(
    <div>
      <Example/>
      <Typography align='left'>
        <AddTask/>
        <SearchTask/>
        <ContributeTask/>
      </Typography>
      <MyCal/>
      <p>
      <center>
      <form method="GET" action="http://localhost:8000/archiveTask">
        <input type="submit" value="View Archived Tasks"></input>
      </form>
      </center>
      </p>
      <Copyright/>
    </div>

  );
}

export default NavCal