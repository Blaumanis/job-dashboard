import React from 'react'
import ProfileForm from '../components/ProfileForm'
import '../styles/_profile.scss'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { auth, activeUser } = useSelector((state) => state.auth)
  const {profile} = useSelector((state) => state.profile)

  const user = auth.find(
    (item) => item?.name === activeUser.name
  )

  return (
    <>
      <ProfileForm />
      <section className='user-info'>
        <h2>User info</h2>
        <div className='info-container'>
          <p className='name'>
            Username<span>{profile[0]?.name}</span>
          </p>
          <p className='lastName'>
            Name<span>{profile[0]?.lastName}</span>
          </p>
          <p className='email'>
            Email<span>{user.email || profile[0]?.email}</span>
          </p>
          <p className='location'>
            Location<span>{profile[0]?.location}</span>
          </p>
        </div>
      </section>
    </>
  )
}

export default Profile
