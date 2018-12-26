import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducer/rootReducer'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';
import ChiefComplaint from './components/Patient/Profile/patientComponent/chiefComplent'
import PatientCard from './components/Patient/Profile/patientComponent/patientCard'
import PatientCalculation from './components/Patient/Profile/patientComponent/patientCalculation'
import MedicalAnalysis from '../src/components/Patient/Profile/patientComponent/medicalAnalysis'
import PhysicalExamination from './components/Patient/Profile/patientComponent/PhysicalExamination'
import MedicalPrescription from './components/Patient/Profile/patientComponent/medicalPrescription'
import MedicalHistory from './components/Patient/Profile/patientComponent/MedicalHistory'


// Note:create the store and add the thunk Middleware
const store=createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><MedicalHistory/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
