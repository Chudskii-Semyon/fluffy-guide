import { action, autorun, extendObservable } from 'mobx';
import { getCircularReplacer } from '../utils';

class WithLocalStorage {
  @action
  autoSave = (store, save) => {
    console.log('store => ', store);
    let firstRun = true;

    autorun(() => {
      const json = JSON.stringify(store, getCircularReplacer());

      console.log(`JSON => ${json}`);
      // const json = JSON.stringify(toJS(store));
      if (!firstRun) {
        save(json);
      }
      firstRun = false;
    });
  };

  @action
  load() {
    console.log('called');
    const store = localStorage.getItem('store');
    if (store) {
      console.log('called store is not empty', this, store);
      const parsedStore = {};
      Object.assign(parsedStore, JSON.parse(store));

      extendObservable(this, parsedStore);
    }
  }

  saveToLocalStorage(json) {
    const str = JSON.stringify(json, getCircularReplacer());
    localStorage.setItem('store', str);
  }
}

export default WithLocalStorage;
