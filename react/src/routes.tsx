import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TextHighlight from './pages/TextHighlight'
import Home from './pages/Home'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/text-highlight' element={<TextHighlight />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
