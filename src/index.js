import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
//import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
//import store from "./redux/Store";

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <App />
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
