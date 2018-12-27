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
  ModalFooter,TextArea
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
    }
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
        <Button color="danger" onClick={this.toggle}>Click</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size={"lg"}>
          <ModalHeader toggle={this.toggle}>Edit your info</ModalHeader>
          <ModalBody>
          <Container>
        <Row>
          <Col sm="12" md="4">
            <img src={img} id="img" />
          </Col>
          <Col sm="12" md="8" style={{ marginTop: 20 }}>
            <Label for="firstName">First Name:</Label>
            <Input type="text" id="firstName" />
            <Label for="lastName">Last Name:</Label>
            <Input type="text" id="firstName" />
            <Label for="bDate" id="birthDate">Birth Date</Label>
            <Input type="date" name="bDate" max="1900-1-01" id="bDate"></Input>
            <Label for="nationality">Nationality</Label>
            <Input type = "text" id="nationality"></Input>
            <Label for="specialty">Specialty</Label>
            <Label for = "bio" >
Bio
            </Label>
            <Input required type='textarea' maxLength='500' name='bio' id='bio' rows={4} aria-multiline='true'/>
          </Col>
        </Row>
      </Container>  
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Update</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      
    );
  }
}

export default DrProfile;



              {/* <Container>
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
      
      </Container> */}