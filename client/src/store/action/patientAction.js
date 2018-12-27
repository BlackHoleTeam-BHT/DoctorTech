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
        dispatch({ type: 'CREATE_PATIENT', data: data })
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