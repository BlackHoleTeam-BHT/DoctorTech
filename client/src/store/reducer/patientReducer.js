const initState={
    patient: null,
    patients: [],
    PatientProfile:[{
      firstName:'',
      lastName:'',
      age:'',
      gender:'',
      maritalStatus:''

    }],
    currentCase:[]

}

const patientReducer=(state=initState,action)=>{
    console.log('patient reducer', action)
    switch (action.type) {
      case "CREATE_PATIENT": return {
        ...state,
        patient: action.data
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
      default:
        return state;
    }
}

export default patientReducer