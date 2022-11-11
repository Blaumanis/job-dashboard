import React from 'react'
import {
  CloseIcon,
  StatsIcon,
  AddIcon,
  ProfileIcon,
  LookIcon,
} from '../icons/icons'
import { Link } from 'react-router-dom'
import '../styles/_mobileMenu.scss'
import { toggleMobileMenu } from '../features/nav/navSlice'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

const MobileMenu = () => {
  const dispatch = useDispatch()

  return (
    <motion.section className='mobile-menu'
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    >
      <div className='inside-container'>
        <button onClick={() => dispatch(toggleMobileMenu())}>
          <CloseIcon className='close-icon' />
        </button>
        <img
          className='logo'
          src='https://redux-toolkit-jobster.netlify.app/static/media/logo.35bb8e1d9b5745af32ff148cbee51dfa.svg'
          alt='logo'
        />
        <div className='menu-container'>
          <Link onClick={() => dispatch(toggleMobileMenu())} to='/dashboard'>
            <StatsIcon /> Stats
          </Link>
          <Link onClick={() => dispatch(toggleMobileMenu())} to='/all-jobs'>
            <LookIcon /> All Jobs
          </Link>
          <Link onClick={() => dispatch(toggleMobileMenu())} to='/add-job'>
            <AddIcon /> Add Job
          </Link>
          <Link onClick={() => dispatch(toggleMobileMenu())} to='/profile'>
            <ProfileIcon /> Profile
          </Link>
        </div>
      </div>
    </motion.section>
  )
}

export default MobileMenu
