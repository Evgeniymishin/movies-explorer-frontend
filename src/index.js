import './vendor/normalize.css';
import './vendor/fonts/fonts.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

