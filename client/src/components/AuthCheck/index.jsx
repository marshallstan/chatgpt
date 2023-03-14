import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthCheck = ({ navigateTo, children }) => {
  const { user, secret } = useSelector(state => state.userInfo)
  const isAuth = Boolean(user) && Boolean(secret)

  if (navigateTo) {
    if (isAuth) {
      return <Navigate to={navigateTo} />
    } else {
      return children
    }
  }

  return (
    isAuth
      ? children
      : <Navigate to="/" />
  )
}

export default AuthCheck
