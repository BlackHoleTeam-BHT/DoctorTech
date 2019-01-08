const initState = {
    article:[]

  }


  const APiReducer = (state = initState, action) => {
    switch (action.type) {
        case "Articles":
        return{
            ...state,
            article:action.data

        }
        default:
        return state;
    }

  }


  export default APiReducer