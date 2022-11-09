import { createSlice } from '@reduxjs/toolkit'
import jobItems from '../../data/jobs'
import { toast } from 'react-toastify'

const items =
  localStorage.getItem('jobs') !== null
    ? JSON.parse(localStorage.getItem('jobs'))
    : jobItems

const initialState = {
  jobs: items,
  statuses: ['pending', 'declined', 'interview'],
  types: ['full-time', 'part-time', 'remote', 'internship'],
}

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.jobs.push(action.payload)
      localStorage.setItem(
        'jobs',
        JSON.stringify(state.jobs.map((item) => item))
      )
    },
    removeItem: (state, action) => {
      const jobID = action.payload
      state.jobs = state.jobs.filter((job) => job.id !== jobID)
      localStorage.setItem('jobs', JSON.stringify(state.jobs))
      toast.success(`Item removed from the jobs list`)
    },
    editItem: (state, action) => {
      const { id, title, company, location, jobStatus, jobType } =
        action.payload
      const pickedJob = state.jobs.find((job) => job.id === id)
      if (pickedJob) {
        pickedJob.title = title
        pickedJob.company = company
        pickedJob.location = location
        pickedJob.jobStatus = jobStatus
        pickedJob.jobType = jobType
        localStorage.setItem(
          'jobs',
          JSON.stringify(state.jobs.map((item) => item))
        )
      }
    },
  },
})

export const { removeItem, addToList, editItem } = jobsSlice.actions
export default jobsSlice.reducer
