const initState = {
<<<<<<< HEAD
    diabetes: {},
    Health:[]
  }
 
  const diabetesReducer = (state =initState , action) => {
      switch(action.type){
          case "DIABETES": return {
              ...state,
              diabetes: action.data
          }
          case "Health":
          return{
              ...state,
              Health:action.data

          }
          case "ClearHealth":
          return{
              ...state,
              Health:[]
          }

          default : return {
              ...state
          }
      } 
=======
  diabetes: {},
  breastCancerPredictions: {}
}

const diabetesReducer = (state = initState, action) => {
  switch (action.type) {
    case "DIABETES":
      return {
        ...state,
        diabetes: action.data
      }
    case "BREAST_CANCER":
      return {
        ...state,
        breastCancerPredictions: action.data
      }
    default:
      return {
        state
      }
>>>>>>> (feat)n add smart prediction component and add BreastCancer compo and connect with redux and server
  }
}

export default diabetesReducer