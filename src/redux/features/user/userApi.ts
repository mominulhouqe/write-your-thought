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
