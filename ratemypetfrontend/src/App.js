// import './App.css';
import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
// import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import Dash from './pages/Dash'
// import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/signin' element={<SignIn />} />
        {/* <Route path ='/register' component={<Register />} /> */}
        <Route path='/dash' element={<Dash />} />
      </Routes>
    </div>
  );
}

export default App;
