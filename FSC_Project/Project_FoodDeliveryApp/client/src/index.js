import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Login from './account/login.js';


const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <div style={{ "backgroundColor": "azure" }}>
    <Provider store={store} >
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />


        </Routes>
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);

