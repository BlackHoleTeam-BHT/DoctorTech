import React from 'react';
import {
  Grid
} from '@material-ui/core'
import Search from './Search.js'
import PatientList from './PatientList'

class Patients extends React.Component {
  render() {
    return (
      <div>
        <Grid item sm={12} xs={12} md={12}>
          <Search />
          <PatientList />
        </Grid>
      </div>
    )
  }
}

export default Patients;