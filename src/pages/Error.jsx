import React from 'react'
import { Link } from 'react-router-dom'
import { NotFoundIcon } from '../icons/icons'
import '../styles/_errorPage.scss'

const Error = () => {
  return (
    <main className='error-page'>
        <Link to='/'  className='btn'>Home</Link>
        <NotFoundIcon />
        <h1>Page not found</h1>
    </main>
  )
}

export default Error