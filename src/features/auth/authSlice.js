import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

// setting up localStorage
const users =
  localStorage.getItem('users') !== null
    ? JSON.parse(localStorage.getItem('users'))
    : []

const storageActiveUser =
  localStorage.getItem('activeUser') !== null
    ? JSON.parse(localStorage.getItem('activeUser'))
    : {}

const token =
  localStorage.getItem('token') !== null
    ? (localStorage.getItem('token'))
    : 'false'

// initialState
const initialState = {
  auth: users,
  isAuthenticated: token,
  activeUser: storageActiveUser,
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
      // if user does not exist then register
      if (
        action?.payload?.name !== storageName?.name ||
        action?.payload?.email !== storageEmail?.email
      ) {
        state.auth.push(action.payload)
        localStorage.setItem(
          'users',
          JSON.stringify(state.auth.map((item) => item))
        )
        toast.success(`User ${action.payload.name} is created`)
        // else do not register
      } else {
        localStorage.setItem(
          'token',
          (state.isAuthenticated = 'false')
        )
        toast.error(`User with this name or email allready exists`)
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
      // if user does not exist do not login
      if (
        action?.payload?.name !== storageName?.name ||
        action?.payload?.password !== storagePassword?.password
      ) {
        toast.error(`Credentials are invalid`)
        // else login
      } else {
        // setting up active user
        state.activeUser = action.payload
        localStorage.setItem('activeUser', JSON.stringify(state.activeUser))
        toast.success(`Greetings ${action.payload.name}`)
        localStorage.setItem(
          'token',
          (state.isAuthenticated = 'true')
        )
      }
    },
    // logout
    logout: (state) => {
      localStorage.setItem(
        'token',
        (state.isAuthenticated = 'false')
      )
      localStorage.setItem('activeUser', JSON.stringify({}))
    },
  },
})

export const { register, login, logout } = authSlice.actions
export default authSlice.reducer
