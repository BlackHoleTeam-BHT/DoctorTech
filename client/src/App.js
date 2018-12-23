import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignUp from './components/auth/Signup'
class App extends Component {
 
  render() {
    return (
     
          <SignUp />
         
    );
  }
}
export default App;
