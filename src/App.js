// import { Route, Routes, Router } from 'react-router-dom';
// import Home from "./pages/Home.jsx";
import Search from "./pages/Search";
// import Campsites from "./pages/Campsites"
// import CampsiteId from "./pages/CampsiteId";
// import SubmitButton from './components/SubmitButton';
// import FourOhFour from './pages/404';
import './App.css';

function App() {
  return (
  //   <Router>
  //   <div>
  //     <Routes>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/campsites/search' element={<Search />} />
  //       <Route path='/campsites' element={<Campsites />}>
  //         <Route path='/:campsiteId' element={<CampsiteId />} ></Route>
  //       </Route>
  //       <Route path="*" element={<FourOhFour />} />
  //     </Routes>
  //   </div>
  // </Router>
        <Search></Search>
  );
}

export default App;
