import React from 'react';
import { Container } from 'reactstrap'
import DoctorListEntry from './DoctorListEntry';
import {CircularProgress} from '@material-ui/core';
import { connect } from 'react-redux';
import {startProgressBar} from '../../store/action/doctorActions'
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

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    isSearchResultReceivd: state.doctor.isSearchResultReceivd
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    startProgressBar: (isOpen) => dispatch(startProgressBar(isOpen))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DoctorList);
