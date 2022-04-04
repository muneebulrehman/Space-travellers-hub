import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import AllRockets from './components/AllRockets';
import MyProfile from './components/MyProfile';
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
        <AllRockets />
        <MyProfile />
      </div>
    </BrowserRouter>
  );
};

export default App;
