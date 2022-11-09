import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  isOpen: false,
  isMobileOpen: false
}

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.isOpen = !state.isOpen
    },
    toggleMobileMenu: (state,action) => {
      state.isMobileOpen = !state.isMobileOpen
    }
  },
})

export const { toggleSidebar, toggleMobileMenu } = navSlice.actions
export default navSlice.reducer
