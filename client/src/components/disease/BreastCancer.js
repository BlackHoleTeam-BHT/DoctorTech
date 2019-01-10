import React, { Component } from "react";
import { connect } from "react-redux";
import { predictBreastCancer } from '../../store/action/diseaseActions';
import {
  Container,
  Label,
  Input,
  Button,
  Form
} from "reactstrap";


class BreastCancer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Age: "",
      BMI: "",
      Glucose: "",
      Insulin: "",
      HOMA: "",
      Leptin: "",
      Adiponectin: "",
      Resistin: "",
      MCP1: ""
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
    this.props.predictBreastCancer(this.state)
  }

  render() {
    return (
      <div>
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="text-center">
                  <div className="card-header">BreastCancer Predictor</div>
                </div>
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
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
                        for="BMI"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        BMI (kg/m2) 
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="BMI"
                          className="form-control"
                          name="BMI"
                          required
                          onChange={this.handleChange}
                          value={this.state.BMI}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Glucose"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Glucose (mg/dL) 
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Glucose"
                          className="form-control"
                          name="Glucose"
                          required
                          onChange={this.handleChange}
                          value={this.state.Glucose}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Insulin"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Insulin (µU/mL) 
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Insulin"
                          className="form-control"
                          name="Insulin"
                          required
                          onChange={this.handleChange}
                          value={this.state.Insulin}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="HOMA"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        HOMA 
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="HOMA"
                          className="form-control"
                          name="HOMA"
                          required
                          onChange={this.handleChange}
                          value={this.state.HOMA}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Leptin"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Leptin (ng/mL)
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Leptin"
                          name="Leptin"
                          className="form-control"
                          required
                          onChange={this.handleChange}
                          value={this.state.Leptin}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Adiponectin"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Adiponectin (µg/mL) 
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Adiponectin"
                          className="form-control"
                          name="Adiponectin"
                          required
                          value={this.state.Adiponectin}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="Resistin"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Resistin (ng/mL)
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="Resistin"
                          className="form-control"
                          name="Resistin"
                          required
                          onChange={this.handleChange}
                          value={this.state.Resistin}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <Label
                        for="MCP1"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        MCP.1 (pg/dL)
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="MCP1"
                          className="form-control"
                          name="MCP1"
                          required
                          onChange={this.handleChange}
                          value={this.state.MCP1}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 offset-md-4">
                      <Button type="submit" color="primary" >
                        Predict
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

// map state from redux to props
const mapStateToProps = (state) => {
  return {
    diabetes: state.disease.diabetes,
  };
};

// map the dispatch (actions) to props
const mapDispatchToProps = (dispatch) => {
  return {
    predictBreastCancer: (data) => dispatch(predictBreastCancer(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreastCancer)
