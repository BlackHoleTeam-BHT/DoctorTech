import React from "react";
import $ from "jquery";
import { connect } from 'react-redux';
import {signIn} from '../../store/action/authActions';
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
  // this function to get datan from
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  // this function to login 
  handleSubmit = e => {
    e.preventDefault();
    let userSignInDetails = {
      email: this.state.email,
      password: this.state.password
    }
    // call sign in function from props that was maped from redux dispatch
    this.props.signIn(userSignInDetails)
  };

  render() {
    console.log(this.props)
    // to check if the user make sign up successfully
    if (this.props.user !== null) {
      this.props.history.push('/dashboard/' + this.props.user.id);
    }
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

// map dispatch (actions) from reducer to component props
const mapDipatchToProps = (dispatch) => {
  return {
    signIn: (user) => dispatch(signIn(user))
  }
}
// map state from reducer to component props
const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(SignIn);
