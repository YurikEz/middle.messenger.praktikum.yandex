import BaseAPI from './BaseAPI';

export interface SignUpData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface LoginData {
  login: string;
  password: string;
}

export type UserData = Omit<SignUpData, 'password'> & { avatar: string; display_name: string; };

export class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signup(data: SignUpData): Promise<{ id: number }> {
    return this.http.post('/signup', data);
  }

  login(data: LoginData): Promise<void> {
    return this.http.post('/signin', data);
  }

  logout(): Promise<void> {
    return this.http.post('/logout');
  }

  read(): Promise<UserData> {
    return this.http.get('/user')
  }

  delete: undefined;
  create: undefined;
  update: undefined;
}