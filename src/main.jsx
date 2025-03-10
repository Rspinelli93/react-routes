import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes.jsx';
import Footer from '../src/components/Footer.jsx'
import Header from '../src/components/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> 
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  </React.StrictMode>
);
