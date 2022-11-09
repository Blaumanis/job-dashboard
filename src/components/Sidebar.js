import React from 'react'
import '../styles/_sidebar.scss'
import { StatsIcon, LookIcon, AddIcon, ProfileIcon } from '../icons/icons'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='side-navbar'>
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
    </aside>
  )
}

export default Sidebar
