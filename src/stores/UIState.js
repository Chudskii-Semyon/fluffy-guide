import { action, observable } from 'mobx';
import { AUTH_TOKEN } from '../styles/constants';

class UIState {
    @observable authenticated = false

    @observable navigationMenuCollapsed = false

    constructor(rootStore) {
      this.rootStore = rootStore;

      const token = localStorage.getItem(AUTH_TOKEN);
      this.setAuthenticated(!!token);
    }

    @action
    setAuthenticated(updateTo) {
      this.authenticated = updateTo;
    }

    @action
    toggleNavigationMenuCollapsed() {
      this.navigationMenuCollapsed = !this.navigationMenuCollapsed;
    }
}

export default UIState;
