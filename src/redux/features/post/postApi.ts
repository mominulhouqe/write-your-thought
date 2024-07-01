import { baseApi } from "../api/baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: ({ searchValue, pageValue, limitValue }) => {
        let url = "/posts/get-all";
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
      providesTags: ["Post"],
    }),
    getSinglePostById: builder.query({
      query: ({ postId = "" }) => ({
        url: `/posts/get-single/${postId}`,
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: "/posts/create-post",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
    addLike: builder.mutation({
      query: ({ postId, ...data }) => ({
        url: `/posts/edit/add-like/${postId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `/posts/delete/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useAddPostMutation,
  useGetAllPostsQuery,
  useGetSinglePostByIdQuery,
  useAddLikeMutation,
  useDeletePostMutation,
} = postApi;

// import { baseApi } from "../api/baseApi";

// const postApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllPosts: builder.query({
//       query: ({ searchValue, pageValue, limitValue }) => {
//         let url = "/posts/get-all";
//         const params = new URLSearchParams();

//         if (searchValue) params.append("search", searchValue);
//         if (pageValue) params.append("page", pageValue);
//         if (limitValue) params.append("limit", limitValue);

//         if (params.toString()) {
//           url += `?${params.toString()}`;
//         }

//         return {
//           url,
//           method: "GET",
//         };
//       },
//       providesTags: ["Post"],
//     }),
//     getPostById: builder.query({
//       query: (postId) => ({
//         url: `/posts/${postId}`,
//         method: "GET",
//       }),
//       providesTags: (result, error, id) => [{ type: "Post", id }],
//     }),
//     addPost: builder.mutation({
//       query: (data) => ({
//         url: "/posts/create-post",
//         method: "POST",
//         body: data,
//       }),
//       invalidatesTags: ["Post"],
//     }),
//     addLike: builder.mutation({
//       query: ({ postId, ...data }) => ({
//         url: `/posts/edit/add-like/${postId}`,
//         method: "PATCH",
//         body: data,
//       }),
//       invalidatesTags: ["Post"],
//     }),
//   }),
// });

// export const {
//   useAddPostMutation,
//   useGetAllPostsQuery,
//   useAddLikeMutation,
//   useGetPostByIdQuery
// } = postApi;
