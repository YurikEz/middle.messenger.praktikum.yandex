import { Action } from '../utils/store';
import { ChatData } from '../api/ChatsAPI';

const SET_CHATS = 'chats/SET';

export const setChats = (chats: [ChatData]) => ({
  type: SET_CHATS,
  payload: chats,
});

export default (state = { allChats: null, error: null }, action: Action) => {
  switch (action.type) {
    case SET_CHATS:
      return { allChats: action.payload, error: null };
    default:
      return state;
  }
}