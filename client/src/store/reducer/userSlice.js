import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    secret: null
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    setSecret(state, action) {
      state.secret = action.payload
    }
  }
})

export default userSlice.reducer

export const { setUser, setSecret } = userSlice.actions
