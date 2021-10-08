import BaseAPI from './BaseAPI';
import { UserData } from './UserAPI';

export interface ChatData {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  last_message: {
    user: UserData,
    time: string,
    content: string,
  },
}

export interface createChatProps {
  title: string,
}

export interface addUsersInChatProps {
  users: number[],
  chatId: number,
}

export class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  createChat(data: createChatProps): Promise<void> {
    return this.http.post('', data);
  }

  addUsersInChat(data: addUsersInChatProps): Promise<void> {
    return this.http.put('/users', data);
  }

  deleteUsersInChat(data: addUsersInChatProps): Promise<void> {
    return this.http.delete('/users', data);
  }

  read(): Promise<[ChatData]> {
    return this.http.get()
  }

  delete: undefined;
  create: undefined;
  update: undefined;
}