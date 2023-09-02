import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-link'>
        <Link to = "/" className='nav-text'>Home</Link>
        <Link to = "/show-books" className='nav-text'>Show Books</Link>
        <Link to = "/add-books" className='nav-text'>Add Books</Link>
    </nav>
  )
}

export default Navbar