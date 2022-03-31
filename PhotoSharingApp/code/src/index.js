import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/login';
import Home from './components/Home';
import Postview from "./components/Postview"
import Register from './components/Register';
import UploadImage from './components/upload';
import TermAndCondition from './components/termsAndPolicy';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route exact path ="/" index element={<Home />} />
    <Route exact path ="/upload"  element={<UploadImage />} />

    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/Register"  element={<Register/>} />
    <Route exact path="/terms" element={<TermAndCondition/>} />
    <Route exact path="/posts" element ={<Postview/>} />
    {/* <Redirect from ="/*" to= "/" /> */}
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
