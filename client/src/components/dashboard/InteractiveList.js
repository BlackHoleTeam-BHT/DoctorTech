import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import ListSubheader from '@material-ui/core/ListSubheader';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import GetAppointment from './GetAppointment';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getAppointment } from '../../store/action/doctorActions'
import MedicalNews from './MedicalNews';
import Appointment from '../Patient/Profile/patientComponent/Appointment'
const styles = theme => ({

  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },

});


class InteractiveList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dense: false,
      open: true,

    }

    // this.filter = () => {
    //   var y = new Date();
    //   var newAppointment = []
    //   console.log("dddddd", y.toISOString().slice(0, 10))
    //   console.log("Appointment", this.props.appointment)
    //   for (var key in this.props.appointment) {
    //     if (this.props.appointment.date.slice(0, 10) === y.toISOString().slice(0, 10)) {
    //       newAppointment.push(this.props.appointment)
    //     }
    //   }
    //   return newAppointment
    // }
    this.props.getAppointment(this.props.user.id)
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;
    const { dense } = this.state;
    var appointments = this.props.appointments;
    return (
      <div>

        <Grid container>
          <Appointment />
          <Grid item sm={12} xs={12} md={8}>
            <MedicalNews />
          </Grid>
          <Grid item sm={12} xs={12} md={4}>
            <List
              component="nav"
              subheader={<ListSubheader component="div"></ListSubheader>}
              className={classes.root}
              style={{ position: 'absolute', right: 10, }}
            >
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                  <i class="material-icons">local_laundry_service</i>
                </ListItemIcon>
                <ListItemText inset primary="Appointment" />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <Grid item xs={12} md={12}>
                      <div className={classes.demo}>
                        <List dense={dense}>

                          {appointments.length > 0 ? (
                            appointments && appointments.map((elem =>
                              <GetAppointment key={elem.id} appointment={elem} />
                            ))
                          ) : (
                              <div className="text-center">
                                <h4>No data found</h4>
                              </div>
                            )
                          }
                        </List>
                      </div>
                    </Grid>
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Grid>

        </Grid>
        {/* <div class="main-content">
          <div>
            <div class="syllabus-item embed" height="100%">
              <iframe height="600px" width="60%" allowfullscreen="true" title="Doctor Calendar" type="iframe" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=ulmhfubqcehs9o0k2bm6e1qod0%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=Asia%2FAmman" _links="[object Object]">
              </iframe>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
};

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
    getAppointment: (data) => dispatch(getAppointment(data)),

  }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(InteractiveList);
