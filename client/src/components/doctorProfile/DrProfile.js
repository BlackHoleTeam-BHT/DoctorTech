import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
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
import { connect } from "react-redux";
import {openModal} from "../../store/action/doctorActions";
import EditDrProfile from "./EditDrProfile";

class DrProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

  handleOpenModal() {
    this.props.openModal(!this.props.isOpen);
  }

  render() {
    console.log(this.props, "djhduhdgdjjduwg");
    return (
      <Container>
       
        <Row>
          <EditDrProfile />
          <Col md="3">
            <img src={img} />
          </Col>
          <Col md="7">
            <div>
              <Label>
                {"Fullname: " +
                  this.props.user.firstName +
                  " " +
                  this.props.user.lastName}
              </Label>
            </div>
            <div>
              <Label>Phonenumber: {this.props.user.phoneNumber}</Label>
            </div>
            <div>
              <Label>Birthdate: {this.props.user.birthDate}</Label>
            </div>
            <div>
              <Label>Nationality: {this.props.user.nationality}</Label>
            </div>
            <div>
              <Label>Gender: {this.props.user.gender}</Label>
            </div>
            <div>
              <Label>Location: {this.props.user.location}</Label>
            </div>
            <div>
              <Label>specialty: {this.props.user.specialist}</Label>
            </div>
            <div>
              <Label>Clinic name: {this.props.user.clinicName}</Label>
            </div>
            <div>
              <Label>Clinic number: {this.props.user.clinicNumber}</Label>
            </div>
            <div>
              <Label style={{ marginRight: 10 }}>
                Rate: {this.props.user.rateAvg}
              </Label>
              <label>{this.props.user.numRater}</label>
            </div>
          </Col>
          <Col md="2">
            <div className="text-right">
              <Button color="primary" onClick={this.handleOpenModal.bind(this)}>
                Edit
              </Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Card style={{ padding: 20 }}>
            <div>
              <label>Bio:</label>
            </div>
            <div className="text-center">
              <p>{this.props.user.bio}</p>
            </div>
          </Card>
        </Row>

        <Row />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isOpen: state.doctor.isOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: isOpen => dispatch(openModal(isOpen))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrProfile);
