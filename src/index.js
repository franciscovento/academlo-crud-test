import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
// import render from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UserProvider from './context/userContext';
import App from "./App";

const rootElement = document.getElementById("root");
render(
  
  <React.StrictMode>
       <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
  </React.StrictMode>,
  rootElement
);


