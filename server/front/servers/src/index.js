import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import ServerForm from './ServerForm';
import ServerList from './ServerList';
import ServerDetails from './ServerDetails';

import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App />
      <Routes>
        <Route element = {< ServerList/> }  path="/" exact />
        <Route element = {< ServerForm operation='create'/> }  path="/form" exact/>
        <Route element = {< ServerForm operation='update'/> }  path="/form/:id" exact/>
        <Route element = {< ServerDetails/> }  path="/details/:id" exact/>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
