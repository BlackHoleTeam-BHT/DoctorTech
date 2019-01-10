import { searchForDoctor } from "../action/doctorActions";

const initState = {
  isOpen: false,
  doctors: [],
  isSendConsultModelOpen: false,
  targetDoctor: {},
  consultsOutbox: [],
  consultsInbox: [],
  isShowConsultDetialsOpen: false,
  targetConsult: {},
  appointments: [],
  isDoctorInfoReceived : false,
  targetAppointment:{},
  isAddAppointmentDialogOpen: false,
  contextCallAddApointament : '',
  searchResults: [],
  activeAppointment:false
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
      let data = state.consultsOutbox;
      data.unshift(action.data);
      return {
        ...state,
        consultsOutbox: data
      }
    case "GET_CONSULTATIONS_OUTBOX":
      return {
        ...state,
        consultsOutbox: action.data
      }
    case "GET_CONSULTATIONS_INBOX":
      return {
        ...state,
        consultsInbox: action.data,
        isDoctorInfoReceived: true
      }
    case "OPEN_SHOWCONSULT_DETIALS":
      return {
        ...state,
        isShowConsultDetialsOpen: action.data,
        targetConsult: action.targetConsult
      }
    case "GET_APPOINTMENT": return {
      ...state,
      appointments: action.data
    }
    case "OPEN_ADD_APPOINTMENT_DAILOG" : 
    return {
      ...state,
      isAddAppointmentDialogOpen: action.data,
      targetAppointment : action.targetAppointment,
      contextCallAddApointament: action.context
    }  

   case "AddAppointment":
    var newAppointment = state.appointments
    newAppointment.push(action.data)

    return {
      ...state,
      appointments: newAppointment,
      activeAppointment:true
    }
    case "DELETE_APPOINTMENT":
      return {
        ...state,
        appointments: action.data
      }
    case "UPDATE_APPOINTMENT": 
      return {
        ...state,
        appointments: action.data
      }
    case "SEARCH_DOCTOR": return {
      ...state,
      searchResults: action.data
    }
    default:
      return state;
      

  }
}

export default doctorReducer
