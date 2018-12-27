
const initState = {
  user: null,
  userExist: false,
  correctLogin: true
}

// auth reducer to deal with sign up and sign in component in redux and save the data in the store
const authReducer = (state = initState, action) => {
    switch (action.type) {
      case "LOGIN": return {
        ...state,
        user: action.data,
        correctLogin: action.correctLogin
      }
      case "LOGIN_NOT_SUCCESS": return {
        ...state,
        correctLogin: action.correctLogin
      }
      case "SIGN_UP":
        return {
          ...state,
          user: action.data
        }
      case "SIGN_UP_USER_EXIST":
        return {
          ...state,
          userExist: action.userExist
        };

      default:
        return state;
    }
  }

export default authReducer