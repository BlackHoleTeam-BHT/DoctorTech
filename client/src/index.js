import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import CreatePatient from './components/Patient/CreatePatient'
import TextFields from './components/Patient/CreatePatient2'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducer/rootReducer'
import thunk from 'redux-thunk'

// Note:create the store and add the thunk Middleware
const store=createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(<TextFields store={store}><TextFields/></TextFields>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
