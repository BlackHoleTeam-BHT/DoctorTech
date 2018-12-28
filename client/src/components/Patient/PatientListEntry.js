import React from 'react';
import {
  Grid,
  CardContent,
  Typography,
  Card,
} from '@material-ui/core'
import moment from 'moment'
import patientImg from '../style/patient-icon.png'
import {withRouter} from 'react-router-dom'

class PatientListEntry extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      patient : props.patient,

    }
  }
  // function to deal with onClick on patient card to move to patient profile
  hanldOnClickPatient () {
    console.log(this.props.patient.id_Doctor);
    this.props.history.push('/dashboard/'+ this.props.patient.id_Doctor +'/PatientProfile/' + this.props.patient.id);
  }

  render() { 
    
    return (
      <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: "center", margin: 10 }}>
        <Card style={{ width: 1000 }} onClick ={this.hanldOnClickPatient.bind(this)}>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={12} md={2}>
                <img src={patientImg} alt="Not found" width="120px" height="100px" />
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <Typography variant="h5">{"ID: " + this.props.patient.id}</Typography>
                <Typography variant="body2">{
                  "Full Name: " + this.props.patient.firstName
                  + ' ' + this.props.patient.middleName + ' ' + this.props.patient.lastName
                }</Typography>
                <Typography variant="body2">{"Phone number: " + this.props.patient.phoneNumber}</Typography>
                <Typography variant="body2">{"Email: " + this.props.patient.email}</Typography>
                <Typography variant="body2">{"age: " + this.props.patient.age}</Typography>
                <Typography variant="body2">{"Gender: " + this.props.patient.gender}</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <Typography variant="body1">{moment(this.props.patient.createdAt).fromNow()}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}



export default withRouter(PatientListEntry);