import React from 'react'
import '../styles/_dashboard.scss'
import { ApplicationsIcon, InterviewsIcon, JobsIcon } from '../icons/icons'
import { useSelector } from 'react-redux'

const StatsBoxes = () => {
  const {jobs} = useSelector((state)=> state.jobs)
  const pendingJobs = jobs.filter((job) => job.jobStatus === 'pending')
  const interviewJobs = jobs.filter((job) => job.jobStatus === 'interview')
  const declinedJobs = jobs.filter((job) => job.jobStatus === 'declined')
  

  return (
    <section className='stats-boxes'>
      <article className='stats-box applications-box'>
        <div className='top'>
          <h4>{pendingJobs.length}</h4>
          <span className='icon'>
            <ApplicationsIcon />
          </span>
        </div>
        <div className='title'>
          <h3>Pending Applications</h3>
        </div>
      </article>
      <article className='stats-box interviews-box'>
        <div className='top'>
          <h4>{interviewJobs.length}</h4>
          <span className='icon'>
            <InterviewsIcon />
          </span>
        </div>
        <div className='title'>
          <h3>Interviews Scheduled</h3>
        </div>
      </article>
      <article className='stats-box jobs-box'>
        <div className='top'>
          <h4>{declinedJobs.length}</h4>
          <span className='icon'>
            <JobsIcon />
          </span>
        </div>
        <div className='title'>
          <h3>Jobs Declined</h3>
        </div>
      </article>
    </section>
  )
}

export default StatsBoxes
