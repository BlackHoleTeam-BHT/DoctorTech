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
    medicineName: "",
    daysInterval: 0,
    timesDay:0,
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
    var obj={
        name:this.state.name,
        daysInterval:this.state.daysInterval,
        times:this.state.times,
      id : this.props.patient.CaseId
    }
    this.setState({
      name:'',
      daysInterval:0,
      times:0
    })
    this.props.AddMedicalPrescription(obj)
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

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
                    label="name"
                    className="input"
                    value={this.state.name}
                    onChange={this.handleChange2('name')}
                    margin="normal"
                  />
                </Grid>
                <Grid md={3} item>
                  <TextField
                    id="standard-name"
                    label="daysInterval"
                    className="input"
                    value={this.state.daysInterval}
                    onChange={this.handleChange2('daysInterval')}
                    margin="normal"
                    
                  />
                </Grid>
                <Grid md={3} item>
                  <TextField
                    id="standard-name"
                    label="times"
                    className="input"
                    value={this.state.times}
                    onChange={this.handleChange2('times')}
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