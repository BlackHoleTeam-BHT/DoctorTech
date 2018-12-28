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
    currentPatient:false,
    currentCase:[],
    chiefComplaint:[{
      id:1,
      title:'',
      description:''
    }],
    MedicalHistory:[{
      heartDisease:0,
      joints:0,
      bloodPressure:0,
      diabetes:0,
      renalDisease:0,
      patientHistory:'',
      familyHistory:''
    }],
    PhysicalExamination:[{
      weight:'',
      height:'',
      bodyTemperature:'',
      headNotes:'',
      middleBodyNotes:'',
      bottomBodyNotes:'',
      diabetes:'',
      BloodPressure:'',
      BMI:''
    }],
    medicalAnalysis:[],
    MedicalPrescription:[],
    PatientPlan:[{
      step:5
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
          currentCase:action.data,
          currentPatient:true
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
  
      case "GetCaseInfo":
      return{
        ...state,
        chiefComplaint:action.data.ChiefComplaint,
        MedicalHistory:action.data.MedicalHistory,
        PhysicalExamination:action.data.PhysicalExamination,
        medicalAnalysis:action.data.medicalAnalysis,
        MedicalPrescription:action.data.MedicalPrescription

      }
      case "UpdateAnalysisStatus":
      var NewMedicalAnalysis=state.medicalAnalysis
      for(var i=0;i<NewMedicalAnalysis.length;i++){
        if(NewMedicalAnalysis[i].id==action.data.Id){
          NewMedicalAnalysis[i].status=action.data.status
        }
      }
      return{
          ...state,
          medicalAnalysis:NewMedicalAnalysis
      }   
      default:
        return state;
    }
}

export default patientReducer