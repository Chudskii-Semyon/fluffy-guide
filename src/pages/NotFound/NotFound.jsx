import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';

const NotFound = () => (
  <StyledWrapper>
    <StyledBubble className="babble" />
    <StyledBubble className="babble" />
    <StyledBubble className="babble" />
    <StyledBubble className="babble" />
    <StyledBubble className="babble" />

    <h1>404</h1>
    <p>
      It looks like you are lost...
      <br />
      That is a trouble?
    </p>
    <button type="button" onClick={() => navigate('/dashboard/army')}>Go back</button>
  </StyledWrapper>
);

const StyledBubble = styled.div`
  background: linear-gradient(#1890ff,rgb(0 21 41));
  //background: linear-gradient(#c6c6c6,#818181);
  border-radius: 50%;
  box-shadow: 0 30px 15px rgba(#000, .15);
  position: absolute;
  
  &:before, &:after {
      content: '';
      background: linear-gradient(rgb(0 21 41), #1890ff);
      border-radius: 50%;
      box-shadow: 0 30px 15px rgba(#000, .15);
      position: absolute;
    }
    &:nth-child(1) {
      top: 15vh;
      left: 15vw;
      height: 22vmin;
      width: 22vmin;
      &:before {
        width: 13vmin;
        height: 13vmin;
        bottom: -25vh;
        right: -10vmin;
      }
    }
    &:nth-child(2) {
      top: 20vh;
      left: 38vw;
      height: 10vmin;
      width: 10vmin;
      &:before {
        width: 5vmin;
        height: 5vmin;
        bottom: -10vh;
        left: -8vmin;
      }
    }
    &:nth-child(3) {
      top: 12vh;
      right: 30vw;
      height: 13vmin;
      width: 13vmin;
      &:before {
        width: 3vmin;
        height: 3vmin;
        bottom: -15vh;
        left: -18vmin;
        z-index: 6;
      }
    }
    &:nth-child(4) {
      top: 25vh;
      right: 18vw;
      height: 18vmin;
      width: 18vmin;
      &:before {
        width: 7vmin;
        height: 7vmin;
        bottom: -10vmin;
        left: -15vmin;
      }
    }
    &:nth-child(5) {
      top: 60vh;
      right: 18vw;
      height: 28vmin;
      width: 28vmin;
      &:before {
        width: 10vmin;
        height: 10vmin;
        bottom: 5vmin;
        left: -25vmin;
      }
    }
`;

const BLUE = '#203075';
const LIGHT_BLUE = '#203075';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 5;
  height: 100vh;
  &:before, &:after {
      content: '';
      background: linear-gradient(${BLUE},${LIGHT_BLUE});
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }
  &:before {
    background: linear-gradient(${BLUE},${LIGHT_BLUE});
  }
  
  //html, body {
  //  height: 100vh;
  //&:before, &:after {
  //    content: '';
  //    background: linear-gradient($c-1,$c-2);
  //    border-radius: 50%;
  //    position: absolute;
  //    top: 50%;
  //    left: 50%;
  //    transform: translate(-50%, -50%);
  //}
  //&:before {
  //  background: linear-gradient($c-2,$c-1);
  //}
  //}
  
  html {
    background: linear-gradient(${BLUE},${LIGHT_BLUE});
    overflow: hidden;
    &:before {
      height: 105vmax;
      width: 105vmax;
      z-index: -4;
    }
    &:after {
      height: 80vmax;
      width: 80vmax;
      z-index: -3;
    }
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-family: 'Varela Round', Sans-serif;
    text-shadow: 0 30px 10px rgba(#000, .15);
    &:before {
      height: 60vmax;
      width: 60vmax;
      z-index: -2;
    }
    &:after {
      height: 40vmax;
      width: 40vmax;
      z-index: -1;
    }
  }
  
  p {
    font-size: 18px;
    margin-top: 0;
  }
  
  h1 {
    font-size: 95px;
    margin: 0;
  }
  
  button {
    background: linear-gradient(rgb(0 21 41), #1890ff);
    padding: 0 12px;
    border: none;
    border-radius: 20px;
    box-shadow: 0 30px 15px rgba(#000, .15);  outline: none;
    color: #FFF;
    font: 400 16px/2.5 Nunito,'Varela Round', Sans-serif;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export default NotFound;
