import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Search from "./pages/Search";
import DisplayCampsites from "./pages/DisplayCampsites";
import CampsiteDetails from "./pages/CampsiteDetails";
// import SubmitButton from './components/SubmitButton';
// import FourOhFour from './pages/404';
import './App.css';

function App() {
  return (   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/search/campsites' element={<DisplayCampsites />} />
      <Route path='/campsites/:facilityName'element={<CampsiteDetails />} />
    </Routes>
  );
}

export default App;
