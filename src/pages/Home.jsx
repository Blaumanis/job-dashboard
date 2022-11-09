import React from 'react'
import '../styles/_home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <header className='header'>
        <img
          src='https://redux-toolkit-jobster.netlify.app/static/media/logo.35bb8e1d9b5745af32ff148cbee51dfa.svg'
          alt='logo'
        />
      </header>
      <main className='container'>
        <section className='text-container'>
          <h1 className='title'>
            Job <span>Tracking</span> App
          </h1>
          <p className='desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            pariatur perferendis nam distinctio ipsa! Provident illo aspernatur
            explicabo dolorum nulla?
          </p>
          <Link className='btn' to='/login'>
            Login/Register
          </Link>
        </section>
        <section className="img-container">
            <img src="https://redux-toolkit-jobster.netlify.app/static/media/main.17b316de742b3a1202078c5ae18c8261.svg" alt="hero" />
        </section>
      </main>
    </>
  )
}

export default Home
