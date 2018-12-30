import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { compose } from 'redux'
import {UpdatePlanStep} from '../../../../store/action/patientAction'

const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,

    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },
});


class PatientPlan extends React.Component {
    state = {
        activeStep: 0,
        finished: null,
        data: [{ id: 0, physicalPlan: 'PhysicalPlan', MedicalPlan: 'MedicalPlan', Conclusion: 'Conclusion', step: 0 }]
    };

    handleNext = () => {
        var CurrentStep=this.props.patient.PatientPlan[0].step
        var id=this.props.patient.PatientPlan[0].id
        this.props.UpdatePlanStep(id,CurrentStep+1)     
    };

    handleBack = () => {
        var CurrentStep=this.props.patient.PatientPlan[0].step
        var id=this.props.patient.PatientPlan[0].id
        this.props.UpdatePlanStep(id,CurrentStep-1)
    };

    handleOpen = () => {
        this.setState({
            activeStep: 3,
        });
    };

    handleCloseProfile = () => {
        this.setState({
            activeStep: 4
        })


    }

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;
        console.log('plan',this.props)

        return (
            <div className={classes.root}>
            {this.props.patient.PatientPlan[0].step!=5 && <Stepper activeStep={activeStep} orientation="vertical">

                    <Step >
                        <StepLabel>Physical-Plan</StepLabel>
                        <StepContent>
                            <Typography>{this.props.patient.PatientPlan[0].PhysicalPlan}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={this.props.patient.PatientPlan[0].step === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                     </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        {this.props.patient.PatientPlan[0].step === 2 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>

                    <Step >
                        <StepLabel>Medical-Plan</StepLabel>
                        <StepContent>
                            <Typography>{this.props.patient.PatientPlan[0].MedicalPlan}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={this.props.patient.PatientPlan[0].step === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                     </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        {this.props.patient.PatientPlan[0].step === 2 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>

                    <Step >
                        <StepLabel>Conclusion</StepLabel>
                        <StepContent>
                            <Typography>{this.props.patient.PatientPlan[0].Conclusion}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={this.props.patient.PatientPlan[0].step === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                     </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        {this.props.patient.PatientPlan[0].step === 2 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>


                </Stepper>}
                {this.props.patient.PatientPlan[0].step === 3 && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>The plan has been finished to close the profile please press the below button..</Typography>
                        <Button onClick={this.handleBack} className={classes.button}>
                            Back
                          </Button>
                        <Button color="primary" onClick={this.handleCloseProfile} className={classes.button}>
                            Close Profile
                       </Button>
                    </Paper>
                )}
                {this.props.patient.PatientPlan[0].step==4 && <Button onClick={this.handleOpen}>Open</Button>}
            </div>
        );
    }
}

PatientPlan.propTypes = {
    classes: PropTypes.object,
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
        UpdatePlanStep: (id,step) => dispatch(UpdatePlanStep(id,step))
    }
  }
  

export default compose(withStyles(styles),connect(mapStateToProps,mapDispatchToProps))(PatientPlan);