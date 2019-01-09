import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Label,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  CardTitle,
  CardText,
  Input
} from "reactstrap";

import classnames from "classnames";
import "../style/doctorProfile.css";
import img from "../style/drSimson.jpg";
import { connect } from "react-redux";
import { openModal } from "../../store/action/doctorActions";
import EditDrProfile from "./EditDrProfile";
import {DoctorImage} from '../../store/action/doctorActions'


class DrProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      pic: '',
      id: this.props.user.id
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleOpenModal() {

    this.props.openModal(!this.props.isOpen);
  }

  ImageOnChange(e) {
    this.setState({
      pic: e.target.files[0]
    });
  }

  OnSubmit = () => {
    if(this.state.pic===""){

    }else{
      this.props.DoctorImage(this.state)
    }
    
  }





  render() {
    console.log(this.props)
    return (
      <div className="container">
        <EditDrProfile />
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="card-title mb-4">
                  <div className="d-flex justify-content-start">
                    <div className="image-container">
                      <img
                        alt=""
                        src={( this.props.user.image !=='') ? ('../../../../uploads/' + this.props.user.image) : "http://placehold.it/150x150"}
                        id="imgProfile"
                        style={{ width: "150px", height: "150px" }}
                        className="img-thumbnail"
                      />
                      <div className="middle">
                        <Input
                          type="button"
                          className="btn btn-secondary"
                          id="btnChangePicture"
                          value="Change"
                          onClick={this.OnSubmit}
                        />
                        <Input
                          type="file"
                          style={{ opacity: 0 }}
                          id="profilePicture"
                          name="file"
                          onChange={this.ImageOnChange.bind(this)}
                        />
                      </div>
                    </div>
                    <div className="userData ml-3">
                      <h2 className="d-block" style={{ fontWeight: "bold" }}>
                        {" Dr. " +
                          this.props.user.firstName +
                          " " +
                          this.props.user.lastName}
                      </h2>
                      <h6 className="d-block">{this.props.user.specialist}</h6>
                      <h6 className="d-block">{this.props.user.location}</h6>
                    </div>
                    <div className="ml-auto">
                      <Input
                        type="button"
                        className="btn btn-primary d-none"
                        id="btnDiscard"
                        value="Discard Changes"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20, marginLeft: 2 }}>
          <Nav tabs>
            <NavItem>
              <NavLink id="d"
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Basic Info
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="d"
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Bio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="d"
                className={classnames({ active: this.state.activeTab === "3" })}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                Feedback
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div className="tab-content ml-1" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="basicInfo"
                role="tabpanel"
                aria-labelledby="basicInfo-tab"
              >
                <div className="row" style={{ marginTop: 30 }}>
                  <div className="col-sm-3 col-md-2 col-5">
                    <Label style={{ fontWeight: "bold" }}>Full Name</Label>
                  </div>
                  <div className="col-md-8 col-6">
                    {this.props.user.firstName + " " + this.props.user.lastName}
                  </div>
                </div>
                <hr className="style14" />

                <div className="row">
                  <div className="col-sm-3 col-md-2 col-5">
                    <Label style={{ fontWeight: "bold" }}>Birth Date</Label>
                  </div>
                  <div className="col-md-8 col-6">
                    {this.props.user.birthDate}
                  </div>
                </div>
                <hr className="style14" />

                <div className="row">
                  <div className="col-sm-3 col-md-2 col-5">
                    <Label style={{ fontWeight: "bold" }}>Gender</Label>
                  </div>
                  <div className="col-md-8 col-6">{this.props.user.gender}</div>
                </div>
                <hr className="style14" />
                <div className="row">
                  <div className="col-sm-3 col-md-2 col-5">
                    <Label style={{ fontWeight: "bold" }}>Nationality</Label>
                  </div>
                  <div className="col-md-8 col-6">
                    {this.props.user.nationality}
                  </div>
                </div>
                <hr className="style14" />
                <div className="row">
                  <div className="col-sm-3 col-md-2 col-5">
                    <Label style={{ fontWeight: "bold" }}>Phone Number</Label>
                  </div>
                  <div className="col-md-8 col-6">
                    {this.props.user.phoneNumber}
                  </div>
                </div>
                <hr className="style14" />
                <div className="row">
                  <div className="col-sm-3 col-md-2 col-5">
                    <Label style={{ fontWeight: "bold" }}>Specialty</Label>
                  </div>
                  <div className="col-md-8 col-6">
                    {this.props.user.specialist}
                  </div>
                </div>
                <hr className="style14" />
                <div className="row">
                  <div className="col-sm-3 col-md-2 col-5">
                    <Label style={{ fontWeight: "bold" }}>Clinic Name</Label>
                  </div>
                  <div className="col-md-8 col-6">
                    {this.props.user.clinicName}
                  </div>
                </div>
                <hr className="style14" />
                <div className="row">
                  <div className="col-sm-3 col-md-2 col-5">
                    <Label style={{ fontWeight: "bold" }}>Clinic Number</Label>
                  </div>
                  <div className="col-md-8 col-6">
                    {this.props.user.clinicNumber}
                  </div>
                </div>
                <hr className="style14" />
                <div className="row">
                  <div className="col-sm-3 col-md-2 col-5">
                    <Label style={{ fontWeight: "bold" }}>Location</Label>
                  </div>
                  <div className="col-md-8 col-6">
                    {this.props.user.location}
                  </div>
                </div>
                <hr className="style14" />
                <Button color="primary" onClick={this.handleOpenModal.bind(this)}>
                  Edit
              </Button>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="row" style={{ marginTop: 30 }}>
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title mb-4">
                      <div className="d-flex justify-content-start">
                        {this.props.user.bio}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="row" style={{ marginTop: 30 }}>
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title mb-4">
                      <div className="d-flex justify-content-start">
                        {this.props.user.feedBack}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </div>
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
    openModal: isOpen => dispatch(openModal(isOpen)),
    DoctorImage: data => dispatch(DoctorImage(data)),

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrProfile);
