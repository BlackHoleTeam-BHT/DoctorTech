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
  };

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
          <DialogTitle id="form-dialog-title">New Pointment</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter new pointment time and date .
            </DialogContentText>
           
            <Grid container md={12} item ustify="space-around"  >
            
            <TextField
        id="datetime-local"
        label="Add Appointment"
        type="datetime-local"
        defaultValue="2019-03-01T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </Grid>
    
      <Grid md={12} item>
   <TextField
          id="outlined-multiline-static"
          label="Add DEscription"
          multiline
          rows="8"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          
        />
        </Grid>
        
        
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" variant="contained">
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



export default compose(withStyles(styles), connect())(Appointment);