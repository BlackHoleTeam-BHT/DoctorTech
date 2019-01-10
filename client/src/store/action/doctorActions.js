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
export const deleteAppointment = (doctorId, appointmentId) => {
  return (dispatch, getState) => {
    //sync
    $.ajax({
      type: "POST",
      url: '/delete-appointment',
      data: JSON.stringify({ doctorId: doctorId , appointmentId: appointmentId}),
      contentType: 'application/json',
      success:  (res) => {
        dispatch({ type: 'DELETE_APPOINTMENT', data: res.data })
      },
      error: (err) => {
        console.log("Error during request the date from the server")
      }
    });
  }
}
// to save the doctor image  
export const DoctorImage = (data) => {
  return (dispatch, getState) => {
    console.log('action',data)

    var fd = new FormData();
    var pic = data.pic
    fd.append('pic',pic)
    fd.append('id',data.id)
    $.ajax({
      url: '/upload',
      type: "POST",
      processData: false,
      data: fd,
      contentType: false,
      success: function (res) {
        console.log('server',res)
          
            dispatch({ type:'UpdateImage', data:res})
          
      }
    })

  }
}


// Note: Add Appointment
export const AddAppointment = (data) => {
  console.log('action AddAppointment', data)
  return (dispatch, getState) => {

    $.ajax({
      type: "POST",
      url: '/add-appointment',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function (result) {
        dispatch({ type: 'AddAppointment', data: data })
      },
      error: (err) => {
        console.log('server err', err)
      }

    });

  }
}

// this action to open model to add appointment to patient
export const openAddAppointmentDialog = (isOpen, targetAppointment, context) => {
  return (dispatch, getState) => {
    dispatch({
      type: "OPEN_ADD_APPOINTMENT_DAILOG",
      data: isOpen,
      targetAppointment: targetAppointment,
      context: context
    })
  }
}

// this action to delete appointment 
export const updateAppointment = (newAppointment) => {
  return (dispatch, getState) => {
    //sync
    $.ajax({
      type: "POST",
      url: '/update-appointment',
      data: JSON.stringify(newAppointment),
      contentType: 'application/json',
      success:  (res) => {
        dispatch({ type: 'UPDATE_APPOINTMENT', data: res.data })
      },
      error: (err) => {
        console.log("Error during update docotr appointment the server")
      }
    });
  }
}
export const searchForDoctor = (data) => {
  console.log(data)
  return (dispatch, getState) => {
    $.ajax({
      type: 'POST',
      url: '/search-doctors',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function (res) {
        if(res.data){
          dispatch({type:'SEARCH_DOCTOR', data:res.data})
        }
      },
      error:(err) =>{
        console.log("ERROR IN SEARCH FOR DOCTOR" , err)
      }

    })
  }
}




// this deactivate the appointment SnackBar
export const DeactivateAppointment = (id) => {
  return (dispatch, getState) => {

    dispatch({type: 'DeactivateAppointment'})
  }
}
