import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import './patient.css';
import $ from 'jquery';
import { compose } from 'redux'
import { createPatient } from '../../store/action/patientAction'
import {connect} from 'react-redux'
import {patientAction} from '../../store/action/patientAction'
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 50,
  },
  textField: {
    width: 300

  },
  textField2: {
    width: 700


  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  root: {
    flexGrow: 1,
  },
  button: {
    width: 200
  },
  group: {
    checked: true
  }
});

class CreatePatient extends React.Component {
  state = {
    firstName: '',
    MiddleName: '',
    lastName: '',
    age: '',
    Phone: '',
    insurance: '',
    email: '',
    location: '',
    buttonColor:'secondary',
    progress:false,
    gender: 'Male',
    maritalStatus: false,

  }


  //Note:handle save button


  //Note: handle submit information
  handleSubmit = (e) => {
    e.preventDefault();
    const patient = this.state;
    patient.id_Doctor = this.props.user.id;
    patient.id_Roles = this.props.user.id_Roles
    this.props.createPatient(this.state)
  }

  //Note: handle on change information
  handleChange = (e) => {
    // this.props.patientAction({data:'walid'})
    console.log(e.target.value)
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  //Note: handle on change option 
  handleOptionChange = (e) => {
    console.log(e.target.value)
    this.setState({
      gender: e.target.value
    });
  }


  render() {
    const { classes } = this.props;
    console.log(this.props)

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid container md={12} item>
                <Grid md={1} item></Grid>
                <Grid md={3} item>
                  <TextField
                    required
                    id="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    label="First-Name"
                    type="text"
                    margin="normal"
                    className={classes.textField}

                  />
                </Grid>
                <Grid md={3} item>
                  <TextField
                    required
                    id="MiddleName"
                    value={this.state.MiddleName}
                    onChange={this.handleChange}
                    label="Middle-Name"
                    type="text"
                    margin="normal"
                    className={classes.textField}
                  />
                </Grid>
                <Grid md={3} item>
                  <TextField
                    required
                    value={this.state.lastName}
                    id="lastName"
                    onChange={this.handleChange}
                    label="Last-Name"
                    type="text"
                    margin="normal"
                    className={classes.textField}


                  />
                </Grid>
              </Grid>


              <Grid container md={12} item>
                <Grid md={1} item></Grid>
                <Grid md={3} item>
                  <TextField
                    required
                    value={this.state.age}
                    id="age"
                    onChange={this.handleChange}
                    label="Age"
                    className={classes.textField}
                    type="number"
                    margin="normal"
                  />
                </Grid>
                <Grid md={3} item>
                  <TextField
                    onChange={this.handleChange}
                    value={this.state.Phone}
                    id="Phone"
                    label="Phone"
                    className={classes.textField}
                    type="tel"
                    margin="normal"
                  />
                </Grid>
                <Grid md={3} item>
                  <TextField
                    onChange={this.handleChange}
                    value={this.state.insurance}
                    id="insurance"
                    label="insurance-Number"
                    className={classes.textField}
                    type="number"
                    margin="normal"
                  />
                </Grid>
              </Grid>

              <Grid container md={12} item>
                <Grid md={1} item></Grid>
                <Grid xs={6} item>
                  <TextField
                    onChange={this.handleChange}
                    value={this.state.email}
                    id="email"
                    label="Email"
                    type="email"
                    margin="normal"
                    className={classes.textField2}
                  />
                </Grid>
              </Grid>

              <Grid container md={12} item>
                <Grid md={1} item></Grid>
                <Grid xs={6} item>
                  <TextField
                    onChange={this.handleChange}
                    value={this.state.location}
                    id="location"
                    label="Location"
                    type="text"
                    margin="normal"
                    className={classes.textField2}
                  />
                </Grid>
              </Grid>

              <Grid container md={12} style={{ marginTop: '10px' }} item>
                <Grid md={1} item></Grid>
                <Grid md={1} item>
                  <p>Gender</p>
                </Grid>
                <Grid md={3} item>
                  <RadioGroup

                    aria-label="Gender"
                    name="gender1"
                    className={classes.group}
                    value={this.state.gender}
                    onChange={this.handleOptionChange}
                    style={{ display: 'flex', flexDirection: 'row' }}
                  >
                    <FormControlLabel value="Male" control={<Radio checked={this.state.gender === 'Male'} />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                  </RadioGroup>
                </Grid>
                <Grid md={3} item>


                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.maritalStatus}
                        onChange={() => { this.setState({ maritalStatus: !this.state.checked }) }}
                        value="checkedA"
                      />
                    }
                    label="Married"
                  />
                </Grid>
              </Grid>


              <Grid container md={12} style={{ marginTop: '25px' }} item>

                <Grid md={1} item></Grid>
                <Grid md={6} item>
                 {!this.state.progress && <Button type="submit" variant="contained" color={this.state.buttonColor} size="large" className={classes.button} >
                    <SaveIcon  />
                    Save
                 </Button>}

                 {this.state.progress  && <CircularProgress className={classes.progress} />}

                </Grid>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>


    );
  }
}

CreatePatient.propTypes = {
  classes: PropTypes.object.isRequired,
};



//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    patient: state.patient.patient,
    user : state.auth.user
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    createPatient: (data) => dispatch(createPatient(data))
  }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(CreatePatient);