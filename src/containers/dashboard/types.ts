export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Users {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export enum UserActionTypes {
  USERS_REQUEST = "@@users/feed/USERS_REQUEST",
  USERS_SUCCESS = "@@users/feed/USERS_SUCCESS",
  USERS_ERROR = "@@users/feed/USERS_ERROR",
}

export interface UserState {
  readonly loading: boolean;
  readonly users: Users | null;
  readonly errors: {
    users?: string;
  };
}
