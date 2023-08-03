import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './views/home/home'
import SideBar from './components/sideBar/sideBar'
import './App.css'

//Hooks: 
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

//imports generales:

//importamos views:

//importmos components:


function App() {
  const {pathname} = useLocation();

  return (
    <div>
      {pathname !== '/' && <SideBar/>}

      <Routes>

      <Route path='/home' element={<Home/>} />

    </Routes>

      {/* vayan creando las orutes que quieran con sus componenetes  */}
    </div>
  )
}

export default App
