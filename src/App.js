import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NaviBar from "./components/NaviBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import DisplayCampsites from "./pages/DisplayCampsites";
import CampsiteDetails from "./pages/CampsiteDetails";
import Login from './pages/Login';
import Registration from './pages/Registration'
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './pages/UserProfile';
import store, { persistor } from './store';
// import UserProfile from "./pages/UserProfile";
// import FavoriteFacilities from "./pages/FavoriteFacilities";
import './App.css';

const App = () => {
  return (   
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <div className='App'>
          <NaviBar></NaviBar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/search/campsites' element={<DisplayCampsites />} />
            <Route path='/search/campsites/:facilityName'element={<CampsiteDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/login/registration' element={<Registration />} />
            <Route path='/protected'element={<ProtectedRoute/>}>
              <Route index element={<UserProfile/>} />
              {/* <Route path='favorites' element={<Favorites />} />
                <Route path='favorites/:id' element={<AdjustFavorites />} /> */}
            </Route>
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
