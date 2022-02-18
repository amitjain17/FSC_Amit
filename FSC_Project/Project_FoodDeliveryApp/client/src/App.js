import React from 'react';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Login from './account/login.js';
import SignUp from './account/signup.js';
import Front from './components/front.js';

var store = require('store')

function App() {
  let data = useSelector((data) => data)
  if (data.reduce[0].status !== "") {
    store.set("data", data);
    const data1 = store.get("data");
    data = data1;
  } else {
    const data1 = store.get("data");
    data = data1
    data.reduce[0].status = ""
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Front authorized={data.reduce[0].UserName} />} />
          <Route path='/login' element={<Login authorized={data.reduce[0].status} />} />
          <Route path='/signUp' element={<SignUp authorized={data.reduce[0].status} />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
