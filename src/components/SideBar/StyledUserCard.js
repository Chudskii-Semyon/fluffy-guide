import styled from 'styled-components';
import { WHITE } from '../../styles/colors';

// eslint-disable-next-line import/prefer-default-export
export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  
  img {
  width: 50%;
  contain: content;
  border-radius: 50px;
  }
  
  p {
    color: ${WHITE};
    padding-top: 10px;
    margin: 0;
    cursor: pointer;
  }
  
  p:hover {
    text-decoration: underline;
  }
`;
