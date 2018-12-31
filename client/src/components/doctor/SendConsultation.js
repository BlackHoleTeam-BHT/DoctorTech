import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import {connect} from 'react-redux';
import {openSendConsult, sendConsultation} from '../../store/action/doctorActions';

class SendConsultation extends React.Component {
   
  constructor(props) {
    super(props);
    this.state= {
      subject: '',
      description: '',
    }
  }

  // function to get the data from the form  
  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // func to close and open the model 
  toggle() {
    console.log(this.props)
     this.props.openSendConsult(!this.props.isOpen, this.props.targetDoctor)
  }

  handleOnSubmit() {
    // confige the message to send it to server
    const  message = this.state;
    message.doctorId = this.props.user.id;
    message.targetDoctorId= this.props.targetDoctor.id;
    console.log(message);
    this.props.sendConsultation(message);
    this.toggle();
    this.setState({
      subject: '',
      description: '',
    })
  }

  render() {
   
    return (
      <div >
        <Modal isOpen={this.props.isOpen} 
          toggle={this.toggle.bind(this)} 
          className={this.props.className}
          style ={{marginTop: 100}}
        >
          <ModalHeader onClick={this.toggle.bind(this)}>Send Consultation</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label htmlFor="from">From </Label>
                  <Input
                  type="text"
                  name="from"
                  id="from"
                  readOnly="true"
                  value={"Dr. " +this.props.user.firstName + ' ' + this.props.user.lastName }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="To">To </Label>
                  <Input
                  type="text"
                  name="targetDoctor"
                  id="targetDoctor"
                  readOnly="true"
                  value={"Dr. " +this.props.targetDoctor.firstName + ' ' + this.props.targetDoctor.lastName }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="Subject">Subject </Label>
                  <Input
                  type="text"
                  name="subject"
                  id="subject"
                  value={this.state.subject}
                  onChange= {this.handleOnChange.bind(this)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description </Label>
                  <Input
                  type="textarea"
                  name="description"
                  id="description"
                  value ={this.state.description}
                  onChange= {this.handleOnChange.bind(this)}

                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleOnSubmit.bind(this)}>Send</Button>{' '}
            <Button color="secondary" onClick={this.toggle.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isOpen: state.doctor.isSendConsultModelOpen,
    targetDoctor: state.doctor.targetDoctor
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    // to controll the model open and close
    openSendConsult: (isOpen, targetDoctor) => dispatch(openSendConsult(isOpen, targetDoctor)),
    sendConsultation: (data) => dispatch(sendConsultation(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendConsultation);