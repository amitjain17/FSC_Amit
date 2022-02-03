import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './header.js';
import Main from './main.js';
import Props from './props.js'

const data = [
  { image: "City1.jpg", heading: "Heading1" }, { image: "City2.jpg", heading: "Heading2" },
  { image: "City3.jpg", heading: "Heading3" }, { image: "City4.jpg", heading: "Heading4" },
  { image: "City1.jpg", heading: "Heading5" }, { image: "City2.jpg", heading: "Heading6" },
  { image: "City3.jpg", heading: "Heading7" }, { image: "City4.jpg", heading: "Heading8" },
  { image: "City3.jpg", heading: "Heading9" }, { image: "City4.jpg", heading: "Heading10" }
]

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    {
      data.map(
        (e) => {
          return <Props item={e} />
        }
      )
    }

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
