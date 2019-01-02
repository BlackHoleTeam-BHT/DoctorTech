const initState={
    patient: {},
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
    }],
  SelectCase: false,
  CaseId: 0
}


const patientReducer = (state = initState, action) => {
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
        PatientProfile: action.data
      }
    case "GetPatientCassis":
      return {
        ...state,
        currentCase: action.data,
        currentPatient: true,

        chiefComplaint: [],
        MedicalHistory: [],
        PhysicalExamination: [],
        medicalAnalysis: [],
        MedicalPrescription: [],
        PatientPlan: [],
        CaseId: 0,
        SelectCase: false

      }

    case "SEARCH_PATIENT":
      return {
        ...state,
        patientSearchResults: action.data,
        isSearchNow: action.isSearchNow
      }
    case "SEARCH_PATIENT_STOP":
      return {
        ...state,
        isSearchNow: action.isSearchNow
      }

    case "GetCaseInfo":
      return {
        ...state,
        chiefComplaint: action.data.ChiefComplaint,
        MedicalHistory: action.data.MedicalHistory,
        PhysicalExamination: action.data.PhysicalExamination,
        medicalAnalysis: action.data.medicalAnalysis,
        MedicalPrescription: action.data.MedicalPrescription,
        PatientPlan: action.data.PatientPlane,
        CaseId: action.data.CaseId,
        SelectCase: true

      }
    case "UpdateAnalysisStatus":
      var NewMedicalAnalysis = state.medicalAnalysis
      for (var i = 0; i < NewMedicalAnalysis.length; i++) {
        if (NewMedicalAnalysis[i].id == action.data.Id) {
          NewMedicalAnalysis[i].status = action.data.status
        }
      }
      return {
        ...state,
        medicalAnalysis: NewMedicalAnalysis
      }
    case "AddChiefComplaint":
      var newChifComplaint = state.chiefComplaint
      newChifComplaint.push(action.data)
      return {
        ...state,
        chiefComplaint: newChifComplaint
      }
    case "AddPhysicalExamination":
      var newPhysicalExamination = state.PhysicalExamination
      newPhysicalExamination.push(action.data)
      return {
        ...state,
        physicalExamination: [action.data]
      }
    case "AddMedicalPrescription":
      var newMedicalPrescription = state.MedicalPrescription
      newMedicalPrescription.push(action.data)
      return {
        ...state,
        MedicalPrescription: newMedicalPrescription
      }
    case "AddMedicalAnalysis":
      var newMedicalAnalysis = state.medicalAnalysis
      newMedicalAnalysis.push(action.data)

      return {
        ...state,
        medicalAnalysis: newMedicalAnalysis

      }

    case "AddPatientHistory":
      console.log('777', action.data)
      return {
        ...state,
        MedicalHistory: [action.data]

      }
    case "UpdatePlanStep":
      var newPatientPlan = state.PatientPlan
      newPatientPlan[0].step = action.data.step
      return {
        ...state,
        PatientPlan: newPatientPlan
      }
    case "ClosePatientProfile":
      var Cases = state.currentCase
      var newPatientPlan = state.PatientPlan
      for (var i = 0; i < Cases.length; i++) {
        if (Cases[i].id == action.data.CaseId) {
          Cases[i].isOpen = 0
        }
      }
      newPatientPlan[0].step = action.data.step

      return {
        ...state,
        currentCase: Cases,
        PatientPlan: newPatientPlan

      }
    case "OpenPatientProfile":
      var newPatientPlan = state.PatientPlan
      newPatientPlan[0].step = action.data.step
      var Cases = state.currentCase
      for (var i = 0; i < Cases.length; i++) {
        if (Cases[i].id == action.data.CaseId) {
          Cases[i].isOpen = 1
        }
      }

      return {
        ...state,
        currentCase: Cases,
        PatientPlan: newPatientPlan
      }
    case "AddPatientPlan":
      return {
        ...state,
        PatientPlan: [action.data]
      }


    case "AddAppointment":
      var newAppointment = state.Appointment
      newAppointment.push(action.data)

      return {
        ...state,
        Appointment: newAppointment

      }

    default:
      return state;
  }


}

export default patientReducer