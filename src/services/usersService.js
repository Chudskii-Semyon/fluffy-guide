import api from './axios';

class UsersService {
  constructor() {
    this.api = api;
  }

  async getMe(authData) {
    const { data } = await this.api.get('/users/me', authData);
    return data;
  }

  async signIn(credentials) {
    const { data } = await this.api.post('/auth/signin', credentials);

    return data;
  }
}

export default UsersService;
