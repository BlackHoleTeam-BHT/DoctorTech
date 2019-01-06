import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Progress } from 'reactstrap';



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
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}><i  class="fas fa-brain"></i></Button>
        <Modal size="lg"  isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Health Indicator</ModalHeader>
          <ModalBody>
          <div className="text-center"><b>Over-Weight</b></div>
            <Progress color="" value={this.state.OverWeight}  max="100" >{this.state.OverWeight}-Kg</Progress>
            <div className="text-center"><b>Calories</b></div>
            <Progress color="" value={this.state.Calories}  max="772627" >{this.state.Calories}-Calories</Progress>
            <div className="text-center"><b>Distance</b></div>
            <Progress color="" value={this.state.distance}  max="1000" >{this.state.distance}-km</Progress>
            <br/><br/><br/>
            <div className="text-center"><b>Weight-Details</b></div><br/>

      <Progress multi>
        <Progress bar value="25" max={100}>Ideal-Weight : 75 </Progress>
        <Progress bar color="success" value="25" max={100}>Max-Weight : 80</Progress>
        <Progress bar color="warning" value="25" max={100}>Min-Weight : 70</Progress>
        <Progress bar color="danger" value="25" max={100}>Current-Weight : 100 </Progress>
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



export default Indicator