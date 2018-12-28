import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import calculater from '../../../../image/calculater.gif'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "60%",
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 10,




  },
  root2: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "42%",
    display: 'inline-flex',
    marginLeft: 20,
    marginTop: 8,
    paddingLeft: 20,
  },
  img: {
    width: 40,
    hieght: 40
  }

});

function PatientCalculation(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>

        <Typography variant="h5" className="text-center">
          <img src={calculater} alt="" className={classes.img} />
          Calculater
        </Typography>
        <Paper className={classes.root2} elevation={1}>
          <Typography variant="h6" >
            <i className="material-icons" style={{ marginRight: 10, marginTop: 10 }}>
              accessibility
            </i>

          </Typography>
        </Paper>
        <Paper className={classes.root2} elevation={1}>
          <Typography variant="h6">
            <i className="material-icons" style={{ marginRight: 10, marginTop: 10 }}>
              opacity
            </i>
          </Typography>
        </Paper>

        <Paper className={classes.root2} elevation={1}>
          <Typography variant="h6" >
            <i className="material-icons" style={{ marginRight: 10, marginTop: 10 }}>
              colorize
            </i>
        </Typography>
        </Paper>
        <Paper className={classes.root2} elevation={1}>
          <Typography variant="h6" >
            <i className="material-icons" style={{ marginRight: 10, marginTop: 10 }}>
              whatshot
            </i>
          </Typography>
        </Paper>

      </Paper>
    </div>
  );
}

PatientCalculation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientCalculation);