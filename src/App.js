import React from 'react';
import './App.css';
import { BrowserRoute } from 'react-router-dom';
import Navbar from './components/navbar';

const App = () => {
  return (
    <BrowserRoute>
      <div className="app">
        <Navbar />
      </div>
    </BrowserRoute>
  );
};

export default App;
