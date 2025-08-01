import { combineReducers } from '@reduxjs/toolkit'

// Import all API here
import { authAPI } from '@/store/api/login';
import { userApi } from '@/store/api/userApi';

// Import all slices here
import authSlice from '@/store/slices/authSlice';
import { productApi } from './api/productApi';

// Root Reducer - Combine all slices here
export const rootReducer = combineReducers({
  [authAPI.reducerPath]: authAPI.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [productApi.reducerPath]: productApi.reducer,

  auth: authSlice,  
})

// Middleware - Extend this array with necessary middleware
export const concatMiddleware = [
  authAPI.middleware,
  userApi.middleware,
  productApi.middleware,
]