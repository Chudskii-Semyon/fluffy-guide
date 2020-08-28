import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const StyledContent = styled(Content)`
  background-color: #fff;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  width: 100%;
  height: 100%;
`;

export const StyledMain = styled.main`
  height: 100%;
  width: 100%;
  padding-left: 25px;
  //padding: 25px;
`;
