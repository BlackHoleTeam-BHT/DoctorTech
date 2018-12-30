import React from 'react';
import { Container } from 'reactstrap'
import DoctorListEntry from './DoctorListEntry';

class DoctorList extends React.Component {

  render() {
    console.log(this.props)
    
    return (
      <Container>
        <DoctorListEntry />
        <DoctorListEntry />
        <DoctorListEntry />
        <DoctorListEntry />
        <DoctorListEntry />
      </Container>
    )
  }
}


export default DoctorList;