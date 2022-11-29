 import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/statics/navbar/NavBar'
import { Home } from './pages/home/Home';
import About from './pages/about/About';
import { Login } from '@mui/icons-material';


function App() {

  return (

    <Router>
      <NavBar />
      
      <Routes>
        <Route path= '/home' element={<Home />} />
        <Route path= '/about' element={<About />} />
        <Route path='/Login' element={<Login />} />
        
      </Routes>


    </Router>

  );
}

export default App;
