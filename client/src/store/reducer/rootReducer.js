import {combineReducers} from 'redux';
import patientReducer from './patientReducer';
import authReducer from './authReducer';
import doctorReducer from './doctorReducer'
import disesesReducer from './diseaseReducer'
import APiReducer from './APiReducer'
//Note: to combine all the reducers
const rootReducer=combineReducers({
    patient:patientReducer,
    auth: authReducer,
    doctor: doctorReducer,
    disease: disesesReducer,
    API:APiReducer
})


export default rootReducer