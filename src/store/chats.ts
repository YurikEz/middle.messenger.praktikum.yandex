import { ChatData, ChatMessage } from '../api/ChatsAPI';
import { Action } from '../utils/store';

const SET_CHATS = 'chats/SET';
const SET_SELECTED_CHAT = 'chats/SET_SELECTED_CHAT';
const ADD_MESSAGE = 'chats/ADD_MESSAGE';

export const setChats = (chats: [ChatData]) => ({
  type: SET_CHATS,
  payload: chats,
});

export const setSelectedChat = (chat: ChatData) => ({
  type: SET_SELECTED_CHAT,
  payload: chat,
});

export const addMessage = (message: ChatMessage) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export default (state = { allChats: null, selectedChat: null }, action: Action) => {
  switch (action.type) {
    case SET_CHATS:
      return { allChats: action.payload, selectedChat: null };
    case SET_SELECTED_CHAT:
      return { allChats: state.allChats , selectedChat: action.payload };
    case ADD_MESSAGE:
      const newChat: ChatData = Object.assign({}, state.selectedChat);
      if (!newChat.messages) {
        newChat.messages = [];
      }

      newChat.messages.push(action.payload);
      return { ...state, selectedChat: newChat };
    default:
      return state;
  }
}