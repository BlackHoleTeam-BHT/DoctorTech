import {combineReducers} from 'redux';
import patientReducer from './patientReducer';
import authReducer from './authReducer';
import doctorReducer from './doctorReducer'
//Note: to combine all the reducers
const rootReducer=combineReducers({
    patient:patientReducer,
    auth: authReducer,
    doctor: doctorReducer
})


export default rootReducer