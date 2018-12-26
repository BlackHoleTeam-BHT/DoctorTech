import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PatientCard from './patientComponent/patientCard'
import PatientCalculation from './patientComponent/patientCalculation'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ChiefComplaint from './patientComponent/chiefComplent'

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  function LinkTab(props) {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
  }
  


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tab:{
        
    }
})



class PatientProfile extends React.Component {
    state = {
        value: 0,
      };
      handleChange = (event, value) => {
          console.log(event.target,value)
        this.setState({ value });
      };    




    render() {
        const { classes } = this.props;
        
        const { value } = this.state;
        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid container md={12} item>
                    <Grid md={1} item></Grid>
                    <Grid md={5} item >
                        <PatientCard ></PatientCard>
                    </Grid>
                    <Grid md={6} item right>
                        <PatientCalculation ></PatientCalculation>
                    </Grid>
                    <Grid container md={12} item>
                    <Grid md={1} item></Grid>

                    <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs fullWidth className={classes.tab} value={value} onChange={this.handleChange}>
              <LinkTab label="Page One" href="page1" />
              <LinkTab label="Page Two" href="page2" />
              <LinkTab label="Page Three" href="page3" />
              <LinkTab label="Page four" href="page4" />
              <LinkTab label="Page four" href="page5" />
              <LinkTab label="Page four" href="page6" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>
            <ChiefComplaint></ChiefComplaint>
              </TabContainer>}
          {value === 1 && <TabContainer>Page Two</TabContainer>}
          {value === 2 && <TabContainer>Page Three</TabContainer>}
          {value === 3 && <TabContainer>Page four</TabContainer>}
          {value === 4 && <TabContainer>Page five</TabContainer>}
          {value === 5 && <TabContainer>Page six</TabContainer>}
        </div>
      </NoSsr>
      <Grid md={1} item></Grid>

                    </Grid>



                </Grid>
            </Grid>
        )
    }

}

PatientProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientProfile);