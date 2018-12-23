import {combineReducers} from 'redux'
import patientReducer from './patientReducer'

//Note: to combine all the reducers
const rootReducer=combineReducers({
    patient:patientReducer
})


export default rootReducer