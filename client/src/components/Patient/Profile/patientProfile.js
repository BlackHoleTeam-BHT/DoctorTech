import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import PatientCard from './patientComponent/patientCard'
import PatientCalculation from './patientComponent/patientCalculation'


const styles = theme => ({
    root: {}
})



class PatientProfile extends React.Component {




    render(){
        const { classes } = this.props;
        return(
            <Grid container  spacing={16}>
            <Grid container md={12} item>
            <Grid md={1} item></Grid>
            <Grid md={5} item>
                <PatientCard></PatientCard>
            </Grid>
            <Grid md={6} item>
           < PatientCalculation></PatientCalculation>
            </Grid>


            </Grid>
            </Grid>
        )
    }

}

PatientProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default PatientProfile