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

export class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  read(): Promise<[ChatData]> {
    return this.http.get()
  }

  delete: undefined;
  create: undefined;
  update: undefined;
}