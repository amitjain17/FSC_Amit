import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import SignIn from './account/SignIn';

ReactDOM.render(<div>
    <Router>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<SignIn />} />
        </Routes>
        {/* <App /> */}
    </Router>
</div>, document.getElementById("root"))
