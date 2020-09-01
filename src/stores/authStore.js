import { action, observable } from 'mobx';
import AuthService from '../services/authService';
import { AUTH_TOKEN } from '../constants';

class AuthStore {
  @observable authToken = ''

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.authService = new AuthService();

    const token = localStorage.getItem(AUTH_TOKEN);
    this.setAuthToken(token);
  }

  @action
  async signIn(userCredentials) {
    try {
      const data = await this.authService.signIn(userCredentials);

      localStorage.setItem(AUTH_TOKEN, data.token);

      this.setAuthToken(data.token);
      this.rootStore.uiState.setAuthenticated(true);
      this.rootStore.usersStore.setUser(data.user);
    } catch (error) {
      console.error('user authentication failed. Error ', error.message);
      throw error;
    }
  }

  @action
  async signUp(authData) {
    try {
      const data = await this.authService.signUp(authData);

      this.setAuthToken(data.token);
      this.rootStore.usersStore.updateUser(data.user);
    } catch (error) {
      console.error('user registration failed. Error ', error.message);
      throw error;
    }
  }

  @action
  logout() {
    localStorage.removeItem(AUTH_TOKEN);
    this.rootStore.uiState.setAuthenticated(false);
    this.setAuthToken('');
  }

  @action
  setAuthToken(token) {
    this.authToken = token;
  }
}

export default AuthStore;
