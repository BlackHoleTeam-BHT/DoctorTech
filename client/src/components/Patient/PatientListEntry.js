import React from 'react';
import {
  Grid,
  CardContent,
  Typography,
  Card,
} from '@material-ui/core'
import patientImg from '../style/patient-icon.png'
class PatientList extends React.Component {

  render() {
    return (
      <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: "center", margin:10 }}>
        <Card style={{ width: 1000 }}>
          <CardContent>
            <Grid container md={12}>
              <Grid item xs={12} sm={12} md={2}>
                 <img src= {patientImg} alt = "Not found" width= "120px" height="100px" />
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <Typography variant="body2">Full Name</Typography>
                <Typography variant="body2">Phone number</Typography>
                <Typography variant="body2">email</Typography>
                <Typography variant="body2">age</Typography>
                <Typography variant="body2">Gender</Typography>
              </Grid>
              <Grid xs={12} sm={12} md={2}>
                <Typography variant="body1">a 2 day ago</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

      </Grid>
    )
  }
}

export default PatientList;