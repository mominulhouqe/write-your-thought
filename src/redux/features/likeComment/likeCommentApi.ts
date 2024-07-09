import { baseApi } from "../api/baseApi";

const likeCommentApi = baseApi.injectEndpoints({
  endpoints: (builder :any) => ({
    // getAllPosts: builder.query({
    //   query: ({ searchValue, pageValue, limitValue }) => {
    //     let url = "/posts/get-all";
    //     const params = new URLSearchParams();

    //     if (searchValue) params.append("search", searchValue);
    //     if (pageValue) params.append("page", pageValue);
    //     if (limitValue) params.append("limit", limitValue);

    //     if (params.toString()) {
    //       url += `?${params.toString()}`;
    //     }

    //     return {
    //       url,
    //       method: "GET",
    //     };
    //   },
    //   providesTags: ["Post"],
    // }),
    // getSingleMemberByMobile: builder.query({
    //   query: ({ mobile = "" }) => ({
    //     url: `/members/member/${mobile}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["Member"],
    // }),
    // addPost: builder.mutation({
    //   query: (data) => ({
    //     url: "/posts/create-post",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Post"],
    // }),
    addComment: builder.mutation({
      query: ({ postId, ...data }:any) => ({
        url: `/posts/add-comment/${postId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["LikeComment", "Post"],
    }),
    getSinglePostComment: builder.query({
      query: ({ postId = "" }) => ({
        url: `/posts/get-comment/${postId}`,
        method: "GET",
      }),
      providesTags: ["LikeComment", "Post"],
    }),
    deleteComment: builder.mutation({
      query: (commentId:any) => ({
        url: `/posts/delete-comment/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["LikeComment", "Post"],
    }),
    hideComment: builder.mutation({
      query: (commentId:any) => ({
        url: `/posts/hide-comment/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["LikeComment", "Post"],
    }),
  }),
});

export const {
  // useAddPostMutation,
  //  useGetAllPostsQuery,
  useAddCommentMutation,
  useGetSinglePostCommentQuery,
  useDeleteCommentMutation,
  useHideCommentMutation,
} = likeCommentApi;
