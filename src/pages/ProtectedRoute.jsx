import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {

  const { isAuthenticated } = useSelector((state) => state.auth)
  if (isAuthenticated === 'false') {
    return <Navigate to='/login' />
  }
  return children
}
export default ProtectedRoute
