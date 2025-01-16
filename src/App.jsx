import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Component/Home'

const App = () => {
  return (
  <Routes>
    <Route path="/Home" element={<Home/>} />
  </Routes>
  )
}

export default App