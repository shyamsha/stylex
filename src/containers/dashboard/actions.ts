import { UserActionTypes, Users } from "./types";
import { action } from "typesafe-actions";

export const usersRequest = (params: { page: number }) => 
action(UserActionTypes.USERS_REQUEST,params);
export const usersSuccess = (res: Users) =>
action(UserActionTypes.USERS_SUCCESS, res);
export const usersError = (message: Error) =>
action(UserActionTypes.USERS_ERROR, message);
