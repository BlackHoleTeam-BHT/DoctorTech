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
import { withRouter } from 'react-router-dom'

class GetAppoitment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      appointment: props.appointment,
    }

    this.filter = () => {
      var y = new Date
      var newAppointment = []
      console.log("dddddd",y.toISOString().slice(0,10))
      console.log("Appointment",this.props.appointment)
      for (var key in this.props.appointment){
        if (this.props.appointment.date.slice(0,10)===y.toISOString().slice(0,10)){
          newAppointment.push(this.props.appointment)
        }
    }
    return newAppointment
    }
  }


  render() {
    var x = new Date
   
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          primary={ this.props.appointment.firstName}
          secondary={
            this.props.appointment.date.slice(0, 10)
          }
        />
        <ListItemSecondaryAction>

          <IconButton aria-label="Edit">
            <Icon>edit_icon</Icon>
          </IconButton>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>

        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

export default withRouter(GetAppoitment);