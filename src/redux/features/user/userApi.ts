/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../api/baseApi";


const userApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    fetchCurrentUser: builder.mutation({
      query: () => ({
        url: `/users/find-current-user`,
        method: "POST",
      }),
      providesTags:<any> ["User"],
    }),
    fetchLoginSuccess: builder.query({
      query: () => ({
        url: `/users/google-login/success`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    fetchLoginFailure: builder.query({
      query: () => ({
        url: `/users/google-login/failure`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getAllUsers: builder.query({
      query: ({ searchValue, pageValue, limitValue }: any) => {
        let url = "/users/get-all";
        const params = new URLSearchParams();

        if (searchValue) params.append("search", searchValue);
        if (pageValue) params.append("page", pageValue);
        if (limitValue) params.append("limit", limitValue);

        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),
  }),
});

export const { 
  useFetchCurrentUserMutation, 
  useFetchLoginSuccessQuery, 
  useFetchLoginFailureQuery, 
  useGetAllUsersQuery 
} = userApi;

/* 

import { baseApi } from "../api/baseApi";
import { MutationDefinition, UseMutation } from '@reduxjs/toolkit/query';

// Define the User type based on the expected response
interface User {
  id: string;
  name: string;
  email: string;
  // Add other user properties as needed
}

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchCurrentUser: builder.mutation<User, void>({
      query: () => ({
        url: `/users/find-current-user`,
        method: "POST",
      }),
      invalidatesTags: ["User"],  // Use invalidatesTags for mutations
    }),
  }),
});

// Explicitly type the hook
export const useFetchCurrentUserMutation: UseMutation<MutationDefinition<void, any, "User", User, any>> = userApi.useFetchCurrentUserMutation;

export default userApi;

*/
