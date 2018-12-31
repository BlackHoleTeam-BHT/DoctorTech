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
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
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
    return (
      <Grid container>
        <Grid item sm={12} xs={12} md={8}>
          <Typography variant="h5" color="primary">Number of Doctors :</Typography>
          <SendConsultation />
          <DoctorsSearch />
          <DoctorList doctors={this.props.doctors} />
        </Grid>
        <Grid item sm={12} xs={12} md={4}>
          <Card>
            <Paper square style={{flexGrow:1,width:"100%"}}>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                fullWidth
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab icon={<FavoriteIcon />} label="Inbox" />
                <Tab icon={<PersonPinIcon />} label="Outbox" />
              </Tabs>
            </Paper>
            <ConsultationList />
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
    doctors: state.doctor.doctors
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