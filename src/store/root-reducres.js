import { combineReducers } from '@reduxjs/toolkit'
import {authAPI} from '@/store/api/login';

// Import all API here
// import { getAddressAPI } from '@/store/api/get-address'

// Import all slices here
import authSlice from '@/store/slices/authSlice';

// Root Reducer - Combine all slices here
export const rootReducer = combineReducers({
  [authAPI.reducerPath]: authAPI.reducer,
  auth: authSlice,
})

// Middleware - Extend this array with necessary middleware
export const concatMiddleware = [
  authAPI.middleware,
]