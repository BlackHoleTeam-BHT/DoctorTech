import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { compose } from 'redux'
import Button from '@material-ui/core/Button';
import { AddPatientPlan } from '../../../../../store/action/patientAction'


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

});

class PPinput extends React.Component {
  state = {
    PhysicalPlan: "",
    MedicalPlan: "",
    Conclusion: "",
    expanded: null,
    
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

  handelSubmit = () => {
    var obj = {
        PhysicalPlan: this.state.PhysicalPlan,
        MedicalPlan: this.state.MedicalPlan,
        Conclusion: this.state.Conclusion,
        CaseId: this.props.patient.CaseId ,
        step:0
    }

    this.setState({
        PhysicalPlan:'',
        MedicalPlan:'',
        Conclusion:''
    })

    console.log(obj)
    this.props.AddPatientPlan(obj)
    
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
   
    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>

            <Typography className={classes.secondaryHeading} justifyContent="center"><i style={{ fontSize: '30px' }} class="material-icons"> playlist_add</i></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails >
            <Grid container spacing={12} className={classes.container}>
              <Grid container md={12} item  direction="column">
                <Grid md={9} item>
                  <TextField
                    id="standard-name"
                    label="Physical-Plan"
                    className="input"
                    value={this.state.PhysicalPlan}
                    onChange={this.handleChange2('PhysicalPlan')}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                </Grid>
                <Grid container md={12} item  direction="column">
                <Grid md={9} item>
                  <TextField
                    id="standard-name"
                    label="Medical-Plan"
                    className="input"
                    value={this.state.MedicalPlan}
                    onChange={this.handleChange2('MedicalPlan')}
                    margin="normal"
                    fullWidth

                  />
                </Grid>
                </Grid>
                <Grid container md={12} item  direction="column">
                <Grid md={9} item>
                  <TextField
                    id="standard-name"
                    label="Conclusion"
                    className="input"
                    value={this.state.Conclusion}
                    onChange={this.handleChange2('Conclusion')}
                    margin="normal"
                    fullWidth

                  />
                </Grid>
                </Grid>

              
             
              <Grid md={2} item  >
                <Button onClick={this.handelSubmit} variant="contained" color="primary" className="button" >
                  Add
                    </Button>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

PPinput.propTypes = {
  classes: PropTypes.object.isRequired,
};

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    patient: state.patient
  }
}

// Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    AddPatientPlan: (data) => dispatch(AddPatientPlan(data)),

  }
}

export default compose( withStyles(styles),connect(mapStateToProps,mapDispatchToProps))(PPinput);