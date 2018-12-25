// Note: Action function for dispatch
export const patientAction=(data)=>{
    console.log('Action',data)

    return (dispatch,getState)=>{
        //sync
        dispatch({type:'x',data:data})

    }
}