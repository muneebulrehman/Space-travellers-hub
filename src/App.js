import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
