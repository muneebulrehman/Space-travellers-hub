import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import { fetchData } from './redux/rockets/rockets';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
      </div>
    </BrowserRouter>
  );
};

export default App;
