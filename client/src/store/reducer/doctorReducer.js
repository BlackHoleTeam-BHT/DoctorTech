const initState = {
  isOpen: false
};

const doctorReducer = (state = initState, action) => {
    switch (action.type) {
        case "OPEN_MODAL": 
          return {
              ...state, 
              isOpen: action.data
          }
        default:
          return state;
    }
    
};

export default doctorReducer;
