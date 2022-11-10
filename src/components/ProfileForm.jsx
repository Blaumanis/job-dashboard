import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../styles/_dashboardForm.scss'
import { saveCredentials } from '../features/profile/profileSlice'

const ProfileForm = () => {
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    location: '',
  })

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(
      saveCredentials({
        name: values.name,
        lastName: values.lastName,
        email: values.email,
        location: values.location,
      })
    )

    setValues({
      name: '',
      lastName: '',
      email: '',
      location: '',
    })
  }

  return (
    <section className='dashboard-form-container'>
      <h2>Profile</h2>
      <form className='dashboard-form'>
        <div className='input-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            value={values.name}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            onChange={(e) => setValues({ ...values, lastName: e.target.value })}
            value={values.lastName}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            value={values.email}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            id='location'
            onChange={(e) => setValues({ ...values, location: e.target.value })}
            value={values.location}
          />
        </div>
        <button onClick={e=> handleClick(e)} type='submit' className='btn'>Save Changes</button>
      </form>
    </section>
  )
}

export default ProfileForm
