import React from 'react';
import {
  Grid,
  CardContent,
  Typography,
  Card,
  Button
} from '@material-ui/core';
import patientImg from '../style/patient-icon.png'
import {withRouter,Link} from 'react-router-dom'
//https://github.com/NdYAG/react-rater
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class DoctorListEntry extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      patient : props.patient,

    }
  }
  // function to deal with onClick on patient card to move to patient profile
  hanldOnClickPatient () {
    console.log(this.props.patient.id_Doctor);
   // this.props.history.push('/dashboard/'+ this.props.patient.id_Doctor +'/PatientProfile/' + this.props.patient.id);
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
              <Grid item xs={12} sm={12} md={8}>
                <Typography variant="h5">
                   <Link to="/">{ "Dr. Mohammad Rawashdah"}</Link>
                </Typography>
                <Typography variant="body2">Speticialist</Typography>
                <Typography variant="body2">phoneNumber</Typography>
                <Typography variant="body2">Email: mmm@gmail.co</Typography>
                <Typography variant="body2">Age : 52</Typography>
                <Typography variant="body1"> Rate :</Typography>
                <Rater
                  total={5} 
                  rating={2} 
                  interactive={false}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <Button variant="outlined" color="secondary" style={{marginTop:20 , paddingRight:40, width:100}}>Send</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}


export default withRouter(DoctorListEntry);