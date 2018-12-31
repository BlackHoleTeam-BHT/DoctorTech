import React from "react";
import { connect } from 'react-redux';
import {signIn} from '../../store/action/authActions';
import {CheckSession} from '../../store/action/authActions'
import '../style/SignIn.css'
import image from '../style/doctor2.jpg'
import {
  Button,
  Col,
  Row,
  Container,
  Label,
  FormGroup,
  Input,
  Alert
} from "reactstrap";


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
    };
    this.props.CheckSession()
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
    console.log('login',this.props)
    // to check if the user make sign up successfully
    if (this.props.user !== null) {
      console.log(this.props.user)
      this.props.history.push('/dashboard/' + this.props.user.id);
    }
    return (
      <div>
        <Container>
          <Row>
            <Col md="6" sm="12" id="Right" ><img src={image} /></Col>
            <Col md="6" sm="12">
              <div id="signinCss">
                <h3>Hey there, welcome back.</h3>
                <p>Enter your sign in details below:</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup >
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
                    type="submit"
                    
                  >
                    Sign In
                  </Button>
                </FormGroup>
                </form>
                <div className="text-center" style ={{marginTop: 20}}>
                  <a href="/signup">Create new account ? Sign up</a>
                </div>
                <div  className="text-center" style ={{marginTop: 20}}>
                  {!this.props.correctLogin &&
                    <Alert color="danger">
                       Your email or password not correct !!!
                    </Alert>
                  }
                </div>
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
    signIn: (user) => dispatch(signIn(user)),
    CheckSession: () => dispatch(CheckSession())
  }
}
// map state from reducer to component props
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    correctLogin: state.auth.correctLogin
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(SignIn);
