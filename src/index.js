import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import LoginView from './loginView';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
//zmień na <App/> by wrócić do tamtego tego xD

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
