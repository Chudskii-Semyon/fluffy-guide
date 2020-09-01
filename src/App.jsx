import io from 'socket.io-client';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Layout } from 'antd';
import GlobalStyles from './styles/globalStyles';
import RenderRoutes from './components/Router/RenderRoutes';
import ROUTES from './routes';
import useRootStore from './hooks/useRootStore';

const App = observer(() => {
  const { usersStore } = useRootStore();

  useEffect(() => {
    usersStore.fetchUser().then((res) => {
      const socket = io('http://localhost:3000');

      socket.on('connect', () => {
        console.log('connected');
      });

      socket.emit('BATTLE_START', { enemyArmyId: 5 });
      socket.on('BATTLE_END', (data) => {
        console.log('RESULT => ', data);
      });
    });
  }, [usersStore]);

  return (
    <div style={{ height: '100%' }}>
      <GlobalStyles />

      <Layout style={{ height: '100%' }}>
        <RenderRoutes routes={ROUTES} />
      </Layout>
    </div>
  );
});

export default App;
