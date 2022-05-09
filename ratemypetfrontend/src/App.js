// import './App.css';
import React from 'react'
import { useState, useEffect } from 'react'
// import { CheckSession } from './services/Auth'
import Nav from './components/Nav'

function App() {

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [anime, setAnime] = useState([])


  return (
    
    <div className="App">
      <Nav />
      Sup
    </div>
  );
}

export default App;
