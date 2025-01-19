import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Home = () => {
  return (
    <div className='home_nav-links'>
      <Link to='/'>Home</Link>
      <Link to='/multi-progress'>Multi Progress</Link>
      <Link to='/text-highlight'>Text Highlight</Link>
      <Link to='/alpha-keyboard'>Alphabet Keyboard</Link>
      <Link to='/ham-menu'>Animated Screen Menu</Link>
    </div>
  )
}

export default Home
