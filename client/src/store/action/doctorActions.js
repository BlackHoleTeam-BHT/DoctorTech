import $ from 'jquery';


// function to edit the state inside redux to open the modal
export const openModal = (isOpen) => {

  return (dispatch, getState) => {
    dispatch({
      type: "OPEN_MODAL",
      data: isOpen
    })
  }


}

// this action in redux to get all doctor info in the same 
export const getDoctors = () => {
  return (dispatch, getState) => {
    //sync
    $.ajax({
      type: "GET",
      url: '/doctores',
      contentType: 'application/json',
      success: function (res) {
        dispatch({ type: 'GET_DOCTORS', data: res.data })
      },
      error: (err) => {
        console.log("Error during request the date from the server")
      }
    });
  }
}

// this action to open model to send consultation in DoctorConsultation
export const openSendConsult = (isOpen, targetDoctor) => {
  return (dispatch, getState) => {
    dispatch({
      type: "OPEN_SEND_CONSULT_MODEL",
      data: isOpen,
      targetDoctor: targetDoctor
    })
  }
}

// this action to open model to send consultation in DoctorConsultation
export const sendConsultation = (data) => {
  return (dispatch, getState) => {
    //sync
    $.ajax({
      url: '/send-consult',
      type: "POST",
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function (res) {
        if (res.data) {
          dispatch({ type: 'SEND_CONSULTATION', data: res.data })
        }
      }
    });
  }
}

// this action to get consultions that the doctor send it to anoher doctor
export const getConsultationOutbox = (doctorId) => {
  return (dispatch, getState) => {
    //sync
    $.ajax({
      url: '/get-consult-outbox',
      type: "POST",
      data: JSON.stringify({ doctorId: doctorId }),
      contentType: 'application/json',
      success: function (res) {
        dispatch({ type: 'GET_CONSULTATIONS_OUTBOX', data: res.data })
      }
    });
  }
}

// this action to get consultions that the doctor recive it from anoher doctor 
export const getConsultationInbox = (doctorId) => {
  return (dispatch, getState) => {
    //sync
    $.ajax({
      url: '/get-consult-inbox',
      type: "POST",
      data: JSON.stringify({ doctorId: doctorId }),
      contentType: 'application/json',
      success: function (res) {
        dispatch({ type: 'GET_CONSULTATIONS_INBOX', data: res.data })
      },
      error: (err) => {
        console.log("errrrrr", err)
      }
    });
  }
}

// this action to open ShowConsultationDelials dialog to show consultation detials 
export const openShowConsultationDelials = (isOpen, targetConsult) => {
  return (dispatch, getState) => {
    dispatch({
      type: "OPEN_SHOWCONSULT_DETIALS",
      data: isOpen,
      targetConsult: targetConsult
    })
  }
}

// this action to get appointment 
export const getAppointment = (doctorId) => {
  return (dispatch, getState) => {
    //sync
    $.ajax({
      type: "POST",
      url: '/get-appointment',
      data: JSON.stringify({ doctorId: doctorId }),
      contentType: 'application/json',
      success: function (res) {
        dispatch({ type: 'GET_APPOINTMENT', data: res.data })
      },
      error: (err) => {
        console.log("Error during request the date from the server")
      }
    });
  }
}

// this action to delete appointment 
export const deleteAppointment = (doctorId) => {
  return (dispatch, getState) => {
    //sync
    $.ajax({
      type: "POST",
      url: '/get-appointment',
      data: JSON.stringify({ doctorId: doctorId }),
      contentType: 'application/json',
      success: function (res) {
        dispatch({ type: 'DELETE_APPOINTMENT', data: res.data })
      },
      error: (err) => {
        console.log("Error during request the date from the server")
      }
    });
  }
}

