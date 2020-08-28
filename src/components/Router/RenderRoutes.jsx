import { Router } from '@reach/router';
import React from 'react';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import NotFound from '../../pages/NotFound/NotFound';

const mapRoutes = (routes) => (
  routes.map((route) => (
    route.private ? (
      <ProtectedRoute key={route.key} {...route}>
        {mapRoutes(route.subRoutes)}
      </ProtectedRoute>
    ) : (
      <PublicRoute key={route.key} {...route}>
        {mapRoutes(route.subRoutes)}
      </PublicRoute>
    )
  ))
);

const RenderRoutes = ({ routes }) => (
  <Router style={{ width: '100%', height: '100%' }}>
    {mapRoutes(routes)}

    <NotFound default />
  </Router>
);

export default RenderRoutes;
