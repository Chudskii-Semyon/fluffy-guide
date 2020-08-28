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
    usersStore.getMe();
  });

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
