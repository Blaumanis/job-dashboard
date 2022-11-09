import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { addToList } from '../features/job/jobSlice'
import moment from 'moment'

const AddJob = () => {
  const dispatch = useDispatch()
  const { statuses, types } = useSelector((store) => store.jobs)
  const navigate = useNavigate()

  const [values, setValues] = useState({
    title: '',
    company: '',
    location: '',
    jobStatus: 'interview',
    jobType: 'remote',
    createdAt: Date.now()
  })

  const handleClick = (e) => {
    e.preventDefault()
    if (values.title && values.company && values.location) {
      dispatch(
        addToList({
          id: uuidv4(),
          title: values.title,
          company: values.company,
          location: values.location,
          jobStatus: values.jobStatus,
          jobType: values.jobType,
          createdAt: Date.now()
        })
      )
      toast.success(`${values.title} added to the jobs list`);
      navigate('/all-jobs')
    } else {
      toast.error(`Fill the required fields`);
    }
    setValues({
      title: '',
      company: '',
      location: '',
      jobStatus: 'interview',
      jobType: 'remote',
    })
  }

  const clearFields = () => {
    setValues({
      title: '',
      company: '',
      location: '',
      jobStatus: 'interview',
      jobType: 'remote',
    })
  }

  return (
    <section className='dashboard-form-container'>
      <h2>Add Job</h2>
      <form className='dashboard-form'>
        <div className='input-group'>
          <label htmlFor='position'>Position</label>
          <input
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            value={values.title}
            type='text'
            id='position'
          />
        </div>
        <div className='input-group'>
          <label htmlFor='company'>Company</label>
          <input
            type='text'
            id='company'
            onChange={(e) => setValues({ ...values, company: e.target.value })}
            value={values.company}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='jobLocation'>Job Location</label>
          <input
            type='text'
            id='jobLocation'
            onChange={(e) => setValues({ ...values, location: e.target.value })}
            value={values.location}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='status'>Status</label>
          <select
            id='status'
            onChange={(e) =>
              setValues({ ...values, jobStatus: e.target.value })
            }
            value={values.jobStatus}
          >
            {statuses.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className='input-group'>
          <label htmlFor='jobType'>Job Type</label>
          <select
            id='jobType'
            onChange={(e) =>
              setValues({ ...values, jobType: e.target.value })
            }
            value={values.jobType}
          >
            {types.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className='button-group'>
          <button
            onClick={() => clearFields()}
            type='button'
            className='btn clear'
          >
            Clear
          </button>
          <button onClick={(e) => handleClick(e)} type='submit' className='btn'>
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default AddJob
