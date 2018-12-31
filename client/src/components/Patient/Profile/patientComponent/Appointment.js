import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { compose } from 'redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    width: '100%',
  },

  heading: {
    fontSize: '20px',
    flexBasis: '33.33%',
    flexShrink: 0,
    justifyContent: 'center'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    margin: 'auto'
  },
  bItem: {
    marginLeft: 10,
    marginTop: 0,
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },

});

class Appointment extends React.Component {
  state = {
    open: false,
    date: "",
    notes: "",
  };

  // take value from inputs
  handleChange2 = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handelSubmit = () => {
    var obj = {
      date: this.state.date,
      notes: this.state.notes,
      id_Patients: this.props.patient.id,
      id_Doctors: this.props.doctors.id
    }
    this.props.AddChiefComplaint(obj)
  }

  render() {
    const { classes } = this.props;
    console.log("mmmmmmmmmmmmmm", this.props)
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Appointment</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter new Appointment time and date .
            </DialogContentText>

            <Grid container md={12} item ustify="space-around"  >

              <TextField

                id="datetime-local"
                label="Add Appointment"
                type="datetime-local"
                value={this.state.date}
                defaultValue="2019-03-01T10:30"
                onChange={this.handleChange2('date')}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid md={12} item>
              <TextField
                id="outlined-multiline-static"
                label="Add Notes"
                multiline
                rows="8"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={this.state.notes}
                onChange={this.handleChange2('notes')}
              />
            </Grid>


          </DialogContent>
          <DialogActions>
            {/* <Button onClick={(event)=>{this.handelSubmit();this.handleClose()}} color="primary" variant="contained"> */}
            <Button onClick={this.handelSubmit} color="primary" variant="contained">
              Add
            </Button>
            <Button onClick={this.handleClose} color="primary" variant="contained">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Appointment.propTypes = {
  classes: PropTypes.object.isRequired,
};

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    patient: state.patient,
    doctors: state.users
  }
}

// Note: add the action to the props
// const mapDispatchToProps = (dispatch) => {
//   return {
//     AddAppointment: (data) => dispatch(AddAppointment(data)),

//   }
// }


// export default compose(withStyles(styles), connect(mapStateToProps,mapDispatchToProps))(Appointment);
export default compose(withStyles(styles), connect(mapStateToProps))(Appointment);