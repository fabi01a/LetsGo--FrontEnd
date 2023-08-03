import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
// import Home from "./pages/Home.jsx";
import Search from "./pages/Search";
import DisplayCampsites from "./pages/DisplayCampsites";
// import CampsiteId from "./pages/CampsiteId";
// import SubmitButton from './components/SubmitButton';
// import FourOhFour from './pages/404';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/search' element={<Search />} />
          <Route path='/search/campsites' element={<DisplayCampsites />} />
     
        </Routes>
        
      </div>
    </Router>
        // <Search></Search>
        // <DisplayCampsites></DisplayCampsites>
  );
}

export default App;
