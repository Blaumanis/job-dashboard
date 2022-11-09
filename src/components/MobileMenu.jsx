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

const MobileMenu = () => {
    const dispatch = useDispatch()
    

  return (
    <section className='mobile-menu'>
      <div className='inside-container'>
        <button onClick={()=> dispatch(toggleMobileMenu())}>
        <CloseIcon className='close-icon' />
        </button>
        <img
          className='logo'
          src='https://redux-toolkit-jobster.netlify.app/static/media/logo.35bb8e1d9b5745af32ff148cbee51dfa.svg'
          alt='logo'
        />
        <div className='menu-container'>
          <Link className='active' to='/dashboard'>
            <StatsIcon /> Stats
          </Link>
          <Link to='/all-jobs'>
            <LookIcon /> All Jobs
          </Link>
          <Link to='/add-job'>
            <AddIcon /> Add Job
          </Link>
          <Link to='/profile'>
            <ProfileIcon /> Profile
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MobileMenu
