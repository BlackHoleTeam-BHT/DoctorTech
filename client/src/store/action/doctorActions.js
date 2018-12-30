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
  
