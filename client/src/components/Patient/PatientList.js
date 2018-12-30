import React from 'react';
import { Container } from 'reactstrap'
import PatientListEntry from './PatientListEntry';

class PatientList extends React.Component {

  render() {
    console.log(this.props)
    const patients = this.props.patients;
    return (
      <Container>
       {  patients.length > 0 ? (
          
          patients && patients.map((elem =>
            <PatientListEntry key={elem.id} patient={elem} />
          ))
          
          ):(
          <div className="text-center">
            <h4>No data found</h4>
          </div>
        )
       }
       </Container>
    )
  }
}


export default PatientList;