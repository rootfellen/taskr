import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "./auth/authSlice";

const baseQuery = fetchBaseQuery({
  //? our base url, will be changed to our server url in production mode

  baseUrl: `${import.meta.env.VITE_BASE_URL}`,

  //? to include cookies
  credentials: "include",
  //? once we have a token we will set authorization header, and returning headers from prepareHeaders function
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    // send refresh token to get new access token
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      console.log("User id from our store:", user);
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, userId: user }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
      console.log("REFETCHED REFRESH TOKEN: ", result);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
