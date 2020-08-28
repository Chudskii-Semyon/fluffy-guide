import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import { StyledContent, StyledMain, Wrapper } from './StyledDashboard';

const Dashboard = ({ children }) => (
  <Wrapper>
    <SideBar path="/dashboard" />
    <StyledMain>
      <StyledContent>{children}</StyledContent>
    </StyledMain>
  </Wrapper>
);

export default Dashboard;
