import AuthStore from './authStore';
import UIState from './UIState';
import UsersStore from './usersStore';

class RootStore {
  constructor() {
    this.authStore = new AuthStore(this);
    this.uiState = new UIState(this);
    this.usersStore = new UsersStore(this);

    // this.load();
    // this.autoSave();
    // this.load();
    // autoSave(this, this.saveToLocalStorage.bind(this));
  }

  // @action
  // load() {
  //   console.log('called');
  //   const store = localStorage.getItem('store');
  //   if (store) {
  //     console.log('called', store);
  //     const parsedStore = {};
  //     Object.assign(parsedStore, JSON.parse(store));
  //
  //     extendObservable(this, parsedStore);
  //   }
  // }
  //
  // saveToLocalStorage(json) {
  //   localStorage.setItem('store', json);
  // }
}

export default RootStore;
