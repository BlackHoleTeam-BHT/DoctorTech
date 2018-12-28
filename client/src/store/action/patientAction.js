import $ from 'jquery'

// Note: Action function for dispatch
export const createPatient = (data) => {
  console.log(data)
  return (dispatch, getState) => {
    //sync
    $.ajax({
      type: "POST",
      url: '/create-patient',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function (data) {
        dispatch({ type: 'CREATE_PATIENT', data: data.patientId })
      },
      error: (err) => {
        dispatch({ type: 'CREATE_PATIENT_ERROR', error: err })
      }
    });
  }
}

// this action in redux to get patient info for each doctor
export const getPatients = (doctorId) => {
  return (dispatch, getState) => {
    //sync
    $.ajax({
      type: "POST",
      url: '/patients',
      data: JSON.stringify({ doctorId: doctorId }),
      contentType: 'application/json',
      success: function (res) {
        dispatch({ type: 'GET_PATIENTS', data: res.data })
      },
      error: (err) => {
        dispatch({ type: 'GET_PATIENTS_ERROR', error: err })
      }
    });
  }
    }



// Note: Get the patient information based on ID
export const GetUserInformation=(id)=>{
  console.log('action','recived')
  
  return(dispatch, getState)=>{

    $.ajax({
      type: "POST",
      url: '/patientInformation',
      contentType:'application/json',
      data:JSON.stringify({id:id}),
      success: function (data) {
      console.log()
        dispatch({type:'GetUserInformation',data:data})
       
      },
      error: (err) => {
        console.log('server err',err)
      }
  
    });
  }

}

// Note: Get the patient Casses based on ID
export const GetPatientCassis=(id)=>{
  console.log('action Casses',id)

  
  return(dispatch, getState)=>{

    $.ajax({
      type: "POST",
      url: '/patientInCassis',
      contentType:'application/json',
      data:JSON.stringify({id:id}),
      success: function (data) {
        console.log('d',data)
        dispatch({type:'GetPatientCassis',data:data})
      },
      error: (err) => {
        console.log('server err',err)
      }
  
    });



  }

}