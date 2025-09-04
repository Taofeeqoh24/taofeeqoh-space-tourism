import './index.css'
// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Home } from './components'
import { Destination, Crew, Technology } from "./pages";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}/>
        <Route path="/crew" element={<Crew />}/>
        <Route path="/technology" element={<Technology />}/>
      </Routes>
    </>
  )
}

export default App
