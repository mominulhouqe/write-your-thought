/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../api/baseApi";

// Define types for the query parameters and body data
// interface GetAllPostsParams {
//   searchValue?: string;
//   pageValue?: number;
//   limitValue?: number;
// }

// interface GetAllPostsByUserIdParams extends GetAllPostsParams {
//   userId: string;
// }

// interface AddLikeParams {
//   postId: string;
//   [key: string]: any; // Add specific fields if known
// }

interface PostIdParam {
  postId: string;
}

const postApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllPosts: builder.query({
      query: ({ searchValue, pageValue, limitValue }: any) => {
        let url = "/posts/get-all";
        const params = new URLSearchParams();

        if (searchValue) params.append("search", searchValue);
        if (pageValue) params.append("page", pageValue.toString());
        if (limitValue) params.append("limit", limitValue.toString());

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
    getAllPostsByUserId: builder.query({
      query: ({ userId, searchValue, pageValue, limitValue }:any) => {
        let url = `/posts/get-posts/${userId}`;
        const params = new URLSearchParams();

        if (searchValue) params.append("search", searchValue);
        if (pageValue) params.append("page", pageValue.toString());
        if (limitValue) params.append("limit", limitValue.toString());

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
      query: ({ postId }: PostIdParam) => ({
        url: `/posts/get-single/${postId}`,
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    addPost: builder.mutation({
      query: (data:any) => ({
        url: "/posts/create-post",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
    addLike: builder.mutation({
      query: ({ postId, ...data }:any) => ({
        url: `/posts/edit/add-like/${postId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (postId:string) => ({
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
  useGetAllPostsByUserIdQuery,
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
