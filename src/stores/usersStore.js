import { action, extendObservable, observable } from 'mobx';
import UsersService from '../services/usersService';

class UsersStore {
  @observable id

  @observable name

  @observable email

  @observable createdAt

  @observable updatedAt

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.usersService = new UsersService();
  }

  @action
  updateUser(updatedUser) {
    extendObservable(this, updatedUser);
  }
}

export default UsersStore;
