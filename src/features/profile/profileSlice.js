import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const storageProfile =
  localStorage.getItem('profile') !== null
    ? JSON.parse(localStorage.getItem('profile'))
    : []

const initialState = {
  profile: storageProfile,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveCredentials: (state, action) => {
      state.profile.push(action.payload)
      localStorage.setItem(
        'storageProfile',
        JSON.stringify(state.profile.map((item)=>item))
        )
        toast.success('Profile successfully updated')
    },
  },
})

export const { saveCredentials } = profileSlice.actions
export default profileSlice.reducer
