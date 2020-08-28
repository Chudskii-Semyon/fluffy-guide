import styled from 'styled-components';
import { Button, Layout } from 'antd';

const { Sider } = Layout;

export const StyledSider = styled(Sider)`
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;

  .ant-layout-sider-children {
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    height: 100%;
    padding-bottom: 25px;
  }
`;

export const LogoutButton = styled(Button)`
  background-color: #001529;
  color: #fff;
  width: 90%;
  margin: 0 auto;
  
  &:hover {
    background: #1890ff;
    color: #fff;
  }
`;
