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
import Image from 'react-bootstrap/Image'


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
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <Nav>
            <NavItem>
              <NavLink href="http://localhost:3000">Log Out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

class MyCal extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
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
    );
  }
}

function NavCal() {
  return(
    <div>
      <Example/>
        <MyCal/>
    </div>

  );
}

export default NavCal