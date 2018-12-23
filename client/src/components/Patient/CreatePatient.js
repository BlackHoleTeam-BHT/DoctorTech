import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './patient.css'



class CreatePatient extends Component {

  state = {
    firstName:'',

    name: '',
    index: ''
  }

//Note: handle submit information
  handleSubmit= (e) => {
    e.preventDefault()
  }
//Note: handle on change information
  handleChange=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="container">


          <div className="row">
            <form onSubmit={this.handleSubmit} className="col s12">
              <div className="col s12">
                <div className="input-field col s3">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="firstName" type="text" className="validate" />
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="input-field col s3">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="MiddleName" type="text" className="validate" />
                  <label htmlFor="MiddleName">Middle Name</label>
                </div>
                <div className="input-field col s3">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="lastName" type="text" className="validate" />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>

              <div className="col s12 ">
                <div className="input-field col s3">
                  <i className="material-icons prefix">assignment_ind</i>
                  <input id="age" type="number" className="validate " />
                  <label htmlFor="age">Age</label>
                </div>
                <div className="input-field col s3">
                  <i className="material-icons prefix">phone</i>
                  <input id="Phone" type="tel" className="validate" />
                  <label htmlFor="Phone">Phone</label>
                </div>
                <div className="input-field col s3">
                  <i className="material-icons prefix">assessment</i>
                  <input id="insurance" type="number" className="validate" />
                  <label htmlFor="insurance">insurance Number</label>
                </div>
              </div>

              <div className="col s12">
                <div className="input-field col s9">
                  <i className="material-icons prefix">email</i>
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="col s12">
                <div className="input-field col s9">
                  <i className="material-icons prefix">location_on</i>
                  <input id="location" type="text" className="validate" />
                  <label htmlFor="location">location</label>
                </div>
              </div>

              <div className="col s12">
                <div className="input-field col s1">
                  <i className="material-icons prefix">people</i>
                </div>
                <div className="input-field col s1">
                  <label>
                    <input name="gender" type="radio" checked />
                    <span>Male</span>
                  </label>
                </div>
                <div className="input-field col s2">
                  <label>
                    <input name="gender" type="radio" />
                    <span>FeMale</span>
                  </label>
                </div>
                <div className="input-field col s2"></div>
                <div className="input-field col s2">
                  <label>
                    <input type="checkbox" />
                    <span>Married</span>
                  </label>

                </div>
              </div>

              <div className="col s12">
                <div className="input-field col s12">
                  <br /><br /><br /><br /><br />
                  <Button className="CreatePatientSubmit" color="secondary" size="lg" block>Block level button</Button>
                </div>
              </div>









            </form>
          </div>
        </div>






      </div>
    )
  }
}


export default CreatePatient