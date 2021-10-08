import { UserAPI, SearchUsersProps, UserData, UserUpdatePasswordProps, UserUpdateProfileProps } from '../api/UserAPI';
import { store } from "../store";
import { setUser, setResultSearchUsers, clearResultSearchUsers } from "../store/user";

class UserController {
  private api: UserAPI;

  constructor() {
    this.api = new UserAPI()
  }

  async updateProfile(data: UserUpdateProfileProps) {
    try {
      const user: UserData = await this.api.updateProfile(data);

      store.dispatch(setUser(user));
    } catch (e) {
      alert(`Error: ${e.reason}`);
    }
  }

  async updateAvatar(data: any) {
    try {
      const user: UserData = await this.api.updateAvatar(data);

      store.dispatch(setUser(user));
    } catch (e) {
      alert(`Error: ${e.reason}`);
    }
  }

  async updatePassword(data: UserUpdatePasswordProps) {
    try {
      await this.api.updatePassword(data);
    } catch (e) {
      alert(`Error: ${e.reason}`);
    }
  }

  async searchUsers(data: SearchUsersProps) {
    try {
      const users: UserData[] = await this.api.searchUsers(data);

      store.dispatch(setResultSearchUsers(users));
      return users;
    } catch (e) {
      alert(`Error: ${e.reason}`);
    }
  }

  async clearSearchUsers() {
    store.dispatch(clearResultSearchUsers());
  }
}

export default new UserController();