//PhysicalExamination
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import headlogo from '../../../../image/head.gif'
import headlogo2 from '../../../../image/head2.jpg'
import bodylogo from '../../../../image/body.gif'
import bodylogo2 from '../../../../image/body2.jpg'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 5,
    
    marginLeft: 0,
  },
  paper: {
    display: 'inline-flex',
    height: 200,
    width: 400,
    marginTop: -3,
    marginLeft: 10,
    
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  img:{
      width:400,
      height:200,
      cursor:'pointer'

  }

});

class PhysicalExamination extends React.Component {
  state = {
    spacing: '16',
    headsrc:headlogo2,
    imageHeadId:0
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleImageClick=(e)=>{
      console.log(e.target.alt);
      if(e.target.value=='head'){
      if(e.target.id=='0'){
          this.setState({
            headsrc:headlogo,
            imageHeadId:1
          })
      }else{
        this.setState({
            headsrc:headlogo2,
            imageHeadId:0
          })

      }
    }
      

  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (

      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container  className={classes.root}  justify="center" spacing={Number(spacing)}>
            
                
              
              <Grid container   justify="center"  item xs={12} >                 
                <Paper className={classes.paper} > </Paper>
                <Paper className={classes.paper} >
                <img src={this.state.headsrc} id={this.state.imageHeadId}  onClick={this.handleImageClick} className={classes.img} alt="head"/>
                </Paper>
                <Paper className={classes.paper} ></Paper>
              </Grid>

              <Grid container   justify="center"  item xs={12} >                 
                <Paper className={classes.paper} > </Paper>
                <Paper className={classes.paper} >
                <img src={bodylogo2} id={this.state.imageHeadId}  onClick={this.handleImageClick} className={classes.img} alt="body"/>
                </Paper>
                <Paper className={classes.paper} ></Paper>
              </Grid>

              <Grid container   justify="center" item xs={12} >                 
                <Paper className={classes.paper} >
                   
                </Paper>
                <Paper className={classes.paper} />
                <Paper className={classes.paper} />
              </Grid>
              
             
              
            
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel>spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="Spacing"
                  value={spacing}
                  onChange={this.handleChange('spacing')}
                  row
                >
                  <FormControlLabel value="0" control={<Radio />} label="0" />
                  <FormControlLabel value="8" control={<Radio />} label="8" />
                  <FormControlLabel value="16" control={<Radio />} label="16" />
                  <FormControlLabel value="24" control={<Radio />} label="24" />
                  <FormControlLabel value="32" control={<Radio />} label="32" />
                  <FormControlLabel value="40" control={<Radio />} label="40" />
                </RadioGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

PhysicalExamination.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhysicalExamination);