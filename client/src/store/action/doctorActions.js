import $ from 'jquery';


// function to edit the state inside redux to open the modal
export const openModal= (isOpen) => {

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
            type:"OPEN_SEND_CONSULT_MODEL",
            data: isOpen,
            targetDoctor:  targetDoctor
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
          dispatch({ type: 'SEND_CONSULTATION', data: res.data })
        }
      });
    }
}
