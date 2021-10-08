import { Action } from '../utils/store';
import { ChatData } from '../api/ChatsAPI';

const SET_CHATS = 'chats/SET';
const SET_SELECTED_CHAT = 'chats/SET_SELECTED_CHAT';

export const setChats = (chats: [ChatData]) => ({
  type: SET_CHATS,
  payload: chats,
});

export const setSelectedChat = (chat: ChatData) => ({
  type: SET_SELECTED_CHAT,
  payload: chat,
});

export default (state = { allChats: null, selectedChat: null }, action: Action) => {
  switch (action.type) {
    case SET_CHATS:
      return { allChats: action.payload, selectedChat: null };
    case SET_SELECTED_CHAT:
      return { allChats: state.allChats , selectedChat: action.payload };
    default:
      return state;
  }
}