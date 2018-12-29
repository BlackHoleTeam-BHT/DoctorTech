import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/layout/Header.js'
import Dashboard from './components/dashboard/Dashboard.js';
import SignIn from './components/auth/SignIn.js';
import Signup from './components/auth/Signup.js';
import Home from './components/layout/Home.js';
import {connect} from 'react-redux'
<<<<<<< HEAD
import PatientProfile from './components/Patient/Profile/patientProfile.js';
=======
import PatientProfile from './components/Patient/Profile/patientProfile'
>>>>>>> add the MHinput component

class App extends Component {
  state = {
    isLogin: true
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          {!this.props.login ? <Header /> : ''}
          <Switch>
            {/* Router all the component  ToDO add the component */}
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard/:id" component={Dashboard} />
            <Route path="/PatientProfile/:id" component={PatientProfile} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
      user: state.auth.user,
      login: state.auth.login
  }
}
export default connect(mapStateToProps)(App);
