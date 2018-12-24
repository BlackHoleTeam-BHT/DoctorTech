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
import $ from 'jquery';
import './patient.css';
import { compose } from 'redux'
import {connect} from 'react-redux'
import {patientAction} from '../../store/action/patientAction'

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
  group:{
    checked:true
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
    selectedOption: 'Male',
    checked: false

  }



  //Note: handle submit information
  handleSubmit = (e) => {
    e.preventDefault()
    const obj = Object.assign({}, this.state)
    const that = this

   

    $.ajax({
      type: "POST",
      url: '/doc/test',
      data: {
        obj
      },
      success: function (data) {
        console.log("user data ", data)
        that.setState({
          firstName: '',
          MiddleName: '',
          lastName: '',
          age: '',
          Phone: '',
          insurance: '',
          email: '',
          location: '',
          selectedOption: 'Male',
          checked: false

        })

      },
      error: (err) => {
        console.log('err', err);
      }

    });
  }

  //Note: handle on change information
  handleChange2 = (e) => {
    // this.props.patientAction({data:'walid'})
    console.log(e.target)
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  //Note: handle on change option 
  handleOptionChange = (e) => {
    console.log(e.target.value)
    this.setState({
      selectedOption: e.target.value
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
                    onChange={this.handleChange2}
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
                    onChange={this.handleChange2}
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
                    onChange={this.handleChange2}
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
                    onChange={this.handleChange2}
                    label="Age"
                    className={classes.textField}
                    type="number"
                    margin="normal"
                  />
                </Grid>
                <Grid md={3} item>
                  <TextField
                    onChange={this.handleChange2}
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
                    onChange={this.handleChange2}
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
                    onChange={this.handleChange2}
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
                    onChange={this.handleChange2}
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
                    value={this.state.selectedOption}
                    onChange={this.handleOptionChange}
                    style={{ display: 'flex', flexDirection: 'row' }}
                  >
                    <FormControlLabel   value="Male" control={<Radio   checked={this.state.selectedOption=='Male'} />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio   />} label="Female" />
                  </RadioGroup>
                </Grid>
                <Grid md={3} item>


                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checked}
                        onChange={()=>{this.setState({checked:!this.state.checked}) }}
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
                  <Button type="submit" variant="contained" color="secondary" size="large" className={classes.button} >
                    <SaveIcon  />
                    Save
                 </Button>

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
const mapStateToProps=(state)=>{
  return {
      name:state.patient.test
  }
}

//Note: add the action to the props
const mapDispatchToProps=(dispatch)=>{
  return{
    patientAction:(data)=>dispatch(patientAction(data))
  }
}

export default compose( withStyles(styles),connect(mapStateToProps,mapDispatchToProps))(CreatePatient);