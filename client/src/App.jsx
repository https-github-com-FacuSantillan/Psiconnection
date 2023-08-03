import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './views/home/home'
import './App.css'

//Hooks: 
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

//imports generales:

//importamos views:
import Landing from './views/landing/landing'

//importmos components:


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/home' element={<Home />} />


      </Routes>
    </div>
  )
}

export default App
