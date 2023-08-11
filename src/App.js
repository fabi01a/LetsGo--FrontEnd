import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Search from "./pages/Search";
import DisplayCampsites from "./pages/DisplayCampsites";
import CampsiteDetails from "./pages/CampsiteDetails";
// import UserProfile from "./pages/UserProfile";
// import FavoriteFacilities from "./pages/FavoriteFacilities";
import './App.css';

const App = () => {
  return (   
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home'>
          {/* <Route index element={<UserProfile />} /> */}
          {/* <Route path='favorites' element={<FavoriteFacilities />} /> */}
        </Route>
        <Route path='/search' element={<Search />} />
        <Route path='/search/campsites' element={<DisplayCampsites />} />
        <Route path='/search/campsites/:facilityName'element={<CampsiteDetails />} />
      </Routes>
    </div>
  );
}

export default App;
