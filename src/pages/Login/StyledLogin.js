import styled from 'styled-components';
import { Card } from 'antd';

export const LoginCard = styled(Card)`
  width: 340px;
  border-radius: 10px;
  
  .ant-card-body {
    height: 100%;
  }
`;

export const DontHaveAccount = styled.div`
  width: 100%;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  p {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
