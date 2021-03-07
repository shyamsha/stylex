import { UserState, UserActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: UserState = {
  loading: false,
  users: null,
  errors: {
    users: undefined,
  },
};

type A<T = string, U = any> = { type: T; payload: U };

const reducer: Reducer<UserState, A> = (
  state: UserState = initialState,
  action: A
) => {
  switch (action.type) {
    case UserActionTypes.USERS_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, users: undefined },
      };
    case UserActionTypes.USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case UserActionTypes.USERS_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, users: action.payload },
      };
    
    default:
      return state;
  }
};

export { initialState as usersInitialState, reducer as usersReducer };
