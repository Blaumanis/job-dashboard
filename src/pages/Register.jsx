import React, { useState } from 'react'

import '../styles/_form.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleInput = (e) => {
    setUser(() => ({
      ...user,
      [e.target.name]: e.target.value,
    }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    if (!user) return
    dispatch(login(user))
    navigate('/dashboard')
  }

  return (
    <main className='register-container'>
      <form className='form'>
        <img
          src='https://redux-toolkit-jobster.netlify.app/static/media/logo.35bb8e1d9b5745af32ff148cbee51dfa.svg'
          alt='logo'
        />
        <h2 className='title'>Register</h2>
        <div className='input-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' onChange={handleInput} />
        </div>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' onChange={handleInput}/>
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={handleInput}
          />
        </div>
        <button onClick={(e) => handleClick(e)} className='btn'>
          Submit
        </button>
        <p className='register'>
          Already a member?<Link to='/login'>Login</Link>
        </p>
      </form>
    </main>
  )
}

export default Register
