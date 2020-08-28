import { Redirect } from '@reach/router';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import ArmyConfiguration from './pages/ArmyConfiguration/ArmyConfiguration';
import Signup from './pages/Signup/Signup';

const ROUTES = [
  {
    path: 'dashboard',
    key: 'DASHBOARD',
    private: true,
    // exact: true,
    component: Dashboard,
    subRoutes: [
      {
        path: '/army',
        key: 'ARMY_CONFIGURATION',
        private: true,
        // exact: true,
        component: ArmyConfiguration,
        subRoutes: [],
      },
      {
        path: '/battle',
        key: 'BATTLE',
        private: true,
        // exact: true,
        component: ArmyConfiguration,
        subRoutes: [],
      },
      {
        path: '/',
        key: 'REDIRECT_DASHBOARD',
        private: true,
        // exact: true,
        to: '/dashboard/army',
        noThrow: true,
        component: Redirect,
        subRoutes: [],
      },
    ],
  },
  {
    path: '/login',
    key: 'LOGIN',
    private: false,
    // exact: true,
    component: Login,
    subRoutes: [],
  },
  {
    path: '/signup',
    key: 'SIGNUP',
    private: false,
    // exact: true,
    component: Signup,
    subRoutes: [],
  },
];

export default ROUTES;
