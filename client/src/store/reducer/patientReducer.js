const initState={
        test:'ozil'
}

const patientReducer=(state=initState,action)=>{
    if(action){
        console.log('patientReducer',action)
    }
    return state
}


export default patientReducer