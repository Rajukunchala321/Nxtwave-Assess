import React from 'react'
import './index.css'
export const Navbar = () => {
  return (
    <nav>
        <div className='nav-container'>
            <img className='website-logo' src='../nxtassess-logo.png' alt='website-logo' />
            <button className='logout-btn'>Logout</button>
        </div>

    </nav>
  )
}
