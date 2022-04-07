import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import AllRockets from './components/AllRockets';
import MyProfile from './components/MyProfile';
import { fetchData } from './redux/rockets/rockets';
import Missions from './components/Missions';
import { getMissions } from './redux/missions/missions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(getMissions());
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<AllRockets />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="missions" element={<Missions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
