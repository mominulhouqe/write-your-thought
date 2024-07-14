/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    registerUser: builder.mutation({
      query: (formData: any) => ({
        url: "/users/create-user",
        method: "POST",
        body: formData,
      }),
    }),
    login: builder.mutation({
      query: (credentials: any) => ({
        url: "/users/auth-user-login",
        method: "POST",
        body: credentials,
      }),
    }),
    logoutReq: builder.mutation({
      query: () => ({
        url: "/users/auth-user-logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useLogoutReqMutation,
} = authApi;
