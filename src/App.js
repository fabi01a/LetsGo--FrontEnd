import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Search from "./pages/Search";
import DisplayCampsites from "./pages/DisplayCampsites";
import CampsiteDetails from "./pages/CampsiteDetails";
// import { CampsiteProvider } from "./pages/CampsiteContext";
// import SubmitButton from './components/SubmitButton';
// import FourOhFour from './pages/404';
import './App.css';

const App = () => {
  return (   
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search/campsites' element={<DisplayCampsites />} />
        <Route path='/search/campsites/:facilityName'element={<CampsiteDetails />} />
      </Routes>
    </div>
  );
}

export default App;
