import React from 'react';
import {
  Grid
} from '@material-ui/core'
import Search from './Search.js'
import PatientList from './PatientList'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux';
import { getPatients } from '../../store/action/patientAction';

class Patients extends React.Component {
  constructor(props) {
    super(props)
    // call the function in redux to get patients
    this.props.getPatients(this.props.user.id)
  }

  render() {
    return (
      <div>
        <Grid item sm={12} xs={12} >
          <Search />
          <PatientList patients={this.props.patients} />
        </Grid>
      </div>
    )
  }
}

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    patients: state.patient.patients,
    user: state.auth.user
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    getPatients: (doctorId) => dispatch(getPatients(doctorId))
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Patients);