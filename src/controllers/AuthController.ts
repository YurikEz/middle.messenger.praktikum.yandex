import { AuthAPI, LoginData, SignUpData } from '../api/AuthAPI';
import { UserData } from '../api/UserAPI';
import { store } from '../store';
import { deleteUser, setUser } from '../store/user';

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI()
  }

  async signup(data: SignUpData) {
    try {
      await this.api.signup(data);
      await this.fetchUser();
    } catch (e) {
      console.error(e.reason);
    }
  }

  async login(data: LoginData) {
    try {
      await this.api.login(data);
      await this.fetchUser();
    } catch (e) {
      console.error(e.reason);
    }
  }

  async logout() {
    try {
      await this.api.logout();

      store.dispatch(deleteUser());
    } catch (e) {
      console.error(e.reason);
    }
  }

  async fetchUser(): Promise<UserData | void> {
    try {
      const user = await this.api.read();

      store.dispatch(setUser(user));

      return user;
    } catch (e) {
      store.dispatch(deleteUser());
      console.error(e.reason);
    }
  }
}

export default new AuthController();