import { createSlice} from '@reduxjs/toolkit'

const users =
  localStorage.getItem('users') !== null
    ? JSON.parse(localStorage.getItem('users'))
    : []

const initialState = {
  auth: users,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,action) => {
      state.auth.push(action.payload)
      localStorage.setItem(
        'users',
        JSON.stringify(state.auth.map((item) => item))
      )
      state.isAuthenticated = true
    },
    logout: (state,action) => {
      localStorage.removeItem('users')
      console.log(state.isAuthenticated);
      state.isAuthenticated = false;
    }
  },
})

export const {login,logout} = authSlice.actions
export default authSlice.reducer
