import { baseApi } from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
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

export const { useLoginMutation, useLogoutReqMutation } = authApi;
