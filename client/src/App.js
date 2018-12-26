import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'

class App extends Component {
 
  render() {
    return (
      <div> 
        <SignIn />
      </div>

      // {/* <BrowserRouter>
      //   <div className="App container">
      //     <h1 className="center text-grey">Welcome with Doctor Tech</h1>
      //     <h3 className="center text-grey"> My Team I wish you all the best.</h3>
      //     <Navbar />
      //     <Route />
      //     <Route />
      //     <Route />
      //     <Route />
      //   </div>
      // </BrowserRouter> */}

    );
  }
}
export default App;
