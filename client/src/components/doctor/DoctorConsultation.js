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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import { Redirect } from 'react-router-dom';
import DoctorsSearch from './DoctorsSearch.js';
import DoctorList from './DoctorsList';
import { getDoctors, getConsultationInbox, getConsultationOutbox } from '../../store/action/doctorActions';
import SendConsultation from './SendConsultation.js';
import ConsultationList from './ConsultationList.js';

class DoctorConsultation extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      value: 0
    }
    this.props.getDoctors()
    this.props.getConsultationInbox(this.props.user.id)
    this.props.getConsultationOutbox(this.props.user.id);
    

  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    // if the user has not login redirect for home page
    // if (!this.props.login) {
    //   return (
    //     <Redirect to='/' />
    //   )
    // }

    // change the consultations message to inbox or outbox depend on the tab index
    let consults = [];
    if(this.state.value === 0){
      consults = this.props.consultsInbox;
    } else {
      consults = this.props.consultsOutbox;
    }
    return (
      <Grid container>
        <Grid item sm={12} xs={12} md={8}>
          <Typography variant="h5" color="primary">Number of Doctors :</Typography>
          <SendConsultation />
          <DoctorsSearch />
          <DoctorList doctors={this.props.doctors} />
        </Grid>
        <Grid item sm={12} xs={12} md={4}>
          <Card style={{maxHeight: 850, height:"100%"}} >
            <Paper square style={{flexGrow:1,width:"100%"}}>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                fullWidth
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab icon={<InboxIcon />} />
                <Tab icon={<SendIcon />} />
              </Tabs>
            </Paper>
            <ConsultationList consults = {consults}/>
          </Card>
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
    consultsInbox: state.doctor.consultsInbox
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    getDoctors: () => dispatch(getDoctors()),
    getConsultationOutbox:(doctorId) => dispatch(getConsultationOutbox(doctorId)),
    getConsultationInbox: (doctorId) => dispatch(getConsultationInbox(doctorId))
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(DoctorConsultation);