import React from 'react'
import '../styles/_dashboardForm.scss'

const DashboardForm = () => {
  return (
    <section className='dashboard-form-container'>
      <h2>Profile</h2>
      <form className='dashboard-form'>
        <div className='input-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' />
        </div>
        <div className='input-group'>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' />
        </div>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' />
        </div>
        <div className='input-group'>
          <label htmlFor='location'>Location</label>
          <input type='text' id='location' />
        </div>
        <button className='btn'>Save Changes</button>
      </form>
    </section>
  )
}

export default DashboardForm
