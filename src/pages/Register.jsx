import React, { useState } from 'react'
import { toast } from 'react-toastify'
import '../styles/_form.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../features/auth/authSlice'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleClick = (e) => {
    e.preventDefault()
    if (user.name && user.email && user.password) {
      navigate('/dashboard')
      dispatch(
        register({
          name: user.name,
          email: user.email,
          password: user.password,
        })
      )
    } else {
      toast.error(`Please provide required fields`)
    }
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
          <input
            type='text'
            id='name'
            name='name'
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            value={user.name}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
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
