import { baseApi } from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (formData) => ({
        url: "/users/create-user",
        method: "POST",
        body: formData,
      }),
    }),
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

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useLogoutReqMutation,
} = authApi;
