import React, { Component } from "react";
import  { connect }  from "react-redux";
import { diabetes } from '../../store/action/diseaseActions';
import {
  Container,
  Label,
  Input,
  Button,
  Form
} from "reactstrap";


class Diabetes extends Component {
constructor(props){
  super(props)
  this.state = {
    DiabetesPedigreeFunction: "",
    BloodPressure: "",
    SkinThickness: "",
    Pregnancies: "",
    Glucose: "",
    Insulin: "",
    Age: "",
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
                        for="DiabetesPedigreeFunction"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Diabetes Pedigree Function
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="DiabetesPedigreeFunction"
                          className="form-control"
                          name="DiabetesPedigreeFunction"
                          required
                          onChange= {this.handleChange}
                          value = {this.state.value}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="BloodPressure"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Blood Pressure
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="BloodPressure"
                          className="form-control"
                          name="BloodPressure"
                          required
                          onChange = {this.handleChange}
                          value = {this.state.value}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="SkinThickness"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Skin Thickness
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="SkinThickness"
                          className="form-control"
                          name="SkinThickness"
                          required
                          onChange = {this.handleChange}
                          value = {this.state.value}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Pregnancies"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Pregnancies
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Pregnancies"
                          className="form-control"
                          name="Pregnancies"
                          required
                          onChange = {this.handleChange}
                          value = {this.state.value}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Glucose"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Glucose
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Glucose"
                          className="form-control"
                          name="Glucose"
                          required
                          onChange = {this.handleChange}
                          value = {this.state.value}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Insulin"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Insulin
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Insulin"
                          name="Insulin"
                          className="form-control"
                          required
                          onChange = {this.handleChange}
                          value = {this.state.value}

                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Age"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Age
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Age"
                          className="form-control"
                          name="Age"
                          required
                          onChange = {this.handleChange}
                          value = {this.state.value}

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
                          value = {this.state.value}
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