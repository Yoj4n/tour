import React from 'react';
import ReactDOM from 'react-dom/client'; // Usa 'react-dom/client' en lugar de 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';

// Crea el root utilizando createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
