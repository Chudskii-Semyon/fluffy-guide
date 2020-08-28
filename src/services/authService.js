import api from './axios';

class AuthService {
  constructor() {
    this.api = api;
  }

  async signUp(authData) {
    const { data } = await this.api.post('/auth/signup', authData);
    return data;
  }

  async signIn(credentials) {
    const { data } = await this.api.post('/auth/signin', credentials);

    return data;
  }
}

export default AuthService;
