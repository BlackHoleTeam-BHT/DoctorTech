import React from 'react';
import moment from 'moment';
import {
  Grid,
  Typography,
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
import { getDoctors, openShowConsultationDelials } from '../../store/action/doctorActions';
class ConsultationListEntry extends React.Component {

  // function to open consultion inside ShowConsultationDetials dialog
  handlonClick(){
    console.log(this.props)
    this.props.openShowConsultationDelials(!this.props.isShowConsultDetialsOpen, this.props.consults)
  }
  render() {

    return (
      <div>
        <ListItem alignItems="flex-start" button onClick={this.handlonClick.bind(this)}>
          <ListItemAvatar>
            <Avatar style={{ background: "orange" }}>
              {this.props.consults.firstName[0] + '' + this.props.consults.lastName[0]}
            </Avatar>
          </ListItemAvatar>
          <Grid container>
            <Grid item md={8} >
              <ListItemText
                primary={this.props.consults.firstName + ' ' + this.props.consults.lastName}
                secondary={
                  <div>
                    <Typography component="span" color="textPrimary">
                      {this.props.consults.subject + '   '}
                    </Typography>
                    <Typography>
                    {this.props.consults.description}
                    </Typography>
                    
                  </div>
                }
              />
            </Grid>
            <Grid item md={4}>
              <Typography component="span" color="textPrimary">
                {moment(this.props.consults.createdAtConsult).fromNow()}
              </Typography>
              {/* <Button variant="outlined" style={{ marginLeft: 25, marginTop: 10, paddingRight: 40, width: 70, height: 25 }}>Reply</Button> */}
            </Grid>
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
    doctors: state.doctor.doctors,
    isOpen: state.doctor.isShowConsultDetialsOpen,
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    getDoctors: () => dispatch(getDoctors()),
    openShowConsultationDelials:  (isOpen, targetConsult) => dispatch(openShowConsultationDelials(isOpen, targetConsult))
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ConsultationListEntry);