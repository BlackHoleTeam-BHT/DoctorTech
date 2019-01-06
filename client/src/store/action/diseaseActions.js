import $ from 'jquery';

export const diabetes = (data) => {
    return (dispatch, getState) => {
      $.ajax({
        type: "POST",
        url: '/diabetes',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function (res) {
            if(res.data) {
                dispatch({ type: 'DIABETES', data: res.data })
            }
        },
        error: (err) => {
          console.log("err in diabetes POST request" ,err)
        }
      });
    }
  }