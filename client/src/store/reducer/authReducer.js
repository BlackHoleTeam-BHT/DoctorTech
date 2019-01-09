
const initState = {
  user: {},
  userExist: false,
  correctLogin: true,
  isNotConfirmEmail:false,
  logout: false,
  login: false
}

// auth reducer to deal with sign up and sign in component in redux and save the data in the store
const authReducer = (state = initState, action) => {
    switch (action.type) {
      case "LOGIN": return {
        ...state,
        user: action.data,
        correctLogin: action.correctLogin,
        login: true
      }
      case "LOGIN_NOT_SUCCESS": return {
        ...state,
        correctLogin: action.correctLogin,
        isNotConfirmEmail:false
      }
      case "SIGN_UP":
        return {
          ...state,
          user: action.data,
          login: true
        }
      case "SIGN_UP_USER_EXIST":
        return {
          ...state,
          userExist: action.userExist
        };

      case 'LOGOUT':
         return{
           ...state,
          logout: action.logout,
          userExist: false,
          correctLogin: true,
          login:false
          
         }
      case "UPDATE_DOCTOR_INFO":
        return {
          ...state,
          user: action.data
        }
        case "Email_Not_Confirm":
        return{
          ...state,
          isNotConfirmEmail:true,
          correctLogin:true

        }
        case "UpdateImage":
        console.log('ssssss',action.data)
        
        return{
          ...state,
          user:action.data[0]

        }

      default:
        return state;
    }
  }

export default authReducer