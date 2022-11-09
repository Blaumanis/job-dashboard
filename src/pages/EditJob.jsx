import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { editItem } from '../features/job/jobSlice'

const EditJob = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const { jobs,statuses,types } = useSelector((store) => store.jobs)
  const navigate = useNavigate()
  const pickedJob = jobs.filter((job) => job.id === params.id)
  const { title, company, location, jobStatus, jobType } = pickedJob[0]

  const [values, setValues] = useState({
    title,
    company,
    location,
    jobStatus,
    jobType,
  })

  const handleEditJob = () => {
    setValues({ title: '', company: '', location: '' })
    dispatch(
      editItem({
        id: params.id,
        title: values.title,
        company: values.company,
        location: values.location,
        jobStatus: values.jobStatus,
        jobType: values.jobType,
      })
    )
    toast.success(`${values.title} updated`);
    navigate('/all-jobs')
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
      <h2>Edit Job</h2>
      <form className='dashboard-form'>
        <div className='input-group'>
          <label htmlFor='position'>Position</label>
          <input
            onChange={(e) => setValues({...values,title:e.target.value})}
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
            onChange={(e) => setValues({...values,company:e.target.value})}
            value={values.company}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='jobLocation'>Job Location</label>
          <input
            type='text'
            id='jobLocation'
            onChange={(e) => setValues({...values,location:e.target.value})}
            value={values.location}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='status'>Status</label>
          <select
            id='status'
            value={values.jobStatus}
            onChange={(e) => setValues({...values,jobStatus:e.target.value})}
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
            value={values.jobType}
            onChange={(e) => setValues({...values,jobType:e.target.value})}
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
          <button onClick={(e) => handleEditJob(e)} type='submit' className='btn'>
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default EditJob
