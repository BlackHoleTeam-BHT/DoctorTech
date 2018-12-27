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
        width: 600,
        marginTop: 10,
        marginLeft: 60,
        marginBottom: 10,
        
     


    },
    root2: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: 200,
        display: 'inline-flex',
        marginLeft: 60,
        marginTop: 8,
        paddingLeft: 50,
    },
    logo: {
        marginLeft: 260,
    },
    img: {
        width: 60,
        hieght: 60
    }

});

function PatientCalculation(props) {
    const { classes } = props;

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
                    </Typography>
                </Paper>
                <Paper className={classes.root2} elevation={1}>
                    <Typography component="p1" >
                    <i class="material-icons">
                        opacity
                    </i>
        </Typography>
                </Paper>

                <Paper className={classes.root2} elevation={1}>
                    <Typography component="p1" >
                    <i class="material-icons">
                      colorize
                    </i>
        </Typography>
                </Paper>
                <Paper className={classes.root2} elevation={1}>
                    <Typography component="p1" >
                    <i class="material-icons">
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