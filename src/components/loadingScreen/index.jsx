import React from 'react';
import Lottie from 'react-lottie';
import loadingAnimation from '../../constant/json/loading.json'; 
import styled, { css } from 'styled-components';

const LoadingWrapper = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  opacity: 0.9;
  transition: opacity 0.5s ease-out;
`;

const LoadingScreen = ({ isVisible }) => {
  return (
    <LoadingWrapper isVisible={isVisible}>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: loadingAnimation
        }}
        height={200}
        width={200}
      />
    </LoadingWrapper>
  );
};

export default LoadingScreen;
