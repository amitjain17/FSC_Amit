import React from 'react';
//import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponents.js';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configurationStore';

const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
