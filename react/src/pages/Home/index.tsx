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
    </div>
  )
}

export default Home
