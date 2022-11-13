import React, { useState } from 'react'
import '../styles/_form.scss'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/authSlice'

const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name: '',
    password: '',
  })

  const handleClick = (e) => {
    e.preventDefault()
    if (user.name && user.password) {
      dispatch(
        login({
          name: user.name,
          password: user.password,
        })
      )
      if (isAuthenticated === 'false') {
        navigate('/login')
      }
      navigate('/dashboard')
    } else {
      toast.error(`Please provide required fields`)
    }
  }

  return (
    <main className='login-container'>
      <form className='form'>
        <img
          src='https://redux-toolkit-jobster.netlify.app/static/media/logo.35bb8e1d9b5745af32ff148cbee51dfa.svg'
          alt='logo'
        />
        <h2 className='title'>Login</h2>
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
          Not a member yet?<Link to='/register'>Register</Link>
        </p>
      </form>
    </main>
  )
}

export default Login
