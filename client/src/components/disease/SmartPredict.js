import React from 'react';
import {
  Grid,
  Typography,
  Tab,
  Tabs,
  AppBar,
  Paper
} from '@material-ui/core'

import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux';
import BreastCancer from './BreastCancer';
import Diabetes from './Diabetes.js'

let root = {
  flexGrow: 1,
  justifyContent: 'center',
  margin: 20,
}

class SmartPredict extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    // if the user has not login redirect for home page
    // if (!this.props.login) {
    //   return (
    //     <Redirect to='/' />
    //   )
    // }
    console.log("Breast" + this.props.breastCancer.accuracy)
    return (

      <div style={{ justifyContent: "center", margin: 20 }}>
        <div>
          <Grid container>
            <Grid item md={12} xs={12} sm={12}>

              <Tabs variant="fullWidth"
                style={root}
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                centered
              >
                <Tab label="Breast Cancer Predictor" disableRipple />
                <Tab label="Diabetes Predictor" disableRipple />
                <Tab label="Heart Attack Predictor" disableRipple />
              </Tabs>
            </Grid>
            <Grid item md={8} xs={12} sm={12}>
              {this.state.value === 0 && <BreastCancer />}
              {this.state.value === 1 && <Diabetes />}
              {this.state.value === 2 && <Diabetes />}
            </Grid>
            <Grid item md={3} xs={12} sm={12}>
              <Paper style={{ padding: 20, maxHeight: 350, height: "100%", textAlign: 'center' }}>
                <div>
                  <Typography variant="display1" color="primary">Result :</Typography>
                </div>
                <div style={{ marginTop: 20, marginBottom: 50 }}>
                  <Typography variant="h5" color="primary">
                    {
                      this.state.value === 0 ? this.props.breastCancer.predicate : this.state.value === 1 ?
                        this.props.diabetes.predicate : this.props.breastCancer.predicate
                    }
                  </Typography>
                </div>
                <div>
                  <Typography variant="display1" color="secondary">Accuracy</Typography>
                </div>
                <div style={{ marginTop: 20 }}>
                  <Typography variant="h5" color="secondary">
                    {
                      this.state.value === 0 ? this.props.breastCancer.accuracy : this.state.value === 1 ?
                        this.props.diabetes.accuracy : this.props.breastCancer.accuracy
                    }
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    breastCancer: state.disease.breastCancerPredictions,
    diabetes: state.disease.diabetes
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {

  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(SmartPredict);