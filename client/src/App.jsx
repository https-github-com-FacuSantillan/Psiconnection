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
<<<<<<< HEAD
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/home' element={<Home />} />

=======
      {pathname !== '/' && <SideBar/>}

      <Routes>

      <Route path='/home' element={<Home/>} />
>>>>>>> 4b49cb660af7a7e21566018989efd7a9dc6e301c

      </Routes>
    </div>
  )
}

export default App
