import { AuthAPI, LoginData, SignUpData, UserData } from '../api/AuthAPI';
import { store } from '../store';
import { deleteUser, setError, setUser } from '../store/user';

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
      alert(`Error: ${e.reason}`);
      store.dispatch(setError(e as { reason: string }));
    }
  }

  async login(data: LoginData) {
    try {
      await this.api.login(data);
      await this.fetchUser();
    } catch (e) {
      alert(`Error: ${e.reason}`);
      store.dispatch(setError(e as { reason: string }));
    }
  }

  async logout() {
    try {
      await this.api.logout();

      store.dispatch(deleteUser());
    } catch (e) {
      alert(`Error: ${e.reason}`);
      store.dispatch(setError(e as { reason: string }));
    }
  }

  async fetchUser(): Promise<UserData | void> {
    try {
      const user = await this.api.read();

      store.dispatch(setUser(user));

      return user;
    } catch (e) {
      store.dispatch(deleteUser());
    }
  }
}

export default new AuthController();