import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, FormGroup, Label, Input, Button } from 'reactstrap';
import '../style/SignUp.css'
import { signUp } from '../../store/action/authActions';
class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      specialist: "",
      phoneNum: "",
      email: "",
      password: "",
      clinicName: "",
      clinicNum: "",
      bio: "",
      location: ""
    }
  }
  // function to get data from form
  takeValue = (e) =>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  // funcation to submit data to server and signup
  submitValue = (e) => {
    e.preventDefault()
    // call sign up function from props that was maped from redux
    this.props.signUp(this.state)
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        <Container>
          <Row>
            <Col md="6" sm="12" id="Right"></Col>
            <Col md="6" sm="12">
              <div id="signUpCss">
                <h4 className="text-center">Sign Up </h4>
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label for="text" >First Name</Label>
                      <Input type="text" name="firstName" id="firstName" placeholder="your first name" value={this.state.value} onChange={this.takeValue} />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label for="text" >Last Name</Label>
                      <Input type="text" name="lastName" id="lastName" placeholder="your last name" value={this.state.value} onChange={this.takeValue} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label for="text" >Specialist</Label>
                      <Input type="text" name="specialist" id="specialist" placeholder="your specialist" value={this.state.value} onChange={this.takeValue} />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label for="text" >Phone Number</Label>
                      <Input type="number" name="phoneNum" id="phoneNum" placeholder="your phone num" value={this.state.value} onChange={this.takeValue} />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="input your Email" value={this.state.value} onChange={this.takeValue} />
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="input your password" value={this.state.value} onChange={this.takeValue} />
                </FormGroup>
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label for="text" >ClinicName</Label>
                      <Input type="text" name="clinicName" id="clinicName" placeholder="your clinic name" value={this.state.value} onChange={this.takeValue} />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label for="text" >Clinic Number</Label>
                      <Input type="number" name="clinicNum" id="clinicNum" placeholder="your clinic num" value={this.state.value} onChange={this.takeValue} />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="Password">BIO</Label>
                  <Input type="text" name="bio" id="bio" placeholder="input your BIO" value={this.state.value} onChange={this.takeValue} />
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Location</Label>
                  <Input type="location" name="location" id="location" placeholder="input your location" value={this.state.value} onChange={this.takeValue} />
                </FormGroup>
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Button color="primary" id="btn"  onClick={this.submitValue}>Sign up</Button>
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Button color="primary" id="btn">Sign in</Button>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

// map dispatch (actions) from reducer to component props
const mapDipatchToProps = (dispatch) => {
   return {
     signUp: (user) => dispatch(signUp(user))
   }
}
 // map state from reducer to component props
const mapStateToProps = (state) => {
    return {
      user: state
    }
}

// use connect to pass mapDispatchToprops to reducer
export default connect(mapStateToProps, mapDipatchToProps)(Signup)