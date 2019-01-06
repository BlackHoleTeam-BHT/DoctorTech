const initState = {
    diabetes: {}
  }
 
  const diabetesReducer = (state =initState , action) => {
      switch(action.type){
          case "DIABETES": return {
              ...state,
              diabetes: action.data
          }

          default : return {
              state
          }
      } 
  }

  export default diabetesReducer