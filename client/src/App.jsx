import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chat from '@/components/Chat'
import Login from '@/components/Login'
import AuthCheck from '@/components/AuthCheck'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <AuthCheck navigateTo="/chat">
                <Login />
              </AuthCheck>
            )}
          />
          <Route
            path="/chat"
            element={(
              <AuthCheck>
                <Chat />
              </AuthCheck>
            )}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
