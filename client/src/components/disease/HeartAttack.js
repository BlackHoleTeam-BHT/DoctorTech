import React, { Component } from "react";
import { connect } from "react-redux";
import { predictHeartAttack } from "../../store/action/diseaseActions";
import { Container, Label, Input, Button, Form } from "reactstrap";

class HeartAttack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Age: "",
      Sex: "",
      Cpt: "",
      Chol: "",
      Restecg: "",
      Fbs: "",
      Trestbps: "",
      Thalach: "",
      Exang: "",
      Oldpeak: "",
      Slope: "",
      Ca: "",
      Thal: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.predictHeartAttack(this.state);
  };

  render() {
    return (
      <div>
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="text-center">
                  <div className="card-header">Heart Attack Predictor</div>
                </div>
                <div className="card-body">
                  <Form>
                    <div className="form-group row">
                      <Label
                        for="Age"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Age (year)
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Age"
                          className="form-control"
                          name="Age"
                          required
                          onChange={this.handleChange}
                          value={this.state.Age}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Gender"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Gender
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="select"
                          id="Gender"
                          className="form-control"
                          name="Gender"
                          required
                          onChange={this.handleChange}
                          value={this.state.Gender}
                        >
                          <option>--select--</option>
                          <option>Male</option>
                          <option>Female</option>
                        </Input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Gender"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Chest Pain type
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="select"
                          id="Cpt"
                          className="form-control"
                          name="Cpt"
                          required
                          onChange={this.handleChange}
                          value={this.state.Cpt}
                        >
                          <option>--select--</option>
                          <option>Typical Angina</option>
                          <option>Atypical Angina</option>
                          <option>Non-anginal Pain</option>
                          <option>Asymptomatic</option>
                        </Input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Chol"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Serum Cholestoral (mg/dL)
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Chol"
                          className="form-control"
                          name="Chol"
                          required
                          onChange={this.handleChange}
                          value={this.state.Chol}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Trestbps"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Resting Blood Pressure (mm/Hg)
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Trestbps"
                          className="form-control"
                          name="Trestbps"
                          required
                          onChange={this.handleChange}
                          value={this.state.Trestbps}
                        />
                      </div>
                    </div>
      
                    <div className="form-group row">
                      <Label
                        for="Thalach"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Maximum Heart Rate Achieved
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Thalach"
                          className="form-control"
                          name="Thalach"
                          required
                          onChange={this.handleChange}
                          value={this.state.Thalach}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Fbs"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Fasting Blood Pressure
                      </Label>
                      <div className="form-group row">
                      <Label
                        for="Restecg"
                        className="col-md-4 col-form-label text-md-right"
                      >
                      Resting Electrocardiographic
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="select"
                          id="Restecg"
                          className="form-control"
                          name="Restecg"
                          required
                          onChange={this.handleChange}
                          value={this.state.Restecg}
                        >
                          <option>--select--</option>
                          <option>Normal</option>
                          <option>value 1</option>
                          <option>value 2</option>
                        </Input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Ca"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Major Vessels
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Ca"
                          className="form-control"
                          name="Ca"
                          required
                          onChange={this.handleChange}
                          value={this.state.Ca}
                        />
                      </div>
                    </div>
                      <div className="col-md-6">
                        <Input
                          type="select"
                          id="Fbs"
                          className="form-control"
                          name="Fbs"
                          required
                          onChange={this.handleChange}
                          value={this.state.Fbs}
                        >
                          <option>--select--</option>
                          <option>Less than 120 mg/dl</option>
                          <option>Greater than 120 mg/dl</option>
                        </Input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Exang"
                        className="col-md-4 col-form-label text-md-right"
                      >
                      Exercise Induced Angina
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="select"
                          id="Exang"
                          className="form-control"
                          name="Exang"
                          required
                          onChange={this.handleChange}
                          value={this.state.Exang}
                        >
                          <option>--select--</option>
                          <option>Yes</option>
                          <option>No</option>
                        </Input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Oldpeak"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        OldPeak
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Oldpeak"
                          className="form-control"
                          name="Oldpeak"
                          required
                          value={this.state.Oldpeak}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Slope"
                        className="col-md-4 col-form-label text-md-right"
                      >
                      Slope
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="select"
                          id="Slope"
                          className="form-control"
                          name="Slope"
                          required
                          onChange={this.handleChange}
                          value={this.state.Slope}
                        >
                          <option>--select--</option>
                          <option>Upsloping</option>
                          <option>Flat</option>
                          <option>Downsloping</option>
                        </Input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Ca"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Major Vessels
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Ca"
                          className="form-control"
                          name="Ca"
                          required
                          onChange={this.handleChange}
                          value={this.state.Ca}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Thal"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Thalium Heart Scan
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Thal"
                          className="form-control"
                          name="Thal"
                          required
                          onChange={this.handleChange}
                          value={this.state.Thal}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 offset-md-4">
                      <Button
                        type="submit"
                        color="primary"
                        onClick={this.handleSubmit}
                      >
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
    );
  }
}

// map state from redux to props
const mapStateToProps = state => {
  return {
    diabetes: state.disease.diabetes
  };
};

// map the dispatch (actions) to props
const mapDispatchToProps = dispatch => {
  return {
    predictHeartAttack: data => dispatch(predictHeartAttack(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeartAttack);
