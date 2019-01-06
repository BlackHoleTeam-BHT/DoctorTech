const initState = {
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
  }

  export default diabetesReducer