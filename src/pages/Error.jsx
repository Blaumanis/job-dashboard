import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NotFoundIcon } from '../icons/icons'
import '../styles/_errorPage.scss'

const Error = () => {
  const navigate = useNavigate()
  return (
    <main className='error-page'>
      <button className='btn' onClick={() => navigate(-1)}>
        Go Back
      </button>
      <NotFoundIcon />
      <h1>Page not found</h1>
    </main>
  )
}

export default Error
