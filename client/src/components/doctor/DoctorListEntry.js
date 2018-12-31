import React from 'react';
import {
  Grid,
  CardContent,
  Typography,
  Card,
  Button
} from '@material-ui/core';
import patientImg from '../style/patient-icon.png';
import { withRouter, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {openSendConsult} from '../../store/action/doctorActions';

//https://github.com/NdYAG/react-rater
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class DoctorListEntry extends React.Component {

  // function to deal with onClick on patient card to move to patient profile
  hanldOnClickPatient() {
    console.log(this.props.patient.id_Doctor);
    // this.props.history.push('/dashboard/'+ this.props.patient.id_Doctor +'/PatientProfile/' + this.props.patient.id);
  }

  // open model to send consultation
  handlOnClickSend(){
    console.log(this.props)
    this.props.openSendConsult(!this.props.isOpen, this.props.doctor)
  }

  render() {
    return (
      <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: "center", margin: 10 }}>
        
        <Card style={{ width: "600px" }}>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={12} md={2}>
                <img src={patientImg} alt="Not found" width="120px" height="100px" />
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                <Typography variant="h5">
                  <Link to="/">{"Dr." + this.props.doctor.firstName + ' ' + this.props.doctor.lastName}</Link>
                </Typography>
                <Typography variant="body1">{"Speicialist: " + this.props.doctor.specialist}</Typography>
                <Typography variant="body1">{"Phone number: " + this.props.doctor.phoneNumber}</Typography>
                <Typography variant="body1">{"Email: " + this.props.doctor.email}</Typography>
                {this.props.doctor.birthDate && <Typography variant="body1"> {"Birth date: " + this.props.doctor.birthDate }</Typography>}
                <Typography variant="h6">
                   Rate:  
                  <Rater
                    total={5}
                    rating={this.props.doctor.rateAvg}
                    interactive={false}
                  />
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <Button 
                  variant="outlined" color="secondary" 
                  style={{ marginTop: 20, paddingRight: 40, width: 80 }}
                  onClick = {this.handlOnClickSend.bind(this)}
                >
                 Send
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    isOpen: state.doctor.isSendConsultModelOpen
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    openSendConsult: (isOpen, targetDoctor) => dispatch(openSendConsult(isOpen, targetDoctor))
  }
}
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(DoctorListEntry);