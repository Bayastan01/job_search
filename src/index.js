import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux'
import {rootReducer} from './redux/rootReducer'
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer)
root.render(
  <>
  <Provider store={store}>
    <App className='app'/>
  </Provider>
  </>
);

