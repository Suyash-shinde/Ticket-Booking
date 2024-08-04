import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes,Outlet, useNavigate} from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home';
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
