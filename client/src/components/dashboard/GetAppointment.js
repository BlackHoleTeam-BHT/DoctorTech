import React from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import { deleteAppointment } from '../../store/action/doctorActions';
class GetAppoitment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: props.appointment,
    }

    // this.filter = () => {
    //   var y = new Date()
    //   var newAppointment = []
    //   console.log("dddddd",y.toISOString().slice(0,10))
    //   console.log("Appointment",this.props.appointment)
    //   for (var key in this.props.appointment){
    //     if (this.props.appointment.date.slice(0,10)===y.toISOString().slice(0,10)){
    //       newAppointment.push(this.props.appointment)
    //     }
    // }
    // return newAppointment
    // }
  }

  // This function to delete the appointement
  deleteAppointment() {
    this.props.deleteAppointment(this.props.user.id, this.props.appointment.id);
  }

  render() {
   
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={this.props.appointment.firstName}
          secondary={
            this.props.appointment.date.slice(0, 10)
          }
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Edit">
            <Icon>edit_icon</Icon>
          </IconButton>
          <IconButton
            aria-label="Delete"
            onClick={this.deleteAppointment.bind(this)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}
//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    appointments: state.doctor.appointments,
    user: state.auth.user,
  }
}

// Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    deleteAppointment: (doctorId, appointmentId) => dispatch(deleteAppointment(doctorId, appointmentId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GetAppoitment);