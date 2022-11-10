import React from 'react'
import DashboardForm from '../components/DashboardForm'
import '../styles/_profile.scss'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { auth, activeUser } = useSelector((state) => state.auth)

  const user = auth.find(
    (item) => item?.name === activeUser.name
  )

  return (
    <>
      <DashboardForm />
      <section className='user-info'>
        <h2>User info</h2>
        <div className='info-container'>
          <p className='name'>
            Username<span>john</span>
          </p>
          <p className='lastName'>
            Name<span>doe</span>
          </p>
          <p className='email'>
            Email<span>{user.email}</span>
          </p>
          <p className='location'>
            Location<span>riga</span>
          </p>
        </div>
      </section>
    </>
  )
}

export default Profile
