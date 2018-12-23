import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './patient.css'



class CreatePatient extends Component {

  state = {
    firstName:'',
    MiddleName:'',
    lastName:'',
    age:'',
    Phone:'',
    insurance:'',
    email:'',
    location:'',
    selectedOption :'Male',
    checked:false

  }

//Note: handle submit information
  handleSubmit= (e) => {
    e.preventDefault()
    console.log(this.state)
  }
//Note: handle on change information
  handleChange=(e)=>{

 this.setState({
        [e.target.id]:e.target.value
    })
  }

  //Note: handle on change option 
  handleOptionChange=(e)=>{
    console.log(e.target.value)
    this.setState({
      selectedOption: e.target.value
    });
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
                  <input onChange={this.handleChange} id="firstName" type="text" className="validate" />
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="input-field col s3">
                  <i className="material-icons prefix">account_circle</i>
                  <input onChange={this.handleChange} id="MiddleName" type="text" className="validate" />
                  <label htmlFor="MiddleName">Middle Name</label>
                </div>
                <div className="input-field col s3">
                  <i className="material-icons prefix">account_circle</i>
                  <input onChange={this.handleChange} id="lastName" type="text" className="validate" />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>

              <div className="col s12 ">
                <div className="input-field col s3">
                  <i className="material-icons prefix">assignment_ind</i>
                  <input onChange={this.handleChange} value={this.state.age} id="age" type="number" className="validate " />
                  <label htmlFor="age">Age</label>
                </div>
                <div className="input-field col s3">
                  <i className="material-icons prefix">phone</i>
                  <input onChange={this.handleChange} value={this.state.Phone} id="Phone" type="tel" className="validate" />
                  <label htmlFor="Phone">Phone</label>
                </div>
                <div className="input-field col s3">
                  <i className="material-icons prefix">assessment</i>
                  <input onChange={this.handleChange} value={this.state.insurance} id="insurance" type="number" className="validate" />
                  <label htmlFor="insurance">insurance Number</label>
                </div>
              </div>

              <div className="col s12">
                <div className="input-field col s9">
                  <i className="material-icons prefix">email</i>
                  <input onChange={this.handleChange} value={this.state.email} id="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="col s12">
                <div className="input-field col s9">
                  <i className="material-icons prefix">location_on</i>
                  <input onChange={this.handleChange} value={this.state.location} id="location" type="text" className="validate" />
                  <label htmlFor="location">location</label>
                </div>
              </div>

              <div className="col s12">
                <div className="input-field col s1">
                  <i className="material-icons prefix">people</i>
                </div>
                <div className="input-field col s1">
                  <label>
                    <input onChange={this.handleOptionChange} value="Male" name="gender" type="radio" checked={this.state.selectedOption=='Male' } />
                    <span>Male</span>
                  </label>
                </div>
                <div className="input-field col s2">
                  <label>
                    <input onChange={this.handleOptionChange} value="FeMale" name="gender" type="radio" checked={this.state.selectedOption=='FeMale' }/>
                    <span>FeMale</span>
                  </label>
                </div>
                <div className="input-field col s2"></div>
                <div className="input-field col s2">
                  <label>
                    <input onChange={()=>{this.setState({checked:!this.state.checked}) }} type="checkbox" />
                    <span>Married</span>
                  </label>

                </div>
              </div>

              <div className="col s12">
                <div className="input-field col s12">
                  <br /><br /><br /><br /><br />
                  <Button className="CreatePatientSubmit" color="secondary" size="lg" block>Register</Button>
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