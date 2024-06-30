// types.ts
export interface UserAvatar {
    url: string;
  }
  
  export interface UserInfo {
    avatar?: UserAvatar;
    name?: string;
    bio?: string;
    role?: string;
    settings?: string;
    email?: string;
    postsCount?: number;
    followers?: number;
    following?: number;
    recentActivity?: string[];
  }
  