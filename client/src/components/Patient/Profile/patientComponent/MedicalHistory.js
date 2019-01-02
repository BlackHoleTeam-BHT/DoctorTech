import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { compose } from 'redux'
import MCInput from './inputComponent/MHinput'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  bItem: {
    marginLeft: 10,
    marginTop: 0,
  }

});

class MedicalHistory extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    console.log('historu', this.props.patient.MedicalHistory)
    return (
      <div className={classes.root}>
        {(this.props.patient.MedicalHistory.length!=0) && (this.props.patient.CaseId !=0) && <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Chronic Diseases</Typography>
            <Typography className={classes.secondaryHeading}><i class="fas fa-2x fa-briefcase-medical"></i></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>

            <Grid container spacing={0}>
              <Grid container md={12} item>
                <Grid md={1} item> </Grid>
                <Grid md={2} item> {(this.props.patient.MedicalHistory[0].heartDisease == 1) ? <i style={{ color: 'green' }} class="material-icons">done</i> : <i style={{ color: 'red' }} class="material-icons">close</i>}<b className={classes.bItem}>Heart-Diseases</b></Grid>
                <Grid md={2} item> {(this.props.patient.MedicalHistory[0].bloodPressure == 1) ? <i style={{ color: 'green' }} class="material-icons">done</i> : <i style={{ color: 'red' }} class="material-icons">close</i>}<b className={classes.bItem}>Blood-Pressure</b></Grid>
                <Grid md={2} item> {(this.props.patient.MedicalHistory[0].joints == 1) ? <i style={{ color: 'green' }} class="material-icons">done</i> : <i style={{ color: 'red' }} class="material-icons">close</i>}<b className={classes.bItem}>Joints</b></Grid>
                <Grid md={2} item> {(this.props.patient.MedicalHistory[0].diabetes == 1) ? <i style={{ color: 'green' }} class="material-icons">done</i> : <i style={{ color: 'red' }} class="material-icons">close</i>}<b className={classes.bItem}>Diabetes</b></Grid>
                <Grid md={2} item> {(this.props.patient.MedicalHistory[0].renalDisease == 1) ? <i style={{ color: 'green' }} class="material-icons">done</i> : <i style={{ color: 'red' }} class="material-icons">close</i>}<b className={classes.bItem}>Renal-Diseases</b></Grid>


              </Grid>
            </Grid>


          </ExpansionPanelDetails>
        </ExpansionPanel>}
        {(this.props.patient.MedicalHistory.length!=0) && (this.props.patient.CaseId !=0) && <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Patient History</Typography>
            <Typography className={classes.secondaryHeading}>
              <i class="material-icons">history</i>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {this.props.patient.MedicalHistory[0].patientHistory}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>}
       {(this.props.patient.MedicalHistory.length!=0) && (this.props.patient.CaseId !=0) && <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Family History</Typography>
            <Typography className={classes.secondaryHeading}>
              <i class="material-icons">people</i>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {this.props.patient.MedicalHistory[0].familyHistory}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>}
        {(this.props.patient.CaseId !=0) && (this.props.patient.MedicalHistory.length===0) &&  <MCInput></MCInput>}

      </div>
    );
  }
}

MedicalHistory.propTypes = {
  classes: PropTypes.object.isRequired,
};


//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    patient: state.patient
  }
}

export default compose(withStyles(styles), connect(mapStateToProps))(MedicalHistory);