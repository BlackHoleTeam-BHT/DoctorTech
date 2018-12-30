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
class Consultion extends React.Component {

  render() {
    // if the user has not login redirect for home page
    // if (!this.props.login) {
    //   return (
    //     <Redirect to='/' />
    //   )
    // }
    return (
      <div>
        <Grid item sm={12} xs={12}>
          <DoctorsSearch />
          <DoctorList />
        </Grid>
      </div>
    )
  }
}

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    login: state.auth.login
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Consultion);