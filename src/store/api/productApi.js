import { createApi } from '@reduxjs/toolkit/query/react';
import createBaseQueryWithReAuth from '../fetch-base-query';
 
// Utility function to build the query string
const buildQueryString = (params) => {
  return Object.keys(params)
    .filter((key) => params[key] !== '')
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join('&');
};
 
// Define your API
export const productApi = createApi({
  reducerPath: 'product',
  baseQuery: createBaseQueryWithReAuth({
    baseUrl: import.meta.env.VITE_APP_BASE_URL || '',
    isAuthCheck:true
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (params) => {
        const queryString = buildQueryString(params);
        const url = `/products?${queryString}`;
        return { url };
      },
    }),
  }),
});
 
// Export hooks for usage in functional components
export const { useGetAllProductsQuery } = productApi;