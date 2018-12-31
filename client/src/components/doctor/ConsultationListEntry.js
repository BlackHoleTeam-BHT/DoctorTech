import React from 'react';
import {
  Grid,
  Typography,
  Card,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux';
import { getDoctors } from '../../store/action/doctorActions';

class ConsultationListEntry extends React.Component {

  render() {

    return (
      <Card style={{ margin: 5 }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar style={{background:"orange"}}>M</Avatar>
          </ListItemAvatar>
          <Grid item md={9} >
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography component="span" style={{ display: "inline" }} color="textPrimary">
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…in your neighborhood doing errands thisin your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </Grid>
          <Grid item md={3}>
            <Typography component="span" color="textPrimary">
              2day ago
             </Typography>
             <Button variant="outlined" style={{marginLeft: 25,marginTop:40, paddingRight:40, width:70, height:25}}>Reply</Button>
          </Grid>
        </ListItem>
      </Card>
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


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ConsultationListEntry);