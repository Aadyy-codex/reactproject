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
import Login from './pages/Login.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import ProtectedRoutes from './component/ProtectedRoutes.jsx';
import { AuthProvider } from './AuthContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
      <Routes>
        <Route path='/products' element={<ProtectedRoutes><ChildA /></ProtectedRoutes>} />
        <Route path= '/' element = {<Home/>} />
        <Route path = '/contact' element = {<Contact/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path = "*" element = {<PageNotFound/>}/>

      </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
