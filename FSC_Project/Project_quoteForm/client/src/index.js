import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import './index.css'
import thunk from 'redux-thunk';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import reducers from './reducers';

import SignIn from './account/SignIn';
import { createStore, compose, applyMiddleware } from 'redux';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
    <Router>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<SignIn />} />
        </Routes>
        {/* <App /> */}
    </Router>
</Provider>, document.getElementById("root"))
