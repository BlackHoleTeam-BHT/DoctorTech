import React from "react";
import { connect } from "react-redux";
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
import { openModal } from "../../store/action/doctorActions";
import { updateDoctorInfo } from "../../store/action/authActions";
class EditDrProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      nationality: this.props.user.nationality,
      bDate: this.props.user.birthDate,
      bio: this.props.user.bio,
      specialty: this.props.user.specialist,
      phoneNumber: this.props.user.phoneNumber,
      gender: this.props.user.gender,
      location: this.props.user.location,
      clinicName: this.props.user.clinicName,
      clinicNumber: this.props.user.clinicNumber
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.openModal(!this.props.isOpen);
  }

  handleOnChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  }

  //  handle on click to send the data to server by using FUNCTION FROM authAction
  handlOnClick() {
    // function to update the data for dr so this function come from redux
    // by map this function to props

    this.props.updateDoctorInfo(this.state);
    this.toggle();
  }

  render() {
    return (
      <Container>
        <Modal
          style={{ marginTop: 100 }}
          isOpen={this.props.isOpen}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Edit your profile</ModalHeader>
          <ModalBody>
            <Container>
              <Row>
                <Col sm="12" md="6">
                  <Label for="firstName">First Name:</Label>
                  <Input
                    type="text"
                    id="firstName"
                    value={this.state.firstName}
                    onChange={this.handleOnChange.bind(this)}
                  />
                </Col>
                <Col sm="12" md="6">
                  <Label for="lastName">Last Name:</Label>
                  <Input
                    type="text"
                    id="lastName"
                    value={this.state.lastName}
                    onChange={this.handleOnChange.bind(this)}
                  />
                </Col>
              </Row>

              <Row style={{ marginTop: 25 }}>
                <Col>
                  <Label for="bDate" id="birthDate">
                    Birth Date
                  </Label>
                  <Input
                    type="date"
                    name="bDate"
                    max="1900-1-01"
                    id="bDate"
                    value={this.state.bDate}
                    onChange={this.handleOnChange.bind(this)}
                  />
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="gender">Gender</Label>
                    <Input
                      type="select"
                      name="gender"
                      id="gender"
                      value={this.state.gender}
                      onChange={this.handleOnChange.bind(this)}
                    >
                      <option>--select--</option>
                      <option>Male</option>
                      <option>Female</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label for="nationality">Nationality</Label>
                  <Input
                    type="text"
                    id="nationality"
                    value={this.state.nationality}
                    onChange={this.handleOnChange.bind(this)}
                  />
                </Col>
                <Col>
                  <Label for="phoneNumber">Phone Number</Label>
                  <Input
                    type="text"
                    id="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.handleOnChange.bind(this)}
                  />
                </Col>
              </Row>

              <Row style={{ marginTop: 25 }}>
                <Col>
                  <Label for="clinicName">Clinic Name</Label>
                  <Input
                    type="text"
                    id="clinicName"
                    value={this.state.clinicName}
                    onChange={this.handleOnChange.bind(this)}
                  />
                </Col>
                <Col>
                  <Label for="clinicNumber">Clinic Number</Label>
                  <Input
                    type="text"
                    id="clinicNumber"
                    value={this.state.clinicNumber}
                    onChange={this.handleOnChange.bind(this)}
                  />
                </Col>
              </Row>
              <Col>
                <Row style={{ marginTop: 25 }}>
                  <Label for="clinicLocation">Clinic Location</Label>
                  <Input
                    type="text"
                    id="clinicLocation"
                    value={this.state.location}
                    onChange={this.handleOnChange.bind(this)}
                  />
                </Row>
              </Col>
              <Col>
                <Row style={{ marginTop: 25 }}>
                  <Label for="specialty">Specialty</Label>
                  <Input
                    type="text"
                    id="specialty"
                    value={this.state.specialty}
                    onChange={this.handleOnChange.bind(this)}
                  />
                </Row>
              </Col>
              <Col>
                <Row style={{ marginTop: 25 }}>
                  <Label for="bio">Bio</Label>
                  <Input
                    required
                    type="textarea"
                    maxLength="500"
                    name="bio"
                    id="bio"
                    rows={4}
                    aria-multiline="true"
                    value={this.state.bio}
                    onChange={this.handleOnChange.bind(this)}
                  />
                </Row>
              </Col>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handlOnClick.bind(this)}>
              Save
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

// map all state from redux to props
const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isOpen: state.doctor.isOpen
  };
};

// map all dispatch action from redux to props
const mapDispatchToProps = dispatch => {
  return {
    openModal: isOpen => dispatch(openModal(isOpen)),
    updateDoctorInfo: data => dispatch(updateDoctorInfo(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditDrProfile);
