// src/components/packageTracking/PackageTracking.js
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const PackageTrackingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  min-height: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
  margin: 40px auto;
  position: relative;
  overflow: hidden;
  background-image: url('path_to_your_parallax_image.jpg'); /* Parallax image path */
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  color: #333;
  font-family: 'Arial', sans-serif;
  border: 1px solid #ddd;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8); /* Daha şık bir arka plan efekti için */
    z-index: -1;
  }
`;

const Section = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${({ isLeft }) => (isLeft ? '#f9f9f9' : 'white')};
  border-radius: 8px;
  box-shadow: ${({ isLeft }) => (isLeft ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const TrackingTitle = styled.h2`
  font-size: 28px;
  color: #071952;
  margin-bottom: 20px;
  text-align: center;
`;

const TrackingInput = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const TrackingButton = styled.button`
  background-color: #071952;
  color: #fff;
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  &:hover {
    background-color: #004a75;
  }
`;

const InfoTitle = styled.h3`
  font-size: 22px;
  color: #071952;
  margin-bottom: 15px;
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.6;
`;

const PackageTracking = () => {
  const { t } = useTranslation();

  return (
    <PackageTrackingWrapper>
      <Section isLeft={true}>
        <TrackingTitle>{t('trackYourPackage')}</TrackingTitle>
        <TrackingInput type="text" placeholder={t('enterTrackingNumber')} />
        <TrackingButton>{t('track')}</TrackingButton>
      </Section>
      <Section isLeft={false}>
        <InfoTitle>{t('howToTrack')}</InfoTitle>
        <InfoText>
          {t('trackingInstructions')}
        </InfoText>
        <InfoTitle>{t('commonQuestions')}</InfoTitle>
        <InfoText>
          {t('commonQuestionsList')}
        </InfoText>
      </Section>
    </PackageTrackingWrapper>
  );
};

export default PackageTracking;
