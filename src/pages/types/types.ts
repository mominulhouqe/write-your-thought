// types.ts

export interface UserAvatar {
  url: string;
}

export interface UserInfo {
  user_id: string;
  name: string;
  avatar?: UserAvatar;
  bio?: string;
  role?: string;
  settings?: string;
  email?: string;
  postsCount?: number;
  followers?: number;
  following?: number;
  recentActivity?: string[];
}

export interface Like {
  user_id: string;
}

export interface PostAdditional {
  likes: Like[];
}

export interface Post {
  _id: string;
  post_id: string;
  createdAt: string;
  createdBy: string;
  post_description: string;
  post_image?: {
    url: string;
  };
  post_additional?: PostAdditional;
  user_info: UserInfo;
  total_comment: number;
}

export interface Comment {
  id: string;
  comment: string;
  createdAt: string;
  user_id: string;
  avatar: {
    url: string;
  };
  name: string;
}

export interface CommentsSectionProps {
  totalComment: number;
  post: Post;
}
