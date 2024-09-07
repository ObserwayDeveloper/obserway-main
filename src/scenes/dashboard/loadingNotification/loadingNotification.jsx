import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const NotificationContainer = styled.div`
  position: fixed;
  margin-left: 10%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 5px;
  animation: ${fadeInOut} 2s ease-in-out infinite;
  width: 70%;
  max-width: 500px;
  text-align: center;
`;

const LoadingMessage = styled.p`
  font-size: 18px;
`;

function LoadingNotification() {
  const { t } = useTranslation();

  return (
    <NotificationContainer>
      <LoadingMessage>{t('loading')}</LoadingMessage>
    </NotificationContainer>
  );
}

export default LoadingNotification;
