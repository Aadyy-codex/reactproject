import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CompA from './component/CompA';
import ChildA from './component/ChildA';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChildA/>
  </React.StrictMode>
);

reportWebVitals();
