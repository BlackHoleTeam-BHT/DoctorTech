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
      
        <Container>
          <Row>
            <Col md="3">
              <img src={img} />
            </Col>
            <Col md="7">
              <div>
                <Label>Fullname: Dana</Label>
              </div>
              <div>
                <Label>Phonenumber: 7677</Label>
              </div>
              <div>
                <Label>Birthdate: 22/2/1234</Label>
              </div>
              <div>
                <Label>Nationality: Jordanian</Label>
              </div>
              <div>
                <Label>Gender: female</Label>
              </div>
              <div>
                <Label>Location: Amman</Label>
              </div>
              <div>
                <Label>Specialist: dentistry</Label>
              </div>
              <div>
                <Label>Clinic name: dana's clinic</Label>
              </div>
              <div>
                <Label>Clinic number: 766748776</Label>
              </div>
              <div>
                <Label style={{marginRight:10}}>Rate: 5</Label> 
                <label>(543)</label>
              </div>
            </Col>
            <Col md="2">
            <div className="text-right"><Button color="primary">Edit</Button></div>
              
            </Col>
          </Row>
         
          <Row>
            <Card style={{padding:20}}>
            <div>
            <label>Bio:</label>
          </div>
          <div className= "text-center">
            <p>
              dghdghghdghgjdgjhdjhjhdkjjdjhubud uyui f fui eehe fvf ewkbhew  lvkg gffgwfbdjflk  fkfjjgfjgjfg  fjsgfhhng fukflgugjgjfg  gfjgwfjjg fweg kf jegfjgegf w
            </p>
          </div>
            </Card>
         
          </Row>

          <Row>

          </Row>
        </Container>
    
    );
  }
}

export default DrProfile;
