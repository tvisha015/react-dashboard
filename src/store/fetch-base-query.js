import {
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

let isHandling401 = false;

const createBaseQueryWithReAuth = ({
  baseUrl = import.meta.env.VITE_APP_BASE_URL || "",
  isAuthCheck = false,
} = {}) => {
  const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      console.log("🚀 ~ createBaseQueryWithReAuth ~ getState:", getState());
      const token = getState().auth?.accessToken;
      console.log("🚀 ~ createBaseQueryWithReAuth ~ token:", token);

      if (isAuthCheck && token) headers.set("Authorization", `Bearer ${token}`);

      return headers;
    },
  });

  return async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401 && !isHandling401) {
      isHandling401 = true;

      //   api.dispatch(resetAuth())
      localStorage.clear();
      setTimeout(() => (isHandling401 = false), 3000);
      location.replace("/login");

      return { ...result, error: undefined };
    }

    if (result.error?.status === 408) {
      return {
        error: {
          status: "FETCH_ERROR",
          error: "Request timed out. Please try again.",
        },
      };
    }

    return result;
  };
};

export default createBaseQueryWithReAuth;
