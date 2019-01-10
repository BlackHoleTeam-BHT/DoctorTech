import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import DrawerMenu from './DrawerMenu.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreatePatient from '../Patient/CreatePatient2.js';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Patients from '../Patient/Patients.js';
import PatientProfile from '../Patient/Profile/patientProfile.js';
import { logout } from '../../store/action/authActions.js';
import { Redirect } from 'react-router-dom'
import DrProfile from '../doctorProfile/DrProfile.js'
import DoctorConsultation from '../doctor/DoctorConsultation.js'
import SmartPredict from '../disease/SmartPredict.js';
import InteractiveList from './InteractiveList';

const drawerWidth = 260;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    background: "#2ec8a6",
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  avtar: {
    background: "#ff80b3",
    color: "#fff",
    marginRight: 15
  }
});

class Dashboard extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  // function to logout 
  logout() {
    // logout function from authAction
    this.props.logOut();
  }
  render() {
    const { classes, theme } = this.props;
    if (this.props.logout) {
      this.props.history.push('/')
    }
    if (!this.props.login) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" color="inherit" className={classes.grow}>
                Doctor Tech
              </Typography>
              <Avatar style={{background:"#1c947c", color: "#ff0f"}} className={classes.avtar} >Dr</Avatar>
              <Typography variant="h5"
                 color="inherit" 
                 className={classes.grow}
                 style= {{fontSize: 18, fontWeight: 'bold'}}
              >
                {this.props.user.firstName + ' ' + this.props.user.lastName}
              </Typography>
              <Button
                color="inherit" 
                onClick={this.logout.bind(this)}
                style= {{fontSize: 18, fontWeight: 'bold'}}
              >Logout</Button>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={this.props.container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <DrawerMenu classes={classes} />
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                <DrawerMenu classes={classes} />
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {/*  Router for Drawer menu TODO add the compnent */}
            <Switch>
            <Route exact path="/dashboard/:id/" component={InteractiveList} />
            <Route path="/dashboard/:id/add-patient" component={CreatePatient} />
            <Route path="/dashboard/:id/patients" component={Patients} />
            <Route path="/dashboard/:id/PatientProfile/:id" component={PatientProfile} />
            <Route path="/dashboard/:id/dr-profile" component={DrProfile} />
            <Route path="/dashboard/:id/consultaion/" component={DoctorConsultation} />
            <Route path="/dashboard/:id/samrt-prediction/" component={SmartPredict} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
      
      
    );
  }
}


Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    logout: state.auth.logout,
    login: state.auth.login
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logout())
  }
}
export default compose(withStyles(styles, { withTheme: true }), connect(mapStateToProps, mapDispatchToProps))(Dashboard);