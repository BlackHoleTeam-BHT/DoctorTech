import React from "react";
import $ from "jquery";
import "../style/SignIn.css";
import {
  Button,
  Col,
  Row,
  Container,
  Label,
  FormGroup,
  Input
} from "reactstrap";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let userSignInDetails = {
      email: this.state.email,
      password: this.state.password
    }

    $.ajax({
      type: "POST",
      url: "/logIn",  
      data: userSignInDetails,
     
      success: data => {
        alert("Welcome");
      },
      error: err => {
        console.log("err", err);
      }

    });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="6" sm="12" id="Right" />
            <Col md="6" sm="12">
              <div id="signinCss">
                <h3>Hey there, welcome back.</h3>
                <p>Enter your sign in details below:</p>
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                  />
                </FormGroup>
                <FormGroup>
                  <Button
                    color="primary"
                    id="btn"
                    onClick={this.handleSubmit.bind(this)}
                  >
                    Sign In
                  </Button>
                </FormGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SignIn;
