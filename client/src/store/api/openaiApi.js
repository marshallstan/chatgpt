import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const openaiApi = createApi({
  reducerPath: 'openai',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (build) => ({
    postAiText: build.mutation({
      query: (payload) => ({
        url: 'openai/text',
        method: 'POST',
        body: payload
      })
    }),
    postAiCode: build.mutation({
      query: (payload) => ({
        url: 'openai/code',
        method: 'POST',
        body: payload
      })
    }),
    postAiAssist: build.mutation({
      query: (payload) => ({
        url: 'openai/assist',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const {
  usePostAiTextMutation,
  usePostAiCodeMutation,
  usePostAiAssistMutation
} = openaiApi
