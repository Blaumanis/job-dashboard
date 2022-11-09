import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Job from '../components/Job'
import '../styles/_allJobs.scss'

const AllJobs = () => {
  const { jobs, types, statuses } = useSelector((state) => state.jobs)
  const [allJobs, setAllJobs] = useState(jobs)
  const [query, setQuery] = useState('')

  const filterByType = (type) => {
    if(type === 'all') {
      setAllJobs(jobs)
      return
    }
    const newJobs = jobs.filter((item)=> item.jobType === type)
    setAllJobs(newJobs)
  }

  const filterByStatus = (status) => {
    if(status === 'all') {
      setAllJobs(jobs)
      return
    }
    const newJobs = jobs.filter((item)=> item.jobStatus === status)
    setAllJobs(newJobs)
  }

  function filterBySearch(items) {
    return items.filter((item) =>
    item.title.toLowerCase().includes(query))
  }

  const filterBySort = (sortItem) => {
    if(sortItem === 'a-z'){
      const sortedArr = [...jobs].sort(function(a,b){
        let x = a.title.toLowerCase()
        let y = b.title.toLowerCase()
        if(x < y) {return -1}
        if(x > y) {return 1}
        return 0;
      })
      setAllJobs(sortedArr)
    }
    if(sortItem === 'z-a'){
      const sortedArr = [...jobs].sort(function(a,b){
        let x = a.title.toLowerCase()
        let y = b.title.toLowerCase()
        if(x < y) {return 1}
        if(x > y) {return -1}
        return 0;
      })
      setAllJobs(sortedArr)
    }
    if(sortItem === 'latest'){
      const sortedArr = [...jobs].sort(function(a,b){
        let x = a.createdAt
        let y = b.createdAt
        return y - x;
      })
      setAllJobs(sortedArr)
    }
    if(sortItem === 'oldest'){
      const sortedArr = [...jobs].sort(function(a,b){
        let x = a.createdAt
        let y = b.createdAt
        return x - y;
      })
      setAllJobs(sortedArr)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(()=> {
    setAllJobs(jobs)
  },[jobs])

  return (
    <>
      <section className='dashboard-form-container'>
        <h2>Search Form</h2>
        <form onSubmit={e => onSubmit(e)} className='dashboard-form'>
          <div className='input-group'>
            <label htmlFor='search'>Search</label>
            <input
              type='search'
              id='search'
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='status'>Status</label>
            <select id='status' onChange={(e) => filterByStatus(e.target.value)}>
              <option value='all'>all</option>
              {statuses.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className='input-group'>
            <label htmlFor='type'>Type</label>
            <select id='type' onChange={(e) => filterByType(e.target.value)}>
              <option value='all'>all</option>
              {types.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className='input-group'>
            <label htmlFor='sort'>Sort</label>
            <select id='sort' onChange={e=> filterBySort(e.target.value)}>
              <option value='latest'>latest</option>
              <option value='oldest'>oldest</option>
              <option value='a-z'>a-z</option>
              <option value='z-a'>z-a</option>
            </select>
          </div>
          <div className='button-group'>
            <button type='submit' className='btn clear-filters'>Clear Filters</button>
          </div>
        </form>
      </section>
      <h2 className='jobs-total'>{jobs.length} Jobs Found</h2>
      <section className='jobs-container'>
        {filterBySearch(allJobs).map((job) => (
          <Job key={job.id} {...job} />
        ))}
      </section>
    </>
  )
}

export default AllJobs
