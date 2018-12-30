const initState = {
  isOpen: false,
  doctores: []

};

// this function to dealing with doctor action in redux
const doctorReducer = (state = initState, action) => {
    switch (action.type) {
     case "GET_DOCTORS":
        return {
           ...state,
           doctores: action.data
        }
        case "OPEN_MODAL": 
        return {
            ...state, 
            isOpen: action.data
        }
      default:
        return state;
    }
  }

export default doctorReducer
