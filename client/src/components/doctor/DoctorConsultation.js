import React from 'react';
import {
  Grid, Typography
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DoctorsSearch from './DoctorsSearch.js';
import DoctorList from './DoctorsList';
import {getDoctors} from '../../store/action/doctorActions';


class DoctorConsultation extends React.Component {
  constructor(props) {
    super(props)

    this.props.getDoctors()
  }
  render() {
    // if the user has not login redirect for home page
    // if (!this.props.login) {
    //   return (
    //     <Redirect to='/' />
    //   )
    // }
    return (
      <div>
        <Typography variant="h5" color="primary">Number of Doctors :</Typography>
        <Grid item sm={12} xs={12}>
          <DoctorsSearch />
          <DoctorList doctors= {this.props.doctors} />
        </Grid>
      </div>
    )
  }
}

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    doctors: state.doctor.doctors
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    getDoctors : () => dispatch(getDoctors())
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(DoctorConsultation);