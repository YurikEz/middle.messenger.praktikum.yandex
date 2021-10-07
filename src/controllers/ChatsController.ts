import { ChatsAPI, ChatData } from '../api/ChatsAPI';
import { store } from '../store';
import { setChats } from '../store/chats';

class ChatsController {
  private api: ChatsAPI;

  constructor() {
    this.api = new ChatsAPI()
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