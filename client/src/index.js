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
import HeartAttack from './components/disease/HeartAttack'

// Note:create the store and add the thunk Middleware
const store=createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><HeartAttack/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
