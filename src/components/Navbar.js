import React, { useState } from 'react'
import { ArrowDownIcon, MenuIcon, UserIcon } from '../icons/icons'
import '../styles/_navbar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar, toggleMobileMenu } from '../features/nav/navSlice'
import { logout } from '../features/auth/authSlice'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const dispatch = useDispatch()
  const { isOpen, isMobileOpen } = useSelector((state) => state.nav)
  const { auth } = useSelector((state) => state.auth)

  const [isClicked, setIsClicked] = useState(false)

  const handleToggler = () => {
    dispatch(toggleSidebar())
    dispatch(toggleMobileMenu())
    if (isOpen) {
      isMobileOpen = false
    } else {
      isMobileOpen = false
    }
    if (isMobileOpen) {
      isOpen = false
    } else {
      isOpen = false
    }
  }

  return (
    <nav className={isOpen ? 'top-navbar' : 'top-navbar full'}>
      <div className='wrapper'>
        <div onClick={() => handleToggler()}>
          <MenuIcon />
        </div>
        <h2>Dashboard</h2>
        <div className='logout-container'>
          <button
            onClick={() => setIsClicked(!isClicked)}
            className='btn logout-btn'
          >
            <UserIcon />
            {auth[0].name}
            <ArrowDownIcon />
          </button>
          {isClicked ? (
            <p className='logout' onClick={() => dispatch(logout())}>
              Logout
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar