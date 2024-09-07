import React from "react";
import styled from 'styled-components';
import { WhatsApp as WhatsAppIcon } from '@mui/icons-material';
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
  background: linear-gradient(135deg, rgba(7, 25, 82, 0.8), rgba(8, 131, 149, 0.7));
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1200px;
   margin-top: 30px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  color: #333;
`;

const SectionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin-bottom: 30px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #071952;
  margin-bottom: 10px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const DescriptionContainer = styled.div`
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  max-width: 90%;
  color: #555;
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 100%;
  text-align: center;
`;

const FeatureTitle = styled.h2`
  font-size: 1.2rem;
  color: #071952;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #071952;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  margin-top: 30px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #088395;
    transform: scale(1.03);
  }

  svg {
    font-size: 1.5rem;
    margin-right: 10px;
  }
`;

const EducationInf = () => {
  const { t, i18n } = useTranslation();

  // Define messages for different languages
  const messages = {
    en: 'I am interested in your online training programs, could you provide me with more information?',
    tr: 'Online eğitimlerinizden faydalanmak istiyorum, bilgi alabilir miyim?',
  };

  // Determine the current language and encode the appropriate message
  const currentLang = i18n.language || 'en'; // Default to English if language is not set
  const message = messages[currentLang];
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/+905376966361?text=${encodedMessage}`;

  return (
    <MainContainer>
      <ContentContainer>
        <HeaderContainer>
          <Header>{t('educatetitle')}</Header>
          <DescriptionContainer>{t('educatesubtitle')}</DescriptionContainer>
        </HeaderContainer>
        <SectionsWrapper>
          {/* Education Cards */}
          <SectionContainer>
            <FeatureCard>
              <FeatureTitle>Amazon Dropshipping Eğitimi</FeatureTitle>
              <FeatureDescription>{t('amazonDropshippingDesc')}</FeatureDescription>
            </FeatureCard>
          </SectionContainer>
          <SectionContainer>
            <FeatureCard>
              <FeatureTitle>Amazon Private Label Eğitimi</FeatureTitle>
              <FeatureDescription>{t('amazonPrivateLabelDesc')}</FeatureDescription>
            </FeatureCard>
          </SectionContainer>
          <SectionContainer>
            <FeatureCard>
              <FeatureTitle>Online Arbitrage Eğitimi</FeatureTitle>
              <FeatureDescription>{t('onlineArbitrageDesc')}</FeatureDescription>
            </FeatureCard>
          </SectionContainer>
          <SectionContainer>
            <FeatureCard>
              <FeatureTitle>Retail Arbitrage Eğitimi</FeatureTitle>
              <FeatureDescription>{t('retailArbitrageDesc')}</FeatureDescription>
            </FeatureCard>
          </SectionContainer>
          <SectionContainer>
            <FeatureCard>
              <FeatureTitle>Wholesale Eğitimi</FeatureTitle>
              <FeatureDescription>{t('wholesaleDesc')}</FeatureDescription>
            </FeatureCard>
          </SectionContainer>
          <SectionContainer>
            <FeatureCard>
              <FeatureTitle>Ebay Eğitimi</FeatureTitle>
              <FeatureDescription>{t('ebayDesc')}</FeatureDescription>
            </FeatureCard>
          </SectionContainer>
          <SectionContainer>
            <FeatureCard>
              <FeatureTitle>Shopify Eğitimi</FeatureTitle>
              <FeatureDescription>{t('shopifyDesc')}</FeatureDescription>
            </FeatureCard>
          </SectionContainer>
          <SectionContainer>
            <FeatureCard>
              <FeatureTitle>Etsy Satış Eğitimi</FeatureTitle>
              <FeatureDescription>{t('etsyDesc')}</FeatureDescription>
            </FeatureCard>
          </SectionContainer>
          <SectionContainer>
            <FeatureCard>
              <FeatureTitle>Facebook & İnstagram Reklam Eğitimi</FeatureTitle>
              <FeatureDescription>{t('facebookInstagramAdsDesc')}</FeatureDescription>
            </FeatureCard>
          </SectionContainer>
        </SectionsWrapper>
        <WhatsAppButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          {t('contactUs.whatsapp')}
        </WhatsAppButton>
      </ContentContainer>
    </MainContainer>
  );
}

export default EducationInf;
