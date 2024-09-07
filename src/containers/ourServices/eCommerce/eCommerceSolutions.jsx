import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // MUI WhatsApp icon import

// Styled components
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background: linear-gradient(135deg, rgba(7, 25, 82, 0.9), rgba(8, 131, 149, 0.9));
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
  color: #333;
`;

const HeaderContainer = styled.div`
  margin-bottom: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #071952;
  margin-bottom: 10px;
`;

const DescriptionContainer = styled.div`
  margin-bottom: 20px;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: left;
  max-width: 80%;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  line-height: 1.8;
`;

const FeatureItem = styled.li`
  margin-bottom: 10px;
  position: relative;
  padding-left: 20px;
  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #088395;
    font-weight: bold;
  }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background-color: #071952;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    background-color: #088395;
    transform: scale(1.05);
  }
`;

const IconWrapper = styled.div`
  margin-right: 8px;
`;

const EcommerceSolutions = () => {
  const { t, i18n } = useTranslation();

  // Set message based on the current language
  const message = i18n.language === 'tr'
    ? 'Mağaza yönetimi konusunda daha fazla bilgi almak istiyorum.'
    : 'I would like more information about store management.';

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // WhatsApp link with the encoded message
  const whatsappLink = `https://wa.me/905376966361?text=${encodedMessage}`;

  return (
    <MainContainer>
      <ContentContainer>
        <HeaderContainer>
          <Header>{t('header')}</Header>
        </HeaderContainer>
        <DescriptionContainer>
          <p>{t('description1')}</p>
        </DescriptionContainer>
        <DescriptionContainer>
          <p>
            <strong>{t('description2')}</strong>
          </p>
          <FeatureList>
            <FeatureItem>{t('feature1')}</FeatureItem>
            <FeatureItem>{t('feature2')}</FeatureItem>
            <FeatureItem>{t('feature3')}</FeatureItem>
            <FeatureItem>{t('feature4')}</FeatureItem>
            <FeatureItem>{t('feature5')}</FeatureItem>
            <FeatureItem>{t('feature6')}</FeatureItem>
          </FeatureList>
        </DescriptionContainer>
        <Button href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <IconWrapper>
            <WhatsAppIcon style={{ color: 'white', fontSize: '1.5rem' }} />
          </IconWrapper>
          {t('ecommerceButton')}
        </Button>
      </ContentContainer>
    </MainContainer>
  );
};

export default EcommerceSolutions;
