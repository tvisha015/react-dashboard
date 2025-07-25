import {
  BaseQueryFn,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'

let isHandling401 = false

const createBaseQueryWithReAuth = ({
  baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '',
  apiKey,
} = {}) => {
  const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      //   const token = (getState() as RootState).auth?.token

      //   if (authCheck && token) headers.set('Authorization', `Bearer ${token}`)

      if (apiKey) headers.set('x-api-key', apiKey)
      return headers
    },
  })

  return async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions)

    if (result.error?.status === 401 && !isHandling401) {
      isHandling401 = true

      //   api.dispatch(resetAuth())
      localStorage.clear()
      setTimeout(() => (isHandling401 = false), 3000)
      location.replace('/login')

      return { ...result, error: undefined }
    }

    if (result.error?.status === 408) {
      return {
        error: {
          status: 'FETCH_ERROR',
          error: 'Request timed out. Please try again.',
        },
      }
    }

    return result
  }
}

export default createBaseQueryWithReAuth