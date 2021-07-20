<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store'
=======
import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./components/App";
//import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store";
>>>>>>> 931daff (BDMS Update)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
<<<<<<< HEAD
  document.getElementById('root')
);

reportWebVitals();
=======
  document.getElementById("root")
);

//reportWebVitals();
>>>>>>> 931daff (BDMS Update)
