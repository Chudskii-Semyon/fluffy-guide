import React from 'react';
import { observer } from 'mobx-react';
import { navigate } from '@reach/router';
import NavigationMenu from './NavigationMenu';
import UserCard from './UserCard';
import useRootStore from '../../hooks/useRootStore';
import { LogoutButton, StyledSider } from './StyledSideBar';

const SideBar = observer(() => {
  const { authStore } = useRootStore();

  const handleLogout = async () => {
    authStore.logout();
    await navigate('/login');
  };

  return (
    <StyledSider>
      <div>
        <UserCard />
        <NavigationMenu />
      </div>

      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </StyledSider>
  );
});

export default SideBar;
