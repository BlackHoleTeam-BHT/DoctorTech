const initState = {
   isOpen: false,
   doctores: [],
   isSendConsultModelOpen: false
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
      case "OPEN_SEND_CONSULT_MODEL":
         return {
            ...state,
            isSendConsultModelOpen: action.data
         }
      default:
         return state;
   }
}



export default doctorReducer
