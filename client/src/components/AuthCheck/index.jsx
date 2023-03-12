import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthCheck = ({ navigateTo, children }) => {
  const location = useLocation()
  const userInfo = useSelector(state => state.userInfo)
  const { user, secret } = userInfo
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
      : (
        <Navigate
          to="/"
          state={{
            preLocation: location.pathname
          }}
        />
      )
  )
}

export default AuthCheck
