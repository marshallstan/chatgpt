import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { usePostLoginMutation, usePostSignUpMutation } from '@/store/api/authApi'
import { setUser, setSecret } from '@/store/reducer/userSlice'

const Login = () => {
  const dispatch = useDispatch()
  const [isRegister, setIsRegister] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [triggerLogin, resultLogin] = usePostLoginMutation()
  const [triggerSignUp] = usePostSignUpMutation()

  const handleLogin = () => {
    triggerLogin({ username, password })
  }

  const handleRegister = () => {
    triggerSignUp({ username, password })
  }

  useEffect(() => {
    if (resultLogin.data?.response) {
      dispatch(setUser(username))
      dispatch(setSecret(password))
    }
  }, [resultLogin.data])

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="title">CHATGPT APP</h2>
        <p
          className="register-change"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? 'Already a user?' : 'Are you a new user?'}
        </p>

        <div>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login-actions">
          {isRegister ? (
            <button type="button" onClick={handleRegister}>
              Register
            </button>
          ) : (
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
