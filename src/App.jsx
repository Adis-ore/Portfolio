import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from "./component/Navbar"
import Footer from './Component/Footer'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
