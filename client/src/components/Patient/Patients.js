import React from 'react';
import {
  Grid, Typography
} from '@material-ui/core'
import Search from './Search.js'
import PatientList from './PatientList'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux';
import { getPatients } from '../../store/action/patientAction';
import {Redirect} from 'react-router-dom';

class Patients extends React.Component {
  constructor(props) {
    super(props)
    // call the function in redux to get patients
    this.props.getPatients(this.props.user.id)
  }



  render() {
    let patients = []
    if (this.props.isSearchNow) {
      patients = this.props.patientSearchResults;
    } else {
      patients = this.props.patients;
    }

    // if the user has not login redirect for home page
    if (!this.props.login) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <div>
        <Grid item sm={12} xs={12} >
          <Typography variant="h6" color="secondary">
            {"Number of patiens: " + patients.length}
          </Typography>
          <Search />
          <PatientList patients={patients} />
        </Grid>
      </div>
    )
  }
}

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    patients: state.patient.patients,
    patientSearchResults: state.patient.patientSearchResults,
    isSearchNow: state.patient.isSearchNow,
    user: state.auth.user,
    login: state.auth.login
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    getPatients: (doctorId) => dispatch(getPatients(doctorId))
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Patients);