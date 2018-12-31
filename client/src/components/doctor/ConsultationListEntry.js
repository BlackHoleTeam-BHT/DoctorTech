import React from 'react';
import moment from 'moment';
import {
  Grid,
  Typography,
  Card,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  Divider
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux';
import { getDoctors } from '../../store/action/doctorActions';

class ConsultationListEntry extends React.Component {

  render() {

    return (
      <div>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar style={{ background: "orange" }}>
              {this.props.consults.firstName[0] + '' + this.props.consults.lastName[0]}
            </Avatar>
          </ListItemAvatar>
          <Grid item md={9} >
            <ListItemText
              primary={this.props.consults.firstName + ' ' + this.props.consults.lastName}
              secondary={
                <React.Fragment>
                  <Typography component="span" style={{ display: "inline" }} color="textPrimary">
                    {this.props.consults.subject}
                  </Typography>
                  {this.props.consults.description}
                </React.Fragment>
              }
            />
          </Grid>
          <Grid item md={3}>
            <Typography component="span" color="textPrimary">
              {moment(this.props.consults.createdAtConsult).fromNow()}
            </Typography>
            <Button variant="outlined" style={{ marginLeft: 25, marginTop: 25, paddingRight: 40, width: 70, height: 25 }}>Reply</Button>
          </Grid>
        </ListItem>
        <Divider />
       </div>
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