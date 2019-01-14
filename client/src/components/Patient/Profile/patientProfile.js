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
import { Button } from '@material-ui/core';
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
import { connect } from 'react-redux'
import { compose } from 'redux'
import { GetPatientCassis } from '../../../store/action/patientAction'
import moment from 'moment'
import CircularProgress from '@material-ui/core/CircularProgress';
import { GetCaseInfo } from '../../../store/action/patientAction'
import { Redirect } from 'react-router-dom';
import Appointment from './patientComponent/Appointment';
import NewCase from './patientComponent/NewCase';
import Indicator from './patientComponent/Indicator'
import { Health } from '../../../store/action/diseaseActions'
import { GetUserInformation } from '../../../store/action/patientAction';
import { openAddAppointmentDialog } from '../../../store/action/doctorActions';
import CustomizedSnackbars from './patientComponent/layout/Snackbar'

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
      selectValue: '',
      selectDate: false
    };

    this.props.GetPationInformation(this.props.match.params.id)
    this.props.GetPatientCassis(this.props.match.params.id)


  }

  handleChange = (event, value) => {
    console.log(event.target, value)
    this.setState({ value });
  };

  handleChangeSelect = (event, value) => {
    console.log('event', event.target.name)
    console.log('event gg', event.target.value)
    this.setState({ [event.target.name]: event.target.value, selectDate: value.props.id });
    this.props.GetCaseInfo(value.props.case)
  }

  componentDidMount() {
    console.log('paramId', this.props.match.params.id)
    console.log('x1', this.props)
  }

  // this function to open addAppointmentDialog
  handleClickOpenAddAppointment = () => {
    this.props.openAddAppointmentDialog(!this.props.isAddAppointmentDialogOpen, this.props.targetAppointment, 'PATIENT_PROFILE');
  }

  render() {
    console.log('doctor ', this.props.doctor.activeAppointment)
    const { classes } = this.props;

    const { value } = this.state;
    // if the user has not login redirect for home page
    //  if(!this.props.login) {
    //   return (
    //     <Redirect to = '/' />
    //   )
    // }
    return (
      <div>
        {!this.props.patient.selectPatient && <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%' }} size={50} disableShrink />}
        {this.props.patient.selectPatient && <Grid container className={classes.root} spacing={16}>
          <Grid container md={12} item>
            <Grid md={1} item></Grid>

            <Grid md={4} item >

              <PatientCard id={this.props.match.params.id}></PatientCard>

              <Grid md={12} item >
                <div style={{ display: 'inline-flex' }}>
                  <div>
                    <Appointment />
                    <Button variant="outlined" color="primary" onClick={this.handleClickOpenAddAppointment}>
                      Add Appointment
                    </Button>
                    <CustomizedSnackbars name="activeAppointment" open={this.props.doctor.activeAppointment} data="the Appointment has been Added"></CustomizedSnackbars>
                  </div>
                  <div style={{ alignSelf: 'center', marginLeft: '10px' }}>
                    <NewCase />
                  </div>
                </div>
              </Grid>
              <div style={{ display: 'inline-flex' }}>
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
                        <MenuItem key={key} name="" id={value.createdAt} case={value.id} value={key}>{value.title}</MenuItem>
                      )
                    })}

                  </Select>
                </FormControl>
              </div>
            </Grid>

            <Grid md={1} style={{ justifyContent: 'center', margin: 'auto' }} item >{this.state.selectDate && moment(this.state.selectDate).fromNow()}{!(this.props.patient.currentPatient) && <CircularProgress disableShrink />}{!this.props.patient.currentPatient && 'Loading...'}</Grid>
            <Grid md={6} item >
              <PatientCalculation style={{}}></PatientCalculation>
              {this.props.patient.PhysicalExamination[0] && <Indicator ></Indicator>}
            </Grid>

          </Grid>
          <Grid container md={12} item>
            <Grid md={1} item></Grid>
            <Grid md={10} sm={11} xs={11} item>
              <NoSsr>
                <div className={classes.root}>
                  <AppBar position="static" style={{ background: "#1c947c" }}>
                    <Tabs fullWidth className={classes.tab} value={value}  indicatorColor="secondary" onChange={this.handleChange}>
                      <Tab style={{ color: "#ffff03", fontSize: 16 , fontWeight: 'bold'}} label="chief Complent" />
                      <Tab style={{ color: "#ffff03", fontSize: 16 , fontWeight: 'bold'}} label="Medical History" />
                      <Tab style={{ color: "#ffff03", fontSize: 16 , fontWeight: 'bold'}} label="Physical Examination" />
                      <Tab style={{ color: "#ffff03", fontSize: 16 , fontWeight: 'bold'}} label="Medical Analysis" />
                      <Tab style={{ color: "#ffff03", fontSize: 16 , fontWeight: 'bold'}} label="Medical Prescription" />
                      <Tab style={{ color: "#ffff03", fontSize: 16 , fontWeight: 'bold'}} label="Patient Plan" />
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
        </Grid>}
      </div>
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
    login: state.auth.login,
    isAddAppointmentDialogOpen: state.doctor.isAddAppointmentDialogOpen,
    targetAppointment: state.doctor.targetAppointment,
    doctor: state.doctor

  }
}

// Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    GetPatientCassis: (id) => dispatch(GetPatientCassis(id)),
    GetCaseInfo: (id) => dispatch(GetCaseInfo(id)),
    Health: (data) => dispatch(Health(data)),
    GetPationInformation: (id) => dispatch(GetUserInformation(id)),
    openAddAppointmentDialog: (isOpen, targetAppointment, context) => dispatch(openAddAppointmentDialog(isOpen, targetAppointment, context))
  }
}


export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(PatientProfile);



//this.props.match.params.id
//BMI :Calculation: [weight (kg) / height (cm) / height (cm)] x 10,000
