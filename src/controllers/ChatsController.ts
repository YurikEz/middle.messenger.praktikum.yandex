import { ChatsAPI, ChatData, createChatProps, addUsersInChatProps, ChatTokenData, ChatTokenResponse, ChatMessage } from '../api/ChatsAPI';
import { store } from '../store';
import { setChats, setSelectedChat, addMessage } from '../store/chats';
import isArray from '../utils/helpers/isArray';

class ChatsController {
  private api: ChatsAPI;

  constructor() {
    this.api = new ChatsAPI()
  }

  async createChat(data: createChatProps) {
    try {
      return await this.api.createChat(data);
    } catch (e) {
      console.error(e.reason);
    }
  }

  async addUsersInChat(data: addUsersInChatProps) {
    try {
      return await this.api.addUsersInChat(data);
    } catch (e) {
      console.error(e.reason);
    }
  }

  async deleteUsersInChat(data: addUsersInChatProps) {
    try {
      return await this.api.deleteUsersInChat(data);
    } catch (e) {
      console.error(e.reason);
    }
  }

  setSelectedChat(data: ChatData) {
    store.dispatch(setSelectedChat(data));
  }

  async fetchChats(): Promise<[ChatData] | void> {
    try {
      const chats = await this.api.read();

      store.dispatch(setChats(chats));

      return chats;
    } catch (e) {
      console.error(e.reason);
    }
  }

  async getToken(data: ChatTokenData): Promise<ChatTokenResponse | undefined> {
    try {
      return this.api.getToken(data);
    } catch (e) {
      console.error(e.reason);
    }
  }

  addMessage(message: ChatMessage | ChatMessage[]) {
    if (isArray(message)) {
      for (let i = 0; i < (message as ChatMessage[]).length; i++) {
        store.dispatch(addMessage((message as ChatMessage[])[i]));
      }
    } else {
      store.dispatch(addMessage(message as ChatMessage));
    }
  }
}

export default new ChatsController();