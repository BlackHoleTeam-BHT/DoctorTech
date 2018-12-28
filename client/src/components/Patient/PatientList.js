import React from 'react';

import { Container } from 'reactstrap'
import PatientListEntry from './PatientListEntry';

class PatientList extends React.Component {

    render() {
        console.log(this.props)
        const patients = this.props.patients;
        return (
            <Container>
               {
                 patients && patients.map((elem => 
                    <PatientListEntry key={elem.id} patient ={elem}/>  
                  ))
               }
            </Container>
        )
    }
}


export default PatientList ;