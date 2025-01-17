import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Main/Home'
import Tentang from './page/Main/Tentang'
import Layanan from './page/Main/Layanan'

const App = () => {
  return (
  <Routes>
    <Route path="/Home" element={<Home/>} />
    <Route path="/Tentang" element={<Tentang/>} />
    <Route path="/Layanan" element={<Layanan/>} />
  </Routes>
  )
}

export default App