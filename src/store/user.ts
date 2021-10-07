import { Action } from '../utils/store';
import { UserData } from '../api/UserAPI';

const SET_USER = 'user/SET';
const SET_RESULT_SEARCH_USERS = 'user/SET_RESULT_SEARCH_USERS';
const DELETE_USER = 'user/DELETE';

export const setUser = (user: UserData) => ({
  type: SET_USER,
  payload: user,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const setResultSearchUsers = (users: UserData[]) => ({
  type: SET_RESULT_SEARCH_USERS,
  payload: users,
});



export default (state = { profile: null, search: null }, action: Action) => {
  switch (action.type) {
    case SET_USER:
      return { profile: action.payload, search: null };
    case SET_RESULT_SEARCH_USERS:
      return { profile: state.profile, search: action.payload };
    case DELETE_USER:
      return { profile: null, search: null };
    default:
      return state;
  }
}