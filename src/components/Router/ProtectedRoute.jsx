import React from 'react';
import { observer } from 'mobx-react';
import { Redirect } from '@reach/router';
import useRootStore from '../../hooks/useRootStore';

const ProtectedRoute = observer(({ component: Component, ...rest }) => {
  const { uiState } = useRootStore();
  return (
    <>
      {uiState.authenticated ? <Component {...rest} /> : <Redirect from="" to="/login" noThrow />}
    </>
  );
});

export default ProtectedRoute;
