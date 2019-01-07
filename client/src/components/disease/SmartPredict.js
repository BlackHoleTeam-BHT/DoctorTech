import React from 'react';
import {
  Grid,
  Typography,
  Card,
  Tab,
  Tabs,
  Paper
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux';
import BreastCancer from './BreastCancer';

class SmartPredict extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }
  render() {
    // if the user has not login redirect for home page
    // if (!this.props.login) {
    //   return (
    //     <Redirect to='/' />
    //   )
    // }

    return (
      <Grid container>
      
        <Grid item md={8} xs={12} sm={12}>
          <BreastCancer />
        </Grid>
        <Grid item md={4} xs={12} sm={12}>

        </Grid>
      </Grid>
    )
  }
}

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    user: state.auth.user,
    doctors: state.doctor.doctors,
    consultsOutbox: state.doctor.consultsOutbox,
    consultsInbox: state.doctor.consultsInbox,
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {

  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(SmartPredict);