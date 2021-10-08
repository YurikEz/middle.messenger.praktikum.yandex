import { ChatsAPI, ChatData, createChatProps, addUsersInChatProps } from '../api/ChatsAPI';
import { store } from '../store';
import { setChats, setSelectedChat } from '../store/chats';

class ChatsController {
  private api: ChatsAPI;

  constructor() {
    this.api = new ChatsAPI()
  }

  async createChat(data: createChatProps) {
    try {
      return await this.api.createChat(data);
    } catch (e) {
      alert(`Error: ${e.reason}`);
    }
  }

  async addUsersInChat(data: addUsersInChatProps) {
    try {
      return await this.api.addUsersInChat(data);
    } catch (e) {
      alert(`Error: ${e.reason}`);
    }
  }

  async deleteUsersInChat(data: addUsersInChatProps) {
    try {
      return await this.api.deleteUsersInChat(data);
    } catch (e) {
      alert(`Error: ${e.reason}`);
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
      console.error(e);
    }
  }
}

export default new ChatsController();