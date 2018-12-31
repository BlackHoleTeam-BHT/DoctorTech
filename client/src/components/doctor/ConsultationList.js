import React from 'react';
import {
  Grid, Typography, Card, List
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux';
import { getDoctors } from '../../store/action/doctorActions';
import ConsultationListEntry from './ConsultationListEntry';


class ConsultationList extends React.Component {
 
  render() {
    
    return (
      <List style={{width:"100%", maxWidth:"400",   position: 'relative',overflow: 'auto', maxHeight: 800}}>
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />
        <ConsultationListEntry />

      </List>
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
    getDoctors: () => dispatch(getDoctors())
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ConsultationList);