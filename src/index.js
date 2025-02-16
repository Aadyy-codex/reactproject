import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CompA from './component/CompA';
import ChildA from './component/ChildA';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/products' element={<ChildA />} />
        <Route path= '/' element = {<Home/>} />
        <Route path = '/contact' element = {<Contact/>} />
        <Route path = "*" element = {<PageNotFound/>}/>

      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
