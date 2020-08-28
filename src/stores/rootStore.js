import AuthStore from './authStore';
import UIState from './UIState';
import UsersStore from './usersStore';
//
// const getCircularReplacer = () => {
//   const seen = new WeakSet();
//   return (key, value) => {
//     if (typeof value === 'object' && value !== null) {
//       if (seen.has(value)) {
//         return;
//       }
//       seen.add(value);
//     }
//     return value;
//   };
// };
//
// const autoSave = (store, save) => {
//   console.log('store => ', store);
//   let firstRun = true;
//
//   autorun(() => {
//     const json = JSON.stringify(store, getCircularReplacer());
//
//     console.log(`JSON => ${json}`);
//     // const json = JSON.stringify(toJS(store));
//     if (!firstRun) {
//       save(json);
//     }
//     firstRun = false;
//   });
// };

class RootStore {
  constructor() {
    this.authStore = new AuthStore(this);
    this.uiState = new UIState(this);
    this.usersStore = new UsersStore(this);

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
