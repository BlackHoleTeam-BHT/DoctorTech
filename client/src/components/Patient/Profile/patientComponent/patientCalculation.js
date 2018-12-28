import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import calculater from '../../../../image/calculater.gif'
import { connect } from 'react-redux'
import { compose } from 'redux'

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
  },
  content: {
    marginLeft: 50,
  }


});

function PatientCalculation(props) {
  const { classes } = props;
  console.log('calculation', props.patient.PhysicalExamination);

  return (
    <div>
      <Paper className={classes.root} elevation={1}>

        <Typography variant="h5" component="h3" className={classes.logo}>
          <img src={calculater} alt="" className={classes.img} />
        </Typography>
        <Paper className={classes.root2} elevation={1}>
          <Typography component="p" >
            <i class="material-icons">
              accessibility
                        </i>
            {!(props.patient.PhysicalExamination[0].weight == '') && <i className={classes.content}>{Math.round((props.patient.PhysicalExamination[0].weight / Math.pow(props.patient.PhysicalExamination[0].height, 2)) * 10000)}</i>}
          </Typography>
        </Paper>
        <Paper className={classes.root2} elevation={1}>
          <Typography component="p1" >
            <i class="material-icons">
              opacity
                    </i>
            {!(props.patient.PhysicalExamination[0].weight == '') && <i className={classes.content}>{props.patient.PhysicalExamination[0].diabetes}</i>}
          </Typography>
        </Paper>

        <Paper className={classes.root2} elevation={1}>
          <Typography component="p1" >
            <i class="material-icons">
              colorize
                    </i>
            {!(props.patient.PhysicalExamination[0].weight == '') && <i className={classes.content}>{props.patient.PhysicalExamination[0].bodyTemperature}</i>}
          </Typography>
        </Paper>
        <Paper className={classes.root2} elevation={1}>
          <Typography component="p1" >
            <i class="material-icons">
              whatshot
                    </i>
            {!(props.patient.PhysicalExamination[0].weight == '') && <i className={classes.content}>{props.patient.PhysicalExamination[0].BloodPressure}</i>}
          </Typography>
        </Paper>

      </Paper>
    </div>
  );
}

PatientCalculation.propTypes = {
  classes: PropTypes.object.isRequired,
};


//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    patient: state.patient
  }
}

export default compose(withStyles(styles), connect(mapStateToProps))(PatientCalculation);