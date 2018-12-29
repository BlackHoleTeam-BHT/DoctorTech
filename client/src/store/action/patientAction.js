import $ from 'jquery'

// Note: Action function for dispatch
export const createPatient = (data) => {
  console.log(data)
  return (dispatch, getState) => {
    //sync
    $.ajax({
      type: "POST",
      url: '/create-patient',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function (data) {
        dispatch({ type: 'CREATE_PATIENT', data: data.patientId })
      },
      error: (err) => {
        dispatch({ type: 'CREATE_PATIENT_ERROR', error: err })
      }
    });
  }
}

// this action in redux to get patient info for each doctor
export const getPatients = (doctorId) => {
  return (dispatch, getState) => {
    //sync
    $.ajax({
      type: "POST",
      url: '/patients',
      data: JSON.stringify({ doctorId: doctorId }),
      contentType: 'application/json',
      success: function (res) {
        dispatch({ type: 'GET_PATIENTS', data: res.data })
      },
      error: (err) => {
        dispatch({ type: 'GET_PATIENTS_ERROR', error: err })
      }
    });
  }
    }



// Note: Get the patient information based on ID
export const GetUserInformation=(id)=>{
  console.log('action','recived')
  
  return(dispatch, getState)=>{

    $.ajax({
      type: "POST",
      url: '/patientInformation',
      contentType:'application/json',
      data:JSON.stringify({id:id}),
      success: function (data) {
      console.log()
        dispatch({type:'GetUserInformation',data:data})
       
      },
      error: (err) => {
        console.log('server err',err)
      }
  
    });
  }

}

// Note: Get the patient Casses based on ID
export const GetPatientCassis=(id)=>{
  console.log('action Casses',id)
  return(dispatch, getState)=>{

    $.ajax({
      type: "POST",
      url: '/patientInCassis',
      contentType:'application/json',
      data:JSON.stringify({id:id}),
      success: function (data) {
        console.log('d',data)
        dispatch({type:'GetPatientCassis',data:data})
      },
      error: (err) => {
        console.log('server err',err)
      }
  
    });
  }
}


// Note: search about patient depend on id , name or phone number for patieb using filter to all patiens 
export const searchAboutPatient=(target)=>{
  return(dispatch, getState)=>{
     console.log(getState())
    let data = getState().patient.patients.filter((elem) => {
      let fullName = elem.firstName + ' ' + elem.middleName + ' ' + elem.lastName;
        if(elem.id.toString().includes(target)) {
          return true
        } else if(fullName.toLowerCase().includes(target.toLowerCase())) {
          return true
        } else if(elem.phoneNumber.includes(target)) {
          return true
        }
        return false;
     })
      console.log(data)
    if(target){
      // if the target has data that is mean there is search process
      dispatch({type:'SEARCH_PATIENT', data: data, isSearchNow: true})
    } else {
      // there is not search process
      dispatch({type:'SEARCH_PATIENT_STOP', isSearchNow: false})
    }
  }

}

// Note: Get the patient selected Case information by case id 
export const GetCaseInfo=(CaseId)=>{
  console.log('rrrrraction GetCaseInfo',CaseId)

  
  return(dispatch, getState)=>{

    $.ajax({
      type: "POST",
      url: '/GetCaseInfo',
      contentType:'application/json',
      data:JSON.stringify({id:CaseId}),
      success: function (data) {
        data.CaseId=CaseId
        console.log('obj for chief',data)
        dispatch({type:'GetCaseInfo',data:data})
      },
      error: (err) => {
        console.log('server err',err)
      }
  
    });



  }

}


// Note: Update the Plan Step  
export const UpdatePlanStep=(Id,step)=>{
  console.log('UpdatePlanStep',Id,step)
  const data={
    Id:Id,
    status:step
  }
  
  return(dispatch, getState)=>{

    // $.ajax({
    //   type: "POST",
    //   url: '/UpdateAnalysisStatus',
    //   contentType:'application/json',
    //   data:JSON.stringify({id:Id,status:status}),
    //   success: function (result) {
    //     console.log('UpdateAnalysisStatus',result)
    //     if(result==1){
    //       dispatch({type:'UpdateAnalysisStatus',data:data})
    //     }
    //     // dispatch({type:'GetCaseInfo',data:data})
    //   },
    //   error: (err) => {
    //     console.log('server err',err)
    //   }
  
    // });



  }

}
// Note: Update the Medical Analysis status 
export const UpdateAnalysisStatus=(Id,status)=>{
  console.log('action UpdateAnalysisStatus',Id)
  const data={
    Id:Id,
    status:status
  }
  
  return(dispatch, getState)=>{

    $.ajax({
      type: "POST",
      url: '/UpdateAnalysisStatus',
      contentType:'application/json',
      data:JSON.stringify({id:Id,status:status}),
      success: function (result) {
        console.log('UpdateAnalysisStatus',result)
        if(result==1){
          dispatch({type:'UpdateAnalysisStatus',data:data})
        }
        // dispatch({type:'GetCaseInfo',data:data})
      },
      error: (err) => {
        console.log('server err',err)
      }
  
    });



  }

}


// Note: Add Pationt chief complaint 
export const AddChiefComplaint=(data)=>{
  console.log('action AddChiefComplaint',data)
 
  return(dispatch, getState)=>{

    $.ajax({
      type: "POST",
      url: '/AddChiefComplaint',
      contentType:'application/json',
      data:JSON.stringify({data:data}),
      success: function (result) {
        console.log('AddChiefComplaintServer?',GetCaseInfo)
        data.insertId=result.insertId

       
        

          dispatch({type:'AddChiefComplaint',data:data})
        
        // dispatch({type:'GetCaseInfo',data:data})
      },
      error: (err) => {
        console.log('server err',err)
      }
  
    });



  }

}
