import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Job from '../components/Job'
import '../styles/_allJobs.scss'

const AllJobs = () => {
  const {jobs,types,statuses} = useSelector((state) => state.jobs)

  const [query,setQuery] = useState('')
  const [filter,setFilter] = useState('')

  const filterJobs = (items) => {
    return items.filter((item)=> 
    item.title.toLowerCase().includes(query)) 
  }

  return (
    <>
    <section className='dashboard-form-container'>
      <h2>Search Form</h2>
      <form className='dashboard-form'>
        <div className='input-group'>
          <label htmlFor='search'>Search</label>
          <input type='search' id='search' onChange={e=> setQuery(e.target.value)}/>
        </div>
        <div className='input-group'>
          <label htmlFor='status'>Status</label>
          <select id='status'>
            <option value='all'>all</option>
            <option value='interview'>interview</option>
            <option value='declined'>declined</option>
            <option value='pending'>pending</option>
          </select>
        </div>
        <div className='input-group'>
          <label htmlFor='type'>Type</label>
          <select id='type'>
            <option value='all'>all</option>
            <option value='full-time'>full-time</option>
            <option value='part-time'>part-time</option>
            <option value='remote'>remote</option>
            <option value='internship'>internship</option>
          </select>
        </div>
        <div className='input-group'>
          <label htmlFor='sort'>Sort</label>
          <select id='sort'>
            <option value='latest'>latest</option>
            <option value='oldest'>oldest</option>
            <option value='a-z'>a-z</option>
            <option value='z-a'>z-a</option>
          </select>
        </div>
        <div className='button-group'>
          <button className='btn clear-filters'>Clear Filters</button>
        </div>
      </form>
    </section>
      <h2 className='jobs-total'>{jobs.length} Jobs Found</h2>
    <section className="jobs-container">
      {filterJobs(jobs).map((job) => (
        <Job key={job.id} {...job} />
      ))}
    </section>
    </>
  )
}

export default AllJobs
