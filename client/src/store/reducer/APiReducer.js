const initState = {
  article: [],
  Weather:{},
  isArticalReceived: false 
}

const APiReducer = (state = initState, action) => {
  switch (action.type) {
    case "Articles":
      return {
        ...state,
        article: action.data,
        isArticalReceived: true
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