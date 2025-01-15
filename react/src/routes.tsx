import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TextHighlight from './pages/TextHighlight'
import Home from './pages/Home'
import MultiProgress from './pages/MultiProgress'
import AnimHamMenu from './pages/AnimHamMenu'
import AlphaKeyboard from './pages/AlphaKeyboard'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/text-highlight' element={<TextHighlight />} />
        <Route path='/multi-progress' element={<MultiProgress />} />
        <Route path='/ham-menu' element={<AnimHamMenu />} />
        <Route path='/alpha-keyboard' element={<AlphaKeyboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
