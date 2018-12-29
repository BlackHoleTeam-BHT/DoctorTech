import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TextArea
} from "reactstrap";
import "../style/doctorProfile.css";
import img from "../style/drSimson.jpg";

class DrProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      specialist: "",
      phoneNumber: "",
      nationality: "",
      location: "",
      bio: "",
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
       
      </div>
    );
  }
}

export default DrProfile;

{
  /* <Container>
        <Row>
          <Col sm="12" md="4">
            <img src={img} id="img" />
          </Col>
          <Col sm="12" md="8" style={{ marginTop: 20 }}>
            <Label for="firstName">First Name:</Label>
            <Input type="text" id="firstName" />
            <Label for="lastName">Last Name:</Label>
            <Input type="text" id="firstName" />
          </Col>
        </Row>
      
      </Container> */
}
