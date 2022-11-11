import React from 'react'
import '../styles/_sidebar.scss'
import { StatsIcon, LookIcon, AddIcon, ProfileIcon } from '../icons/icons'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useCycle } from 'framer-motion'

const Sidebar = () => {
  const handleClick = (e) => {
    const links = e.target.parentElement.childNodes
    links.forEach((link) => link.classList.remove('active'))
    e.target.classList.add('active')
  }
  const [open, cycleOpen] = useCycle(false, true);
  return (
      <motion.aside
        className='side-navbar'
        initial={{ width: 0 }}
        animate={{ width: 250 }}
        exit={{ width: 0 }}
      >
        <img
          className='sidebar-logo'
          src='https://redux-toolkit-jobster.netlify.app/static/media/logo.35bb8e1d9b5745af32ff148cbee51dfa.svg'
          alt='logo'
        />
        <div className='menu-container'>
          <Link onClick={(e) => handleClick(e)} to='/dashboard'>
            <StatsIcon /> Stats
          </Link>
          <Link onClick={(e) => handleClick(e)} to='/all-jobs'>
            <LookIcon /> All Jobs
          </Link>
          <Link onClick={(e) => handleClick(e)} to='/add-job'>
            <AddIcon /> Add Job
          </Link>
          <Link onClick={(e) => handleClick(e)} to='/profile'>
            <ProfileIcon /> Profile
          </Link>
        </div>
      </motion.aside>
  )
}

export default Sidebar
