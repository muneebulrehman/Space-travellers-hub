import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import AllRockets from './components/AllRockets';
import MyProfile from './components/MyProfile';
import { fetchData } from './redux/rockets/rockets';
import Missions from './components/Missions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<AllRockets />} />
          <Route path="rockets" element={<AllRockets />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="missions" element={<Missions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
