const initState = {
   isOpen: false,
   doctors: [],
   isSendConsultModelOpen: false,
   targetDoctor: {},
   consultsOutbox:[],
   consultsInbox:[],
};

// this function to dealing with doctor action in redux
const doctorReducer = (state = initState, action) => {
   switch (action.type) {
      case "GET_DOCTORS":
         return {
            ...state,
            doctors: action.data
         }
      case "OPEN_MODAL":
         return {
            ...state,
            isOpen: action.data
         }
      case "OPEN_SEND_CONSULT_MODEL":
         return {
            ...state,
            isSendConsultModelOpen: action.data,
            targetDoctor: action.targetDoctor
         }
      case "SEND_CONSULTATION":
         let data= state.consultsOutbox;
         data.unshift(action.data);
         return {
            ...state,
            consultsOutbox: data
         }
      case "GET_CONSULTATIONS_OUTBOX":
         return {
            ...state,
            consultsOutbox:action.data
         }
      case "GET_CONSULTATIONS_INBOX":
         return {
            ...state,
            consultsInbox:action.data
         }
      default:
         return state;
   }
}

export default doctorReducer
