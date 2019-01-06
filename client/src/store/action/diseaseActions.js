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


  // this action to get the patient Health predict
export const Health= (data) => {
  return (dispatch, getState) => {
    console.log('actionff',data)
    var obj={
      weight:data.weight,
      height:data.height
    }
    $.ajax({
      url: '/Health',
      type: "POST",
      data: JSON.stringify(obj),
      contentType: 'application/json',
      success: function (res) {
        var data={
          MaxWight:res.MaxWight,
          MinWight:res.MinWight,
          OverWight:res.OverWight,
          loseWight:res.loseWight,
          calories:res.calories,
          distance:res.distance

        }
        // dispatch({ type: 'GET_CONSULTATIONS_OUTBOX', data: res.data })
      }
    });
  }
}