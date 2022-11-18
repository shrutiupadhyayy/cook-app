import React from 'react'
import NavBar from './components/NavBar';
import Cook from './components/Cook'
import { Routes, Route } from 'react-router-dom';



const App = () => {
  return <Routes>
    <Route path="/" element={<NavBar/>}/>
    <Route path="/cookDetails" element={<Cook/>}/>
  </Routes>
  

};

export default App