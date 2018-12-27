import $ from 'jquery'

// Note: Action function for dispatch
export const createPatient=(data)=>{
    console.log(data)
    return (dispatch, getState)=>{
        //sync
        $.ajax({
            type: "POST",
            url: '/create-patient',
            data: JSON.stringify({...data}),
            success: function (data) {
              dispatch({type:'CREATE_PATIENT',data:data})
            },
            error: (err) => {
              dispatch({type:'CREATE_PATIENT_ERROR', error: err})
            }
      
          });
        

    }
}