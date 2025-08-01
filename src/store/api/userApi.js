import { createApi } from '@reduxjs/toolkit/query/react';
import createBaseQueryWithReAuth from '../fetch-base-query';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: createBaseQueryWithReAuth({
    baseUrl: import.meta.env.VITE_APP_BASE_URL || '',
    isAuthCheck:true
  }),
  endpoints: (builder) => ({
    userProfile: builder.query({
      query: () => ({
        url: '/auth/profile',
        method: 'GET',
      }),
    }),
  }),

});

export const { useUserProfileQuery } = userApi;