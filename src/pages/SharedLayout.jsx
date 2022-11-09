import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import MobileMenu from '../components/MobileMenu'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../styles/index.scss'

const SharedLayout = () => {
  const { isOpen, isMobileOpen } = useSelector((state) => state.nav)

  return (
    <main className='main-container'>
      {isOpen ? <Sidebar /> : <></>}
      {isMobileOpen ? <MobileMenu/> : <></>}
      <div>
        <Navbar />
        <Outlet />
      </div>
    </main>
  )
}

export default SharedLayout
