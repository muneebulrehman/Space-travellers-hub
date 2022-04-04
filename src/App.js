import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
      </div>
    </BrowserRouter>
  );
};

export default App;
