import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className='section'>
      <div className='header__logo'>
      <img src={logo} alt='Logo'></img>
      </div>
      <div className='header__title'>
        <p>Booking Table</p>
      </div>
    </div>
  )
}

export default Header