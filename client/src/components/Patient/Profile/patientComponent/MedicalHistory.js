import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

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
  bItem:{
      marginLeft: 10,
      marginTop: 0,
  }
  
});

class MedicalHistory extends React.Component {
  state = {
    expanded: null,
    history:{heart:0,joint:1,blood:0,diabetes:1,Renal:0,description:'ozil Welcome walid',}
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Chronic Diseases</Typography>
            <Typography className={classes.secondaryHeading}><i class="fas fa-2x fa-briefcase-medical"></i></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          
            <Grid container spacing={0}>
            <Grid container md={12} item>
                <Grid md={1} item> </Grid>
                <Grid md={2} item> {(this.state.history.heart==1)?<i style={{color:'green'}} class="material-icons">done</i>:<i style={{color:'red'}} class="material-icons">close</i>}<b className={classes.bItem}>Heart-Diseases</b></Grid>
                <Grid md={2} item> {(this.state.history.blood==1)?<i style={{color:'green'}} class="material-icons">done</i>:<i style={{color:'red'}} class="material-icons">close</i>}<b className={classes.bItem}>Blood-Pressure</b></Grid>
                <Grid md={2} item> {(this.state.history.joint==1)?<i style={{color:'green'}} class="material-icons">done</i>:<i style={{color:'red'}} class="material-icons">close</i>}<b className={classes.bItem}>Joints</b></Grid>
                <Grid md={2} item> {(this.state.history.diabetes==1)?<i style={{color:'green'}} class="material-icons">done</i>:<i style={{color:'red'}} class="material-icons">close</i>}<b className={classes.bItem}>Diabetes</b></Grid>
                <Grid md={2} item> {(this.state.history.Renal==1)?<i style={{color:'green'}} class="material-icons">done</i>:<i style={{color:'red'}} class="material-icons">close</i>}<b className={classes.bItem}>Renal-Diseases</b></Grid>
                
                
                </Grid>    
            </Grid>
           
            
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Patient History</Typography>
            <Typography className={classes.secondaryHeading}>
            <i class="material-icons">history</i>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
              diam eros in elit. Pellentesque convallis laoreet laoreet.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Family History</Typography>
            <Typography className={classes.secondaryHeading}>
            <i class="material-icons">people</i>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
      </div>
    );
  }
}

MedicalHistory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MedicalHistory);