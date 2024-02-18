import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { AuthProvider } from './context/UserAuthContext';
import HomeRegistered from './component/HomeRegistered';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Results from './component/Results';
import UserAuthContext from './context/UserAuthContext';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <UserAuthContext>
      <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/HomeRegistered' element={<HomeRegistered/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Results' element={<Results/>} />
      </Routes>
      </UserAuthContext>
    </Router>
  );
}

export default App;