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
import legslogo from '../../../../image/legs.gif'
import legslogo2 from '../../../../image/legs2.jpg'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import '../../patient.css'
import {connect} from 'react-redux'
import { compose } from 'redux'


const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 5,
        marginLeft: 0,
        maxWidth: '100%'

    },
    root2: {
        width: '100%',
        maxWidth: "100%",
    },
    paper: {
        display: 'flex',
        height: 200,
        width: "30%",
        marginTop: -3,
        marginLeft: 10,
        textAlign: 'center'


    },
    control: {
        padding: theme.spacing.unit * 2,

    },
    img: {
        width: "100%",
        height: 200,
        cursor: 'pointer'

    },

    list: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    list2: {
        textAlign: 'justify',
        maxWidth: "100%",
        wordWrap: 'break-word',
        color: 'red',
        width: 'auto',
        margin: 15,



    },
    list3: {
        textAlign: 'center',
        maxWidth: "100%",
        wordWrap: 'break-word',
        color: 'red',
        width: 'auto',
        marginTop: 20,
        marginLeft: 16,
        fontFamily: 'Oxygen',
        fontSize: '2em'





    }
});

class PhysicalExamination extends React.Component {
    state = {
        spacing: '16',
        headSrc: headlogo2,
        bodySrc: bodylogo2,
        legsSrc: legslogo2,
        imageHeadId: 0,
        imageBodyId: 0,
        imageLegsId: 0
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    handleImageClick = (e) => {
        console.log(e.target.alt);
        if (e.target.alt == 'head') {
            if (e.target.id == '0') {
                this.setState({
                    headSrc: headlogo,
                    imageHeadId: 1
                })
            } else {
                this.setState({
                    headSrc: headlogo2,
                    imageHeadId: 0
                })

            }
        } else if (e.target.alt == 'body') {
            if (e.target.id == '0') {
                this.setState({
                    bodySrc: bodylogo,
                    imageBodyId: 1
                })
            } else {
                this.setState({
                    bodySrc: bodylogo2,
                    imageBodyId: 0
                })

            }

        } else {

            if (e.target.id == '0') {
                this.setState({
                    legsSrc: legslogo,
                    imagelegsId: 1
                })
            } else {
                this.setState({
                    legsSrc: legslogo2,
                    imagelegsId: 0
                })

            }



        }


    }

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        console.log('physical',this.props.patient.PhysicalExamination[0])

        return (

            <div>
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={12}>
                        <Grid container className={classes.root} justify="center" spacing={Number(spacing)}>



                            <Grid container justify="center" item xs={12} >
                                <Paper className={classes.paper} >

                                    <List className={classes.root2}>
                                        <ListItemText
                                            className={classes.list}
                                            primary={<i className="fas fa-3x fa-weight"></i>}
                                            secondary={
                                                <div className={classes.list3}>
                                                {this.props.patient.PhysicalExamination[0].weight}<i style={{color: 'blue'}}>Kg</i>
                                                </div>
                                            }></ListItemText>

                                    </List>




                                </Paper>
                                <Paper className={classes.paper} >
                                    <img src={this.state.headSrc} id={this.state.imageHeadId} onClick={this.handleImageClick} className={classes.img} alt="head" />
                                </Paper>
                                <Paper className={classes.paper} >
                                    <List className={classes.root2}>
                                        <ListItemText
                                            className={classes.list}
                                            primary={<b>Head</b>}
                                            secondary={
                                                <div className={classes.list2}>
                                                {this.props.patient.PhysicalExamination[0].headNotes}
                                                </div>
                                            }></ListItemText>

                                    </List>
                                </Paper>
                            </Grid>

                            <Grid container justify="center" item xs={12} >
                                <Paper className={classes.paper} >
                                    

                                    <List className={classes.root2}>
                                        <ListItemText
                                            className={classes.list}
                                            primary={<i className="fas fa-3x  fa-male icon"></i>}
                                            secondary={
                                                <div className={classes.list3}>
                                                {this.props.patient.PhysicalExamination[0].height}<i style={{color: 'blue'}}>cm</i>
                                                </div>
                                            }></ListItemText>

                                    </List>
                                </Paper>
                                <Paper className={classes.paper} >
                                    <img src={this.state.bodySrc} id={this.state.imageBodyId} onClick={this.handleImageClick} className={classes.img} alt="body" />
                                </Paper>
                                <Paper className={classes.paper} >
                                    <List className={classes.root2}>
                                        <ListItemText
                                            className={classes.list}
                                            primary={<b>Body</b>}
                                            secondary={
                                                <div className={classes.list2}>
                                                {this.props.patient.PhysicalExamination[0].middleBodyNotes}
                                                </div>
                                            }></ListItemText>

                                    </List>
                                </Paper>
                            </Grid>

                            <Grid container justify="center" item xs={12} >
                                <Paper className={classes.paper} >
                                  
                                    <List className={classes.root2}>
                                        <ListItemText
                                            className={classes.list}
                                            primary={<i className="fas fa-3x fa-temperature-high icon"></i>}
                                            secondary={
                                                <div className={classes.list3}>
                                                {this.props.patient.PhysicalExamination[0].bodyTemperature}<i style={{color: 'blue'}}>°C</i>
                                                </div>
                                            }></ListItemText>

                                    </List>
                                </Paper>
                                <Paper className={classes.paper} >
                                    <img src={this.state.legsSrc} id={this.state.imagelegsId} onClick={this.handleImageClick} className={classes.img} alt="legs" />
                                </Paper>
                                <Paper className={classes.paper} >
                                    <List className={classes.root2}>
                                        <ListItemText
                                            className={classes.list}
                                            primary={<b>Legs</b>}
                                            secondary={
                                                <div className={classes.list2}>
                                                {this.props.patient.PhysicalExamination[0].bottomBodyNotes}
                                                 </div>
                                            }></ListItemText>

                                    </List>
                                </Paper>
                            </Grid>




                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Paper className={classes.control}>
                            <Grid container>
                                <Grid item>
                                    <FormLabel>Scale</FormLabel>
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
            </div>
        );
    }
}

PhysicalExamination.propTypes = {
    classes: PropTypes.object.isRequired,
};


//Note:add the redux state to the props
const mapStateToProps = (state) => {
    return {
      patient: state.patient
    }
  }
  

export default compose(withStyles(styles),connect(mapStateToProps))(PhysicalExamination);

//style= {{display:"flex", justifyContent: 'center'}}


