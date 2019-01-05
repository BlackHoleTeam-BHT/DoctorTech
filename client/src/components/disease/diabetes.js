import React, { Component } from "react";
import { Container, Row, Col, FormGroup, Label, Input, Button, Alert,Form } from 'reactstrap';

export default class Diabetes extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">Diabetes Predictor</div>
                <div className="card-body">
                  <Form>
									<div className="form-group row">
                      <Label
                        for="diabetes_pedigree"
                        className="col-md-4 col-form-label text-md-right"
                      >
											Diabetes Pedigree Function
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="diabetes_pedigree"
                          className="form-control"
                          name="diabetes_pedigree"
													required
                        />
                      </div>
                    </div>
              
                    <div className="form-group row">
                      <Label
                        for="blood_pressure"
                        className="col-md-4 col-form-label text-md-right"
                      >
											Blood Pressure
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="blood_pressure"
                          className="form-control"
                          name="blood_pressure"
													required
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <Label
                        for="skin_thickness"
                        className="col-md-4 col-form-label text-md-right"
                      >
											Skin Thickness
                      </Label>
                      <div className="col-md-6">
                        <Input
                          type="number"
                          id="skin_thickness"
                          className="form-control"
													name= "skin_thickness"
													required
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
                        />
                      </div>
                    </div>
									
                    <div className="col-md-6 offset-md-4">
                      <Button type="submit" color ="primary">
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
