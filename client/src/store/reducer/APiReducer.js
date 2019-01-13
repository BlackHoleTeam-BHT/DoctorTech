const initState = {
  article: [],
  Weather:{}

}

const APiReducer = (state = initState, action) => {
  switch (action.type) {
    case "Articles":
      return {
        ...state,
        article: action.data

      }
      case "Weather":
      return{
        ...state,
        Weather:action.data
      }
    default:
      return state;
  }

}


export default APiReducer