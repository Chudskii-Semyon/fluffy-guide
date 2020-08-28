import { useContext } from 'react';
import RootStoreContext from '../stores/rootStoreContext';

const useRootStore = () => useContext(RootStoreContext);

export default useRootStore;
