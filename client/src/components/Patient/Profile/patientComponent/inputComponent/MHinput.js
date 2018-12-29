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
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



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
    formControl: {
        margin: 'auto'
    },
    textField: {

    }
});
class MCInput extends React.Component {
    state = {
        heartDisease: 0,
        bloodPressure: 0,
        renalDisease: 0,
        joints: 0,
        diabetes: 0,
        PatientHistory:''


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
            title: this.state.title,
            description: this.state.description,
            id: this.props.patient.CaseId
        }
        this.props.AddChiefComplaint(obj)
    }

    handleChangeCheckBox = name => event => {
        this.setState({ [name]: event.target.checked });

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
                        <Grid container spacing={8} className={classes.container}>
                            <Grid container md={12} item  >

                                <Grid item md={3}>
                                    <FormControlLabel
                                        className={classes.formControl}
                                        control={
                                            <Checkbox
                                                checked={this.state.heartDisease}
                                                onChange={this.handleChangeCheckBox('heartDisease')}
                                                value="heartDisease"
                                            />
                                        }
                                        label="Heart-Diseases"
                                    />
                                </Grid>
                                <Grid item md={3}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.bloodPressure}
                                                onChange={this.handleChangeCheckBox('bloodPressure')}
                                                value="bloodPressure"
                                            />
                                        }
                                        label="Blood-Pressure"
                                    />
                                </Grid>
                                <Grid item md={2}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.joints}
                                                onChange={this.handleChangeCheckBox('joints')}
                                                value="joints"
                                            />
                                        }
                                        label="Joints"
                                    />
                                </Grid>
                                <Grid item md={2}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.diabetes}
                                                onChange={this.handleChangeCheckBox('diabetes')}
                                                value="diabetes"
                                            />
                                        }
                                        label="Diabetes"
                                    />
                                </Grid>
                                <Grid item md={2}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.renalDisease}
                                                onChange={this.handleChangeCheckBox('renalDisease')}
                                                value="renalDisease"
                                            />
                                        }
                                        label="Renal-Diseases"
                                    />
                                </Grid>



                            </Grid>
                            <Grid container md={12} item  direction="column">

                                <Grid item style={{ marginLeft: '50px' }} md={5}>
                                    <TextField
                                        onChange={this.handleChange}
                                        value={this.state.insurance}
                                        id="insurance"
                                        label="Patient-History"
                                        className={classes.textField}
                                        type="text"
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item style={{marginLeft:'50px'}} md={5}>
                                <TextField
                                        onChange={this.handleChange}
                                        value={this.state.insurance}
                                        id="insurance"
                                        label="Family-History"
                                        className={classes.textField}
                                        type="text"
                                        margin="normal"
                                        fullWidth
                                    />


                                </Grid>


                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}
MCInput.propTypes = {
    classes: PropTypes.object.isRequired,
};
//Note:add the redux state to the props
const mapStateToProps = (state) => {
    return {
        patient: state.patient
    }
}
// Note: add the action to the props
// const mapDispatchToProps = (dispatch) => {
//   return {
//     AddChiefComplaint: (data) => dispatch(AddChiefComplaint(data)),
//   }
// }
export default compose(withStyles(styles), connect(mapStateToProps))(MCInput);