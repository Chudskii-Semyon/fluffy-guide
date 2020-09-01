import {
  action, computed, extendObservable, observable,
} from 'mobx';
import UsersService from '../services/usersService';
import WithLocalStorage from './withLocalStorage';

class User {
  @observable id

  @observable name

  @observable email

  @observable createdAt

  @observable updatedAt

  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  @action
  updateUser(updatedUser) {
    extendObservable(this, updatedUser);
  }
}

class UsersStore extends WithLocalStorage {
  @observable user

  // @observable id
  //
  // @observable name
  //
  // @observable email
  //
  // @observable createdAt
  //
  // @observable updatedAt

  constructor(rootStore) {
    super();

    this.rootStore = rootStore;
    this.usersService = new UsersService();

    this.user = new User({});
    this.load();
    // this.autoSave(this.user, this.saveToLocalStorage(this.user));
  }

  // @action
  // updateUser(updatedUser) {
  //   extendObservable(this, updatedUser);
  // }

  @action
  async fetchUser() {
    const user = await this.usersService.getMe();

    this.setUser(user);
    this.autoSave(this.user, this.saveToLocalStorage(this.user));
    // this.updateUser(user);
  }

  @action
  setUser(user) {
    // this.user = new User(user);
    this.user.updateUser(user);
  }

  // @computed
  // get user() {
  //   return this.user;
  // return {
  //   id: this.id,
  //   name: this.name,
  //   email: this.email,
  //   createdAt: this.createdAt,
  //   updatedAt: this.updatedAt,
  // };
  // }
  // @computed
  // async user() {
  //   if (!this.id) {
  //     const user = await this.usersService.getMe();
  //
  //     this.updateUser(user);
  //     return user;
  //   }
  //
  //   return this;
  // }
}

export default UsersStore;
