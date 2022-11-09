import React from 'react'
import { LocationIcon, DateIcon, TypeIcon } from '../icons/icons'
import { useDispatch } from 'react-redux'
import { removeItem } from '../features/job/jobSlice'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Job = ({
  id,
  title,
  createdAt,
  jobStatus,
  jobType,
  location,
  company,
}) => {
  const dispatch = useDispatch()
  const date = moment(createdAt).format('MMM Do, YYYY')
  let firstChar = company.charAt(0)

  return (
    <article className='job-card'>
      <div className='top'>
        <h2>{firstChar}</h2>
        <div>
          <h3 className='job-title'>{title}</h3>
          <h4 className='company-name'>{company}</h4>
        </div>
      </div>
      <div className='middle'>
        <h4 className='location'>
          <LocationIcon /> {location}
        </h4>
        <h4 className='date'>
          <DateIcon /> {date}
        </h4>
        <h4 className='type'>
          <TypeIcon /> {jobType}
        </h4>
        <h4
          className={
            jobStatus === 'interview'
              ? 'interview'
              : jobStatus === 'declined'
              ? 'declined'
              : 'pending'
          }
        >
          {jobStatus}
        </h4>
      </div>
      <div className='bottom'>
        <Link to={`/edit-job/${id}`} className='btn edit'>
          Edit
        </Link>
        <button onClick={() => dispatch(removeItem(id))} className='btn delete'>
          Delete
        </button>
      </div>
    </article>
  )
}

export default Job
