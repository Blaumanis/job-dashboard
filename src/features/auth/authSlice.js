import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

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
  activeUser: {}
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      // extracting values from localStorage
      const storageArr = JSON.parse(localStorage?.getItem('users'))
      const storageName = storageArr?.find(
        (item) => item?.name === action?.payload?.name
      )
      const storageEmail = storageArr?.find(
        (item) => item?.email === action?.payload?.email
      )
      if (
        action?.payload?.name !== storageName?.name ||
        action?.payload?.email !== storageEmail?.email
      ) {
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
        toast.success(`Greetings ${action.payload.name}`)
      } else {
        localStorage.setItem(
          'token',
          JSON.stringify((state.isAuthenticated = 'false'))
        )
        toast.error(`User with this name allready exists`)
        return
      }
    },
    login: (state, action) => {
      // extracting values from localStorage
      const storageArr = JSON.parse(localStorage?.getItem('users'))
      const storageName = storageArr?.find(
        (item) => item?.name === action?.payload?.name
      )
      const storagePassword = storageArr?.find(
        (item) => item?.password === action?.payload?.password
      )
      if (
        action?.payload?.name !== storageName?.name ||
        action?.payload?.password !== storagePassword?.password
      ) {
        localStorage.setItem(
          'token',
          JSON.stringify((state.isAuthenticated = 'false'))
        )
        toast.error(`Credentials are invalid`)
      } else {
        localStorage.setItem(
          'token',
          JSON.stringify((state.isAuthenticated = 'true'))
        )
        // setting up active user
        state.activeUser = action.payload
        toast.success(`Greetings ${action.payload.name}`)
      }
    },
    logout: (state, action) => {
      localStorage.setItem(
        'token',
        JSON.stringify((state.isAuthenticated = 'false'))
      )
    },
  },
})

export const { register, login, logout } = authSlice.actions
export default authSlice.reducer
