import React, { Component } from "react";
import { connect } from "react-redux";
import { predictHeartAttack } from "../../store/action/diseaseActions";
import { Container, Label, Input, Button, Form } from "reactstrap";

class HeartAttack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Age: "",
      Gender: "",
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
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  // submit data
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
                  <div
                    className="card-header"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#d5f3f6",
                      height: 50,
                      fontSize: 25
                    }}
                  >
                    Heart Attack Predictor
                  </div>
                </div>
                <div className="card-body">
                  <Form onSubmit={this.handleSubmit}>
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
                          onChange={this.handleChange}
                          value={this.state.value}
                          required
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
                          onChange={this.handleChange}
                          value={this.state.value}
                          required
                        >
                          <option>--select--</option>
                          <option value = "1">Male</option>
                          <option value = "0">Female</option>
                        </Input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Ca"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Number of Major Vessels

                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Ca"
                          className="form-control"
                          name="Ca"
                          onChange={this.handleChange}
                          value={this.state.value}
                          required
                        />
                        <small id="ca" class="form-text text-muted">
                          number of major vessels (0-3) colored by flourosopy
                        </small>
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Cpt"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Chest Pain Type
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="select"
                          id="Cpt"
                          className="form-control"
                          name="Cpt"
                          onChange={this.handleChange}
                          value={this.state.value}
                          required
                        >
                          <option value = "0">--select--</option>
                          <option value = "1">Typical Angina</option>
                          <option value = "2">Atypical Angina</option>
                          <option value = "3">Non-anginal Pain</option>
                          <option value = "4">Asymptomatic</option>
                        </Input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Chol"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Serum Cholestoral(mg/dL)
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Chol"
                          className="form-control"
                          name="Chol"
                          onChange={this.handleChange}
                          value={this.state.value}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Trestbps"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Resting Blood Pressure(mm/Hg)
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Trestbps"
                          className="form-control"
                          name="Trestbps"
                          onChange={this.handleChange}
                          value={this.state.value}
                          required
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
                          onChange={this.handleChange}
                          value={this.state.value}
                          required
                        />
                      </div>
                    </div>
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
                          onChange={this.handleChange}
                          value={this.state.value}
                          required
                        >
                          <option>--select--</option>
                          <option value = "0">Normal</option>
                          <option value = "1">
                            ST-T wave abnormality(T wave inversions and/or ST
                            elevation or depression of > 0.05 mV)
                          </option>
                          <option value = "2">
                            Probable or definite left ventricular hypertrophy by
                            Estes' criteria
                          </option>
                        </Input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Fbs"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Major Vessels (0-3)
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Ca"
                          className="form-control"
                          name="Ca"
                          required
                          onChange={this.handleChange}
                          value={this.state.value}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Fbs"
                        className="col-md-4 col-form-label text-md-right"
                      >
                          Fasting Blood Sugar
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="select"
                          id="Fbs"
                          className="form-control"
                          name="Fbs"
                          onChange={this.handleChange}
                          value={this.state.value}
                          required
                        >
                          <option>--select--</option>
                          <option value = "0">Less than 120 mg/dl</option>
                          <option value = "1">Greater than 120 mg/dl</option>
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
                          onChange={this.handleChange}
                          value={this.state.value}
                          required
                        >
                          <option>--select--</option>
                          <option value = "1">Yes</option>
                          <option value = "0">No</option>
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
                          value={this.state.value}
                          onChange={this.handleChange}
                          required
                        />
                        <small id="oldp" class="form-text text-muted">
                          ST depression induced by exercise relative to rest
                        </small>
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
                          onChange={this.handleChange}
                          value={this.state.value}
                          required
                        >
                          <option value = "0">--select--</option>
                          <option value = "1">Upsloping</option>
                          <option value = "2">Flat</option>
                          <option value = "3">Downsloping</option>
                        </Input>
                        <small id="slope" class="form-text text-muted">
                          The slope of the peak exercise ST segment
                        </small>
                      </div>
                    </div>

                    <div className="form-group row">
                      <Label
                        for="Thalium"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Thalium Heart Scan
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="select"
                          id="Thalium"
                          className="form-control"
                          name="Thalium"
                          onChange={this.handleChange}
                          value={this.state.value}
                          required
                        >
                          <option value = "0">--select--</option>
                          <option value = "3">Normal(no cold spots)</option>
                          <option value = "6">Fixed defect (cold spots during rest and exercise)</option>
                          <option value = "7">Reversible defect (when cold spots only appear during exercise)</option>
                        </Input>
                      </div>
                    </div>

                    <div className="col-md-6 offset-md-4">
                      <Button type="submit" color="primary">
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
    heartAttack: state.disease.heartAttack
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
