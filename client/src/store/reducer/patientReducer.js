const initState={
    patient: null,
    patientID: 0,
    patients: [],
    patientSearchResults : [],
    isSearchNow: false,
    PatientProfile:[{
      firstName:'',
      lastName:'',
      age:'',
      gender:'',
      maritalStatus:''

    }],
    currentCase:[],
    chiefComplaint:[{
      id:1,
      title:'',
      description:''
    }]

}

const patientReducer=(state=initState,action)=>{
    console.log('patient reducer', action)
    switch (action.type) {
      case "CREATE_PATIENT": return {
        ...state,
        patientID: action.data
      }
      case "GET_PATIENTS": return {
        ...state,
        patients: action.data
      }
      case "CREATE_PATIENT_ERROR":
        return state;
      case "GetUserInformation":
        return {
          ...state,
          PatientProfile:action.data    
        }
      case "GetPatientCassis":
        return{
          ...state,
          currentCase:action.data
        }    

      case "SEARCH_PATIENT":
        return{
          ...state,
          patientSearchResults:action.data,
          isSearchNow: action.isSearchNow
        }  
      case "SEARCH_PATIENT_STOP":
        return {
          ...state,
          isSearchNow: action.isSearchNow
        }
      default:
        return state;
    }
}

export default patientReducer