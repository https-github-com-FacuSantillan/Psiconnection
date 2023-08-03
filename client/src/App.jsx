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
import Landing from './views/landing/landing'

//importmos components:

//comentario
function App() {
  const {pathname} = useLocation();

  return (
    <div>
      <Routes>
        {pathname !== '/' && <SideBar/>}
        <Route path='/' element={<Landing />}></Route>
        <Route path='/home' element={<Home />} />

      </Routes>
    </div>
  )
}

export default App

//prueba