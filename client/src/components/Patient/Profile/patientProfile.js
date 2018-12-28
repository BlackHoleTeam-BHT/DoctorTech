import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PatientCard from './patientComponent/patientCard'
import PatientCalculation from './patientComponent/patientCalculation'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ChiefComplaint from './patientComponent/chiefComplent'
import MedicalHistory from './patientComponent/MedicalHistory'
import PhysicalExamination from './patientComponent/PhysicalExamination'
import MedicalAnalysis from './patientComponent/medicalAnalysis'
import MedicalPrescription from './patientComponent/medicalPrescription'
import PatientPlan from './patientComponent/PatientPlan'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { compose } from 'redux';
import { GetPatientCassis, GetUserInformation} from '../../../store/action/patientAction';
import {Redirect} from 'react-router-dom';
=======
import {connect} from 'react-redux'
import { compose } from 'redux'
import {GetPatientCassis} from '../../../store/action/patientAction'
import moment from 'moment'

>>>>>>> add the duration time to the patient page

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}



const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    paddingLeft: 0,
    paddingRight: 0,
  },
  tab: {

  }, formControl: {
    margin: theme.spacing.unit,
    minWidth: 150,
  },
  select: {
    color: 'red'
  },
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
})


class PatientProfile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 0,
<<<<<<< HEAD
      selectValue: ''
=======
      selectValue:'',
      selectDate:false
>>>>>>> add the duration time to the patient page
    };

    // get all the info about the patient
    this.props.GetPationInformation(this.props.match.params.id)
    // get all the cases to the patient
    this.props.GetPatientCassis(this.props.match.params.id);
    
  }

  handleChange = (event, value) => {
    console.log(event.target, value)
    this.setState({ value });
  };

<<<<<<< HEAD
  handleChangeSelect = (event) => {
    console.log('event', event.target.value)
    this.setState({ [event.target.name]: event.target.value });
=======
  handleChangeSelect=(event,value)=>{
    console.log('event',value)
    console.log('event',this.props.patient.currentCase)
    this.setState({ [event.target.name]: event.target.value,selectDate:value.props.id });

>>>>>>> add the duration time to the patient page

  }

  componentDidMount() {
    console.log('paramId', this.props.match.params.id)
    console.log('x1', this.props)
  }


  render() {
<<<<<<< HEAD
    console.log('xxx', this.props)
=======
    console.log('xxx',this.props.patient.currentCase)
>>>>>>> add the duration time to the patient page
    const { classes } = this.props;

    const { value } = this.state;
     // if the user has not login redirect for home page
     if(!this.props.login) {
      return (
        <Redirect to = '/' />
      )
    }
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid container md={12} item>
          <Grid md={1} item></Grid>
<<<<<<< HEAD
          <Grid md={5} item >
            <PatientCard id={this.props.match.params.id} patient= {this.props.patientProfile}></PatientCard>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Select Case</InputLabel>
              <Select


                value={this.state.selectValue}
                onChange={this.handleChangeSelect}
                inputProps={{
                  name: 'selectValue',
                  id: 'age-simple',
                }}
              >
                {this.props.patient.currentCase.map((value, key) => {
                  return (
                    <MenuItem key={key} value={value.patientId}>{value.title}</MenuItem>
                  )
                })}

              </Select>
            </FormControl>

          </Grid>
          <Grid md={6} item right ="true" className="text-center">
=======
          <Grid md={4} item >
            <PatientCard id={this.props.match.params.id}></PatientCard>
            
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Select Case</InputLabel>
            <Select
            
            
            value={this.state.selectValue}
            onChange={this.handleChangeSelect}
            inputProps={{
              name: 'selectValue',
              id: 'age-simple',
            }}
          >
              {this.props.patient.currentCase.map((value,key)=>{
                return (
                  <MenuItem key={key} id={value.createdAt} value={value.patientId}>{value.title}</MenuItem>
                )
              })}
       
          </Select>
          </FormControl>
          
          </Grid>
          <Grid md={2} style={{justifyContent: 'center',margin: 'auto'}} item >{this.state.selectDate && moment(this.state.selectDate).fromNow()}</Grid>
          <Grid md={5} item right>
>>>>>>> add the duration time to the patient page
            <PatientCalculation ></PatientCalculation>
          </Grid>
          <Grid container md={12} item>
            <Grid md={1} item></Grid>
            <Grid md={10} sm={11} xs={11} item>
            <NoSsr>
              <div className={classes.root}>
                <AppBar position="static" style ={{background:"#2caee2"}}>
                  <Tabs fullWidth className={classes.tab} value={value} onChange={this.handleChange}>
                    <LinkTab label="Page One" href="page1" />
                    <LinkTab label="Page Two" href="page2" />
                    <LinkTab label="Page Three" href="page3" />
                    <LinkTab label="Page four" href="page4" />
                    <LinkTab label="Page four" href="page5" />
                    <LinkTab label="Page four" href="page6" />
                  </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>
                  <ChiefComplaint></ChiefComplaint>
                </TabContainer>}

                {value === 1 && <TabContainer>
                  <MedicalHistory></MedicalHistory>
                </TabContainer>}

                {value === 2 && <TabContainer>
                  <PhysicalExamination></PhysicalExamination>
                </TabContainer>}

                {value === 3 && <TabContainer>
                  <MedicalAnalysis></MedicalAnalysis>
                </TabContainer>}

                {value === 4 && <TabContainer>
                  <MedicalPrescription></MedicalPrescription>
                </TabContainer>}

                {value === 5 && <TabContainer>
                  <PatientPlan></PatientPlan>
                </TabContainer>}
              </div>
            </NoSsr>
            </Grid>
            <Grid md={1} item></Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

}

PatientProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};


//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    patient: state.patient,
    patientProfile: state.patient.PatientProfile,
    login: state.auth.login

  }
}

// Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    GetPatientCassis: (id) => dispatch(GetPatientCassis(id)),
    GetPationInformation: (id) => dispatch(GetUserInformation(id))

  }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(PatientProfile);



<<<<<<< HEAD
=======
//this.props.match.params.id
//BMI :Calculation: [weight (kg) / height (cm) / height (cm)] x 10,000
>>>>>>> add the duration time to the patient page
