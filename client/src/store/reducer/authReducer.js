
const initState = {
  user: null,
  userExist: false
}

// auth reducer to deal with sign up and sign in component in redux and save the data in the store
const authReducer = (state = initState, action) => {
    switch (action.type) {
      case "SIGN_IN": return {
        user: action.data
      }
      case "SIGN_IN_ERROR":
        return state;
      case "SIGN_UP":
        return {
          ...state,
          user: action.data
        }
      case "USER_EXIST":
        return {
          ...state,
          userExist: action.userExist
        };
      case "SIGN_UP_ERROR":
        return state;
      default:
        return state;
    }
  }

export default authReducer