import $ from 'jquery';

//  This action to make request to server to predicat diabetes
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
  
    var obj={
      weight:parseInt(data.weight),
      height:parseInt(data.height)
    }
    $.ajax({
      url: '/Health',
      type: "POST",
      data: JSON.stringify(obj),
      contentType: 'application/json',
      success: function (res) {
        var values=JSON.parse(res)
        
        var data={
          MaxWight:Math.round(values.MaxWight),
          MinWight:Math.round(values.MinWight),
          OverWight:Math.round(values.OverWight),
          loseWight:Math.round(values.loseWight),
          calories:Math.round(values.calories),
          distance:Math.round(values.distance)
        }
         dispatch({type:'Health', data: data })
      }
    });
  }
}
 //  This action to make request to server to predicat breast cancer
  export const predictBreastCancer = (data) => {
    return (dispatch, getState) => {
      $.ajax({
        type: "POST",
        url: '/breast-cancer',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function (res) {
            if(res.data) {
                dispatch({ type: 'BREAST_CANCER', data: res.data })
            }
        },
        error: (err) => {
          console.log("err in breastCancer POST request" ,err)
        }
      });
    }
  }

  export const predictHeartAttack = (data) => {
    return (dispatch, getState) => {
      $.ajax({
        type: "POST",
        url: '/HeartAttack',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function (res) {
            if(res.data) {
                dispatch({ type: 'HEART_ATTACK', data: res.data })
            }
        },
        error: (err) => {
          console.log("err in HeartAttack POST request" ,err)
        }
      });
    }
  }

