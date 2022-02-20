import React from 'react';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Login from './account/login.js';
import SignUp from './account/signup.js';
import Front from './components/front.js';
import Admin from './admin/admin.js';

var store = require('store')

function App() {
  let data = useSelector((data) => data)

  if (JSON.parse(sessionStorage.getItem("data"))) {

    if (data.reduce[0].status !== "") {
      sessionStorage.setItem("data", JSON.stringify(data));
      //store.set("data", data);
      const data1 = JSON.parse(sessionStorage.getItem("data"));
      data = data1;
    } else {
      const data1 = JSON.parse(sessionStorage.getItem("data"));
      data = data1
      data.reduce[0].status = ""
      sessionStorage.setItem("data", JSON.stringify(data));
    }
  } else {
    sessionStorage.setItem("data", JSON.stringify(data));
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Front authorized={data.reduce[0].UserName} />} />
          <Route path='/login' element={<Login authorized={data.reduce[0].status} />} />
          <Route path='/signUp' element={<SignUp authorized={data.reduce[0].status} />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
