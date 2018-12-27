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
import {connect} from 'react-redux'
import { compose } from 'redux'
import {GetPatientCassis} from '../../../store/action/patientAction'


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

  },formControl: {
    margin: theme.spacing.unit,
    minWidth: 150,
  },
  select:{
    color:'red'
  },
  root2:{
    display: 'flex',
    flexWrap: 'wrap',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
})



class PatientProfile extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      value: 0,
      selectValue:''
    };

 

}

  

  handleChange = (event, value) => {
    console.log(event.target, value)
    this.setState({ value });
  };

  handleChangeSelect=(event)=>{
    console.log('event',event.target.value)
    this.setState({ [event.target.name]: event.target.value });

  }

  componentDidMount() {
    console.log('paramId',this.props.match.params.id)
    console.log('x1',this.props)
}


  render() {
    const { classes } = this.props;

    const { value } = this.state;
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid container md={12} item>
          <Grid md={1} item></Grid>
          <Grid md={5} item >
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

            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </FormControl>
          
          </Grid>
          <Grid md={6} item right>
            <PatientCalculation ></PatientCalculation>
          </Grid>
          <Grid container md={12} item>
            <Grid md={1} item></Grid>

            <NoSsr>
              <div className={classes.root}>
                <AppBar position="static">
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
    patient: state
  }
}

// Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    GetPatientCassis: (id) => dispatch(GetPatientCassis(id))
  }
}


export default compose(withStyles(styles),connect(mapStateToProps,mapDispatchToProps))(PatientProfile);



//this.props.match.params.id