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
import { AddnewCase } from '../../../../store/action/patientAction';

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

class newCase extends React.Component {
  state = {
    open: false,
    title: "",
    description: "",
  };

  // take value from inputs
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
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
      title: this.state.title,
      description: this.state.description,
      id_Patients: this.props.patientProfile[0].id,

    }

    this.props.AddnewCase(obj)
  }

  render() {
    const { classes } = this.props;
    console.log("mmmmmmmmmmmmmm", this.props)
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
           Add New Case
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Case</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter new Case  .
            </DialogContentText>

            <Grid container md={12} item ustify="space-around"  >

            <TextField
          id="standard-name"
          label="title"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('title')}
          margin="normal"
        />
  
            </Grid>

            <Grid md={12} item>
              <TextField
                id="outlined-multiline-static"
                label="Add description"
                multiline
                rows="8"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={this.state.notes}
                onChange={this.handleChange('description')}
              />
            </Grid>
          </DialogContent>
          <DialogActions>
             <Button onClick={(event)=>{this.handelSubmit();this.handleClose()}} color="primary" variant="contained"> 
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
//this is for style (material.ui)
newCase.propTypes = {
  classes: PropTypes.object.isRequired,
};

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    patientProfile: state.patient.PatientProfile
  }
}

// Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    AddnewCase: (data) => dispatch(AddAppointment(data)),

  }
}


export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(newCase);
