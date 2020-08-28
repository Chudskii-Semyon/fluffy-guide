import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  action, configure, observable, reaction,
} from 'mobx';
import App from './App';
import RootStore from './stores/rootStore';
import RootStoreContextProvider from './stores/rootStoreContextProvider';

configure({ enforceActions: 'observed' });

const rootStoreContext = new RootStore();
// const store = new RootStore();
// const { uiState, authStore } = new RootStore();
// const store = observable.box({ authStore, uiState });
// // const store = observable({
// //   authStore: rootStoreContext.authStore,
// //   uiState: rootStoreContext.uiState,
// // });

// reaction(() => JSON.stringify(store), (json) => {
//   console.log('STORE => ', store);
//   localStorage.setItem('store', json);
// }, {
//   delay: 500,
// });
//
// const json = localStorage.getItem('store');
// if (json) {
//   action(() => Object.assign(store, JSON.parse(json)));
// }

ReactDOM.render(
  <React.StrictMode>
    {/* <RootStoreContextProvider value={store}> */}
    <RootStoreContextProvider value={rootStoreContext}>
      <App />
    </RootStoreContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
