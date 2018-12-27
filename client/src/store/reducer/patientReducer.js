const initState={
    patient: null,
    patients: []
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
      default:
        return state;
    }
}

export default patientReducer