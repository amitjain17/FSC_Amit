import React from 'react';
//import './App.css';
import Menu from './components/menuComponents.js';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './shared/menuData.js';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'> Heading Navbar</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={DISHES} />
    </div>
  );
}

export default App;
