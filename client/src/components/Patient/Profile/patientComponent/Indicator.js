import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Progress } from 'reactstrap';
import { connect } from 'react-redux'
import { Health } from '../../../../store/action/diseaseActions'



class Indicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.toggle = this.toggle.bind(this);
        this.props.Health(this.props.patient.PhysicalExamination[0])
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.patient.CaseId !== prevProps.patient.CaseId) {
            this.props.Health(this.props.patient.PhysicalExamination[0])
        }
    }

    render() {
        console.log('indecator', this.props.disease)
        return (
            <div>
                <Button style={{ width: '83%', marginTop: '25px' }} color="secondary" onClick={this.toggle}>Health <i class="fas fa-brain"></i></Button>
{    this.props.disease.Health &&  <Modal size="lg" centered isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Health Indicator</ModalHeader>
                    <ModalBody>
                        <div className="text-center"><b>Over-Weight</b></div>
                        <Progress color="" animated value={this.props.disease.Health.OverWight } max="100" >{this.props.disease.Health.OverWight }-Kg</Progress>
                        <div className="text-center"><b>Calories</b></div>
                        <Progress color="" animated value={this.props.disease.Health.calories } max="672627" >{this.props.disease.Health.calories }-Calories</Progress>
                        <div className="text-center"><b>Distance</b></div>
                        <Progress color="" animated value={this.props.disease.Health.distance } max="5000" >{this.props.disease.Health.distance }-km</Progress>
                        <br /><br /><br />
                        <div className="text-center"><b>Weight-Details</b></div><br />

                         <Progress multi>
                            <Progress bar value="25" max={100}><i>Ideal-Weight : {(this.props.disease.Health.MaxWight + this.props.disease.Health.MinWight) / 2} </i></Progress>
                            <Progress bar color="success" value="25" max={100}><i>Max-Weight : {this.props.disease.Health.MaxWight}</i></Progress>
                            <Progress bar color="warning" value="25" max={100}><i>Min-Weight : {this.props.disease.Health.MinWight}</i></Progress>
                            <Progress bar color="danger" value="25" max={100}><i>Current-Weight : {this.props.patient.PhysicalExamination[0].weight}</i></Progress>
                        </Progress>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>}
            </div>
        );
    }
}

//Note:add the redux state to the props
const mapStateToProps = (state) => {
    return {
        patient: state.patient,
        disease: state.disease,
        patientProfile: state.patient.PatientProfile,
        login: state.auth.login

    }
}


// Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
    return {
        Health: (data) => dispatch(Health(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Indicator)