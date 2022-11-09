import { createSlice } from '@reduxjs/toolkit'

const users =
  localStorage.getItem('users') !== null
    ? JSON.parse(localStorage.getItem('users'))
    : []

const token =
  localStorage.getItem('token') !== null
    ? JSON.stringify(localStorage.getItem('token'))
    : 'false'

const initialState = {
  auth: users,
  isAuthenticated: token,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.auth.push(action.payload)
      localStorage.setItem(
        'users',
        JSON.stringify(state.auth.map((item) => item))
      )
      state.isAuthenticated = 'true'
      localStorage.setItem(
        'token',
        JSON.stringify((state.isAuthenticated = 'true'))
      )
    },
    logout: (state, action) => {
      state.isAuthenticated = 'false'
      state.auth.push(action.payload)
      localStorage.setItem(
        'users',
        JSON.stringify(state.auth = [])
      )
      localStorage.setItem(
        'token',
        JSON.stringify((state.isAuthenticated = 'false'))
      )
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
