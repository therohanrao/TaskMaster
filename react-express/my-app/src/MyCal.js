import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from "react-router-dom";

class MyCal extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
  onClickDay = date => findTask( date);
  render() {
    return (
      <p>
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
      <center><p>
      <Grid container>
              <Grid item xs>
                  <RouterLink to="./AddTask">
                    AddTask
                  </RouterLink>
              </Grid>
              <Grid item >
                  <RouterLink to="/findTask">
                    FindTask
                  </RouterLink>                                                                                                                
              </Grid>                                                                                                                          
            </Grid>
      </p></center>
      </p>
   );
  }
}
function findTask(date){


}
export default MyCal;