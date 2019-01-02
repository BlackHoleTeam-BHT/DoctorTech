import React from 'react';
import { Container } from 'reactstrap'
import DoctorListEntry from './DoctorListEntry';

class DoctorList extends React.Component {

  render() {
    console.log(this.props)
    let doctors = this.props.doctors;
    return (
      <Container style={{ position: 'relative',overflow: 'auto', maxHeight: 700}}>
        {/* to check if  there are doctor or not*/}
        {doctors.length > 0 ? (
          
          doctors && doctors.map((elem =>
            <DoctorListEntry key={elem.id} doctor={elem} />
          ))

        ) : (
            <div className="text-center">
              <h4>No Doctors found until now</h4>
            </div>
          )
        }
      </Container>
    )
  }
}


export default DoctorList;