import React from 'react'
import DashboardForm from '../components/DashboardForm'
import '../styles/_profile.scss'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { auth, activeUser } = useSelector((state) => state.auth)
  console.log(activeUser)
  console.log(auth)

  const user = auth.find(
    (item) => item?.name === activeUser.name
  )

  return (
    <>
      <DashboardForm />
      <section className='user-info'>
        <h2>User info</h2>
        <div className='info-container'>
          <p className='username'>
            Username<span>{activeUser.name}</span>
          </p>
          <p className='lastName'>
            Name<span>john doe</span>
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
