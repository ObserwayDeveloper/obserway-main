import React from 'react';
import styled from 'styled-components';
import { WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import USA from './america.png';
import UK from './londra.png';
import { useTranslation } from 'react-i18next';

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

const CountrySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;

const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
`;

const CountryLogo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
`;

const CountryTitle = styled.h2`
  font-size: 2.2rem;
  color: #071952;
  margin-bottom: 15px;
  font-weight: 600;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  line-height: 1.8;
  width: 100%;
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

const WhatsAppButton = styled.a`
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
  margin-top: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #088395;
    transform: scale(1.05);
  }

  svg {
    font-size: 1.8rem;
    margin-right: 8px;
  }
`;

const InternationalSolutions = () => {
  const { t, i18n } = useTranslation();

  const message =
    i18n.language === 'en'
      ? 'I would like to get more information about setting up a company abroad'
      : 'Yurt dışında şirket oluşturmak için daha fazla bilgi almak istiyorum';
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/905376966361?text=${encodedMessage}`;

  return (
    <MainContainer>
      <ContentContainer>
        <HeaderContainer>
          <Header>{t('internationalSolutions.title')}</Header>
        </HeaderContainer>
        <DescriptionContainer>
          {t('internationalSolutions.description')}
        </DescriptionContainer>

        <CountrySection>
          {/* USA Section */}
          <CountryContainer>
            <CountryLogo src={USA} alt="USA Logo" />
            <CountryTitle>{t('internationalSolutions.usa.title')}</CountryTitle>
            <FeatureList>
              <FeatureItem>{t('internationalSolutions.usa.feature1')}</FeatureItem>
              <FeatureItem>{t('internationalSolutions.usa.feature2')}</FeatureItem>
            </FeatureList>
          </CountryContainer>

          {/* UK Section */}
          <CountryContainer>
            <CountryLogo src={UK} alt="UK Logo" />
            <CountryTitle>{t('internationalSolutions.uk.title')}</CountryTitle>
            <FeatureList>
              <FeatureItem>{t('internationalSolutions.uk.feature1')}</FeatureItem>
              <FeatureItem>{t('internationalSolutions.uk.feature2')}</FeatureItem>
            </FeatureList>
          </CountryContainer>
        </CountrySection>

        <WhatsAppButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          {t('internationalSolutions.whatsapp')}
        </WhatsAppButton>
      </ContentContainer>
    </MainContainer>
  );
};

export default InternationalSolutions;
