import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import userReduce from './reducer/userSlice'
import { openaiApi } from '@/store/api/openaiApi'
import { authApi } from '@/store/api/authApi'

const store = configureStore({
  reducer: {
    userInfo: userReduce,
    [openaiApi.reducerPath]: openaiApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(
        openaiApi.middleware,
        authApi.middleware
      )
  }
})
setupListeners(store.dispatch)

export default store
