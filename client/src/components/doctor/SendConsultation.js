import React from 'raect';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import {connect} from 'react-redux';
import {openSendConsult} from '../../store/action/doctorActions';

class SendConsultation extends React.Component {
  
  toggle() {
     this.props.openSendConsult(!this.props.isOpen)
  }
  render() {
   
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Send Consultation</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label htmlFor="from">From </Label>
                  <Input
                  type="text"
                  name="from"
                  id="from"
                  value={this.state.from}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="To">To </Label>
                  <Input
                  type="text"
                  name="targetDoctor"
                  id="targetDoctor"
                  value={this.state.targetDoctor}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="from">Message </Label>
                  <Input
                  type="textarea"
                  name="message"
                  id="mesage"
                  value={this.state.from}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Send</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    doctors: state.doctor.doctors,
    isOpen: state.doctor.isSendConsultModelOpen
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    openSendConsult: (isOpen) => dispatch(openSendConsult(isOpen))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendConsultation);