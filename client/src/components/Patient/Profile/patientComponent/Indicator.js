import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Progress } from 'reactstrap';
import { connect } from 'react-redux'
import {Health} from '../../../../store/action/diseaseActions'



class Indicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      OverWeight:50,
      Calories:278161,
      distance:350,
      max:80,
      min:90
    };

    this.toggle = this.toggle.bind(this);
    this.props.Health(this.props.patient.PhysicalExamination[0])
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
      console.log('indecator',this.props.patient.PhysicalExamination)
    return (
      <div>
        <Button style={{width:'83%',marginTop:'25px'}} color="secondary" onClick={this.toggle}>Health <i  class="fas fa-brain"></i></Button>
        <Modal size="lg"  centered isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Health Indicator</ModalHeader>
          <ModalBody>
          <div className="text-center"><b>Over-Weight</b></div>
            <Progress color="" animated  value={this.state.OverWeight}  max="100" >{this.state.OverWeight}-Kg</Progress>
            <div className="text-center"><b>Calories</b></div>
            <Progress color="" animated  value={this.state.Calories}  max="772627" >{this.state.Calories}-Calories</Progress>
            <div className="text-center"><b>Distance</b></div>
            <Progress color="" animated   value={this.state.distance}  max="1000" >{this.state.distance}-km</Progress>
            <br/><br/><br/>
            <div className="text-center"><b>Weight-Details</b></div><br/>

      <Progress multi>
        <Progress bar  value="25" max={100}><i>Ideal-Weight : 75 </i></Progress>
        <Progress bar color="success" value="25" max={100}><i>Max-Weight : 80</i></Progress>
        <Progress bar color="warning" value="25" max={100}><i>Min-Weight : 70</i></Progress>
        <Progress bar color="danger" value="25" max={100}><i>Current-Weight : 100</i></Progress>
      </Progress>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

//Note:add the redux state to the props
const mapStateToProps = (state) => {
    return {
      patient: state.patient,
      patientProfile: state.patient.PatientProfile,
      login: state.auth.login
  
    }
  }


  // Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
    return {
      Health:(data) => dispatch(Health(data))
    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(Indicator)