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
import {AddMedicalPrescription} from '../../../../../store/action/patientAction'
import { timingSafeEqual } from 'crypto';

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
    margin:'auto'
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

class MPinput extends React.Component {
  state = {
    MedicineName: "",
    DaysInterval: 0,
    TimesDay:0,
    expanded: null,
    history: [{ heart: 0, joint: 1, blood: 0, diabetes: 1, Renal: 0, description: 'ozil Welcome walid', family: 'fff' }]
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
    var obj={
        MedicineName:this.state.MedicineName,
        DaysInterval:this.state.DaysInterval,
        TimesDay:this.state.TimesDay,
      id : this.props.patient.CaseId
    }
    this.props.AddChiefComplaint(obj)
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    console.log("mmmmmmmmmmmmmm",this.props)
    return (
      <div className={classes.root}>
        <ExpansionPanel  expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}>
         
            <Typography className={classes.secondaryHeading} justifyContent="center"><i style={{fontSize:'30px'}} class="material-icons"> playlist_add</i></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails >
            <Grid container spacing={12} className={classes.container}>
              <Grid container md={12} item justify="flex-start" alignItems="flex-end" >
                <Grid md={3} item>
                  <TextField
                    id="standard-name"
                    label="MedicineName"
                    className="input"
                    value={this.state.MedicineName}
                    onChange={this.handleChange2('MedicineName')}
                    margin="normal"
                  />
                </Grid>
                <Grid md={3} item>
                  <TextField
                    id="standard-name"
                    label="DaysInterval"
                    className="input"
                    value={this.state.DaysInterval}
                    onChange={this.handleChange2('DaysInterval')}
                    margin="normal"
                    
                  />
                </Grid>
                <Grid md={3} item>
                  <TextField
                    id="standard-name"
                    label="TimesDay"
                    className="input"
                    value={this.state.TimesDay}
                    onChange={this.handleChange2('TimesDay')}
                    margin="normal"
                    
                  />
                </Grid>
                <Grid md={2} item  >
                   <Button onClick={this.handelSubmit} variant="contained" color="primary" className="button" >
                    Add
                    </Button>
                </Grid>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

MPinput.propTypes = {
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
    AddMedicalPrescription: (data) => dispatch(AddMedicalPrescription(data)),

  }
}

export default compose( withStyles(styles),connect(mapStateToProps,mapDispatchToProps))(MPinput);