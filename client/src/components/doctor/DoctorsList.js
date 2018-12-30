import React from 'react';
import { Container } from 'reactstrap'
import DoctorListEntry from './DoctorListEntry';

class DoctorList extends React.Component {

  render() {
    let doctores = this.props.doctores;
    console.log(this.props)
    return (
      <Container>
        {/* to check if  there are doctor or not*/}
        {doctores.length > 0 ? (
          
          doctores && doctores.map((elem =>
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