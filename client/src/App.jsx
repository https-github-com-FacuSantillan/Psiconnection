import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './views/home/home'
import './App.css'

//Hooks: 
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

//imports generales:

//importamos views:

//importmos components:


function App() {
  return (
    <div>

    <Routes>
    <Route path='/home' element={<Home/>} />

    </Routes>

      {/* vayan creando las orutes que quieran con sus componenetes  */}
    </div>
  )
}

export default App
