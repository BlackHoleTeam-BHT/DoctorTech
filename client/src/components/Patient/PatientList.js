import React from 'react';
import {
    Paper,
} from '@material-ui/core';
import { Container } from 'reactstrap'
import PatientListEntry from './PatientListEntry';
import { connect } from 'react-redux';
import { getPatients } from '../../store/action/patientAction';

class PatientList extends React.Component {
    constructor(props) {
        super(props);
        // call the function in redux to get patients
        this.props.getPatients(this.props.user.id)
    }

    render() {
        console.log(this.props)
        const patients = this.props.patients;
        return (
            <Container>
               {
                 patients && patients.map((elem => 
                    <PatientListEntry patient ={elem} />  
                  ))
               }
            </Container>
        )
    }
}

//Note:add the redux state to the props
const mapStateToProps = (state) => {
    return {
        patients: state.patient.patients,
        user: state.auth.user
    }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
    return {
        getPatients: (doctorId) => dispatch(getPatients(doctorId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);