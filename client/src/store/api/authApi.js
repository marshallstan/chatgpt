import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (build) => ({
    postLogin: build.mutation({
      query: (payload) => ({
        url: 'auth/login',
        method: 'POST',
        body: payload
      })
    }),
    postSignUp: build.mutation({
      query: (payload) => ({
        url: 'auth/signup',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const {
  usePostLoginMutation,
  usePostSignUpMutation
} = authApi
