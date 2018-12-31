const initState = {
<<<<<<< HEAD
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


=======
    doctors: [],
    // array of all the consultations that the doctor sent it
    consultsOutbox: [],
    // array of all the consultations that the doctor recived it
    consultsInbox: [],
    isSendConsultModelOpen: false,
    targetDoctor: {}
}

// this function to dealing with doctor action in redux
const doctorReducer = (state = initState, action) => {
   console.log(state)
    switch (action.type) {
     case "GET_DOCTORS":
        return {
           ...state,
           doctors: action.data
      }
      case "OPEN_SEND_CONSULT_MODEL":
      return {
         ...state,
         isSendConsultModelOpen: action.data,
         targetDoctor: action.targetDoctor
      }
      case "SEND_CONSULTATION":
      return {
         ...state,
      }
      case "GET_CONSULTATIONS_INBOX":
         return {
            ...state,
            consultsInbox: action.data
         }
      case "GET_CONSULTATIONS_OUTBOX":
         return {
            ...state,
            consultsOutbox: action.data
         }   
     default:
        return state;
    }
  }
>>>>>>> (feat) connect the model with SendConsultation

export default doctorReducer
