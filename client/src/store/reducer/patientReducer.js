const initState={
    patient: null
}

const patientReducer=(state=initState,action)=>{
    console.log('patient reducer', action)
    switch (action.type) {
      case "CREATE_PATIENT": return {
        patient: action.data
      }
      case "CREATE_PATIENT_ERROR":
        return state;
      default:
        return state;
    }
}

export default patientReducer