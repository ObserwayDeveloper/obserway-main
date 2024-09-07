import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import AcceptButton from './acceptButton'; 
import CookieManage from './manageBanner';

const parallaxAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 20px;
  }
`;

const slideUpAnimation = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Banner = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10%;
  transform: translateX(-20%);
  background: rgba(7, 25, 82, 0.9);
  color: #f2f7a1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  animation: ${slideUpAnimation} 0.3s ease-out forwards, ${parallaxAnimation} 10s linear infinite;
  width: 80%;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 16px;
  text-align: center;
  padding-bottom: 10px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(7, 25, 82, 0.5);
  z-index: 999;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showManageModal, setShowManageModal] = useState(false);
  const { t } = useTranslation(); // i18next kullanımı

  useEffect(() => {
    const cookiesAccepted = getCookie('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie('cookiesAccepted', 'true', 365);
    setShowBanner(false);
  };

  const handleManage = () => {
    setShowManageModal(true);
  };

  const handleCloseModal = () => {
    setShowManageModal(false);
  };

  const setCookie = (name, value, days) => {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    const secure = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${name}=${value || ''}${expires}; path=/; SameSite=Lax${secure}`;
  };

  const getCookie = (name) => {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      let c = cookie.trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  return (
    <>
      <Overlay show={showBanner} />
      {showBanner && (
        <Banner>
          <Text>{t('cookieBanner.message')}</Text>
          <ButtonContainer>
            <AcceptButton onClick={handleAccept} />
            <button onClick={handleManage}>{t('cookieBanner.manageCookies')}</button>
          </ButtonContainer>
        </Banner>
      )}
      {showManageModal && <CookieManage onClose={handleCloseModal} />}
    </>
  );
};

export default CookieBanner;
