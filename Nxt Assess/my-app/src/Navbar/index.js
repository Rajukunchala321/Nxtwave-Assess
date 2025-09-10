import React from 'react'
import './index.css';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom'
export const Navbar = () => {
    const navigate = useNavigate();

 
  const handleLogout = ()=>{
     Cookies.remove('jwtToken');
     navigate('/login', {replace:true})
  }
  return (
    <nav>
        <div className='nav-container'>
            <img className='website-logo' src='../nxtassess-logo.png' alt='website-logo' />
            <button onClick={handleLogout} className='logout-btn'>Logout</button>
        </div>

    </nav>
  )
}
