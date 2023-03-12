import { configureStore } from '@reduxjs/toolkit'
import userReduce from './reducer/userSlice'

const store = configureStore({
  reducer: {
    userInfo: userReduce
  }
})

export default store
