import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  max-width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  background-color: #088395;
  border: none;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #35A29F;
  }
`;

const AcceptButton = styled.button`
  background-color: #071952;
  border: none;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #088395;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 14px;

  input {
    margin-right: 10px;
  }
`;

const CookieDescription = styled.p`
  font-size: 12px;
  color: #555;
  margin-top: -5px; /* Daha kompakt görünüm için */
`;

const CookieManage = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>{t('cookieManagement.manageTitle')}</h2>
        <p>{t('cookieManagement.manageDescription')}</p>

        <CheckboxContainer>
          <CheckboxLabel>
            <input type="checkbox" defaultChecked disabled />
            {t('cookieCategories.essential')}
          </CheckboxLabel>
          <CookieDescription>{t('cookieCategories.essentialDescription')}</CookieDescription>

          <CheckboxLabel>
            <input type="checkbox" />
            {t('cookieCategories.analytics')}
          </CheckboxLabel>
          <CookieDescription>{t('cookieCategories.analyticsDescription')}</CookieDescription>

          <CheckboxLabel>
            <input type="checkbox" />
            {t('cookieCategories.marketing')}
          </CheckboxLabel>
          <CookieDescription>{t('cookieCategories.marketingDescription')}</CookieDescription>
        </CheckboxContainer>

        <AcceptButton onClick={onClose}>{t('buttons.acceptSelected')}</AcceptButton>
        <CloseButton onClick={onClose}>{t('buttons.close')}</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CookieManage;
