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
import { AddPhysicalExamination } from '../../../../../store/action/patientAction'


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

class PEinput extends React.Component {
  state = {
    weight: null,
    height: null,
    bodyTemperature: null,
    diabetes:null,
    BloodPressure:null,
    head: "",
    body: "",
    legs: "",
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
      weight: this.state.weight,
      height: this.state.height,
      bodyTemperature: this.state.bodyTemperature,
      headNotes: this.state.head,
      middleBodyNotes: this.state.body,
      bottomBodyNotes: this.state.legs,
      id: this.props.patient.CaseId ,
      BloodPressure:this.state.BloodPressure,
      diabetes:this.state.diabetes
    }
    this.setState({
      weight:null,
      height:null,
      bodyTemperature:null,
      BloodPressure:null,
      diabetes:null,
      headNotes:'',
      middleBodyNotes:'',
      bottomBodyNotes:''
    })
  
    this.props.AddPhysicalExamination(obj)
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
              <Grid container md={12} item justify="flex-start" alignItems="flex-end" >
                <Grid md={3} item>
                  <TextField
                  required
                    id="weight"
                    label="weight"
                    className="input"
                    value={this.state.weight}
                    onChange={this.handleChange2('weight')}
                    margin="normal"
                    type="number"
                    
                  />
                </Grid>
                <Grid md={3} item>
                  <TextField
                  required
                    id="standard-name"
                    label="height"
                    className="input"
                    value={this.state.height}
                    onChange={this.handleChange2('height')}
                    margin="normal"
                    type="number"

                  />
                </Grid>
                <Grid md={3} item>
                  <TextField
                    id="standard-name"
                    label="bodyTemperature"
                    className="input"
                    value={this.state.bodyTemperature}
                    onChange={this.handleChange2('bodyTemperature')}
                    margin="normal"
                    type="number"

                  />
                </Grid>

              </Grid>
              <Grid container md={12} item  direction="column">
                <Grid md={6} item>
                  <TextField
                    id="standard-name"
                    label="head"
                    className="input"
                    value={this.state.head}
                    onChange={this.handleChange2('head')}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                </Grid>
                <Grid container md={12} item  direction="column">
                <Grid md={6} item>
                  <TextField
                    id="standard-name"
                    label="body"
                    className="input"
                    value={this.state.body}
                    onChange={this.handleChange2('body')}
                    margin="normal"
                    fullWidth

                  />
                </Grid>
                </Grid>
                <Grid container md={12} item  direction="column">
                <Grid md={6} item>
                  <TextField
                    id="standard-name"
                    label="legs"
                    className="input"
                    value={this.state.legs}
                    onChange={this.handleChange2('legs')}
                    margin="normal"
                    fullWidth

                  />
                </Grid>
                </Grid>

              
              <Grid container md={12} item justify="flex-start" alignItems="flex-end" >
              <Grid md={3} item>
                  <TextField
                    id="standard-name"
                    label="diabetes"
                    className="input"
                    value={this.state.diabetes}
                    onChange={this.handleChange2('diabetes')}
                    margin="normal"
                    type="number"

                  />
                </Grid>
                <Grid md={3} item>
                  <TextField
                    id="standard-name"
                    label="BloodPressure"
                    className="input"
                    value={this.state.BloodPressure}
                    onChange={this.handleChange2('BloodPressure')}
                    margin="normal"

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

PEinput.propTypes = {
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
    AddPhysicalExamination: (data) => dispatch(AddPhysicalExamination(data)),

  }
}

export default compose( withStyles(styles),connect(mapStateToProps,mapDispatchToProps))(PEinput);

// export default compose(withStyles(styles))(PEinput);