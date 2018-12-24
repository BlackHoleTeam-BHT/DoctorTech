// Note: Action function for dispatch
export const patientAction=(data)=>{

    return (dispatch,getState)=>{
        //sync
        dispatch({type:'x',data:data})

    }
}