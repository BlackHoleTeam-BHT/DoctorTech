import {combineReducers} from 'redux';
import patientReducer from './patientReducer';
import authReducer from './authReducer';

//Note: to combine all the reducers
const rootReducer=combineReducers({
    patient:patientReducer,
    auth: authReducer
})


export default rootReducer