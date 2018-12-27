import React from 'react';
import {
  Grid,
  Paper,
  Typography
} from '@material-ui/core'
 import PatientListEntry from './PatientListEntry'
class PatientList extends React.Component {


  render() {
    return (
      <Paper container>
        <PatientListEntry />
        <PatientListEntry />
        <PatientListEntry />
        <PatientListEntry />
        <PatientListEntry />
        <PatientListEntry />
      </Paper>
    )
  }
}

export default PatientList;