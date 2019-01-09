import React, { Component } from "react";
import  { connect }  from "react-redux";
import { diabetes } from '../../store/action/diseaseActions';
import {
  Container,
  Row,
  Col,
  Label,
  Input,
  Button,
  Alert,
  Form
} from "reactstrap";


class Diabetes extends Component {
constructor(props){
  super(props)
  this.state = {

    diabetesPedigree: "",
    bloodPressure: "",
    skinThickness: "",
    pregnancies: "",
    glucose: "",
    insulin: "",
    age: "",
    BMI: ""
  }
  this.handleChange = this.handleChange.bind(this)
}

handleChange = (e) => {
this.setState({
  [e.target.id]: e.target.value
})
}

handleSubmit = (e) => {
  e.preventDefault()
  this.props.diabetes(this.state)
}

  render() {
    return (
      <div>
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="text-center">
                  <div className="card-header">Diabetes Predictor</div>
                </div>
                <div className="card-body">
                  <Form>
                    <div className="form-group row">
                      <Label
                        for="diabetesPedigree"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Diabetes Pedigree Function
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="diabetesPedigree"
                          className="form-control"
													placeholder="diabetes pedigree"
                          name="diabetesPedigree"
                          required
                          onChange= {this.handleChange}
                          value = {this.state.value}
                          
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="bloodPressure"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Blood Pressure
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="bloodPressure"
                          className="form-control"
                          name="bloodPressure"
                          required
                          onChange = {this.handleChange}
                          value = {this.state.value}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="skinThickness"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Skin Thickness
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="skinThickness"
                          className="form-control"
                          name="skinThickness"
                          required
                          onChange = {this.handleChange}
                          value = {this.state.value}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="pregnancies"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Pregnancies
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="pregnancies"
                          className="form-control"
                          name="pregnancies"
                          required
                          onChange = {this.handleChange}
                          value = {this.state.value}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="glucose"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Glucose
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="glucose"
                          className="form-control"
                          name="glucose"
                          required
                          onChange = {this.handleChange}
                          value = {this.state.value}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="insulin"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Insulin
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="insulin"
                          name="insulin"
                          className="form-control"
                          required
                          onChange = {this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="age"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Age
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="age"
                          className="form-control"
                          name="age"
                          required
                          onChange = {this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="BMI"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        BMI
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="BMI"
                          className="form-control"
                          name="BMI"
                          required
                          onChange = {this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 offset-md-4">
                      <Button type="submit" color="primary" onClick={this.handleSubmit}>
                        Predict
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    diabetes: state.disease.diabetes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    diabetes: (data) => dispatch(diabetes(data))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Diabetes)