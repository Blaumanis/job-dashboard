import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AllJobs from './pages/AllJobs'
import AddJob from './pages/AddJob'
import Profile from './pages/Profile'
import EditJob from './pages/EditJob'
import SharedLayout from './pages/SharedLayout'
import ProtectedRoute from './pages/ProtectedRoute'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<SharedLayout />}>
          <Route
            path='dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/all-jobs'
            element={
              <ProtectedRoute>
                <AllJobs />
              </ProtectedRoute>
            }
          />
          <Route
            path='/add-job'
            element={
              <ProtectedRoute>
                <AddJob />
              </ProtectedRoute>
            }
          />
          <Route
            path='/edit-job/:id'
            element={
              <ProtectedRoute>
                <EditJob />
              </ProtectedRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} theme='light' />
    </div>
  )
}

export default App
