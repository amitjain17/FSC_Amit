import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)))


ReactDOM.render(
  <div style={{ "backgroundColor": "azure" }}>
    <Provider store={store} >
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);

