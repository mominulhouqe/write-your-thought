import { baseApi } from "../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchCurrentUser: builder.mutation({
      query: () => ({
        url: `/users/find-current-user`,
        method: "POST",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useFetchCurrentUserMutation } = userApi;

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
