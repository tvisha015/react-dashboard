import { createApi } from '@reduxjs/toolkit/query/react';
import createBaseQueryWithReAuth from '../fetch-base-query';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: createBaseQueryWithReAuth({
    baseUrl: import.meta.env.VITE_APP_BASE_URL || '',
    isAuthCheck:false
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authAPI;