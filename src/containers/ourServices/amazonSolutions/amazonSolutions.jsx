import React from 'react';
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
  padding: 30px;
  box-sizing: border-box;
  background: linear-gradient(135deg, rgba(7, 25, 82, 0.8), rgba(8, 131, 149, 0.7));
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  color: #333;
`;

const SectionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  width: 100%;
`;

const SectionContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin-bottom: 40px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  margin-bottom: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #071952;
  margin-bottom: 15px;
`;

const DescriptionContainer = styled.div`
  margin-bottom: 20px;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  max-width: 90%;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  width: 100%;
`;

const FeatureItem = styled.li`
  margin-bottom: 15px;
  position: relative;
  padding-left: 35px;
  &:before {
    content: '✓';
    position: absolute;
    left: 15px;
    color: #088395;
    font-weight: bold;
  }
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  background-color: #071952;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  margin-top: 40px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #088395;
    transform: scale(1.05);
  }

  svg {
    font-size: 2rem;
    margin-right: 12px;
  }
`;

const AmazonSolutionsPage = () => {
  const { t, i18n } = useTranslation();

  // Determine the language
  const lang = i18n.language;

  // WhatsApp link with the encoded message
  const message =
    lang === 'en'
      ? 'I would like to get more information about your Amazon solutions'
      : 'Amazon çözümleriniz hakkında bilgi almak istiyorum';
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/+905376966361?text=${encodedMessage}`;

  return (
    <MainContainer>
      <ContentContainer>
        <SectionsWrapper>
          {/* Amazon Fon Kurtarma Hizmeti */}
          <SectionContainer>
            <HeaderContainer>
              <Header>{t('amazonFundRecoveryService.title')}</Header>
            </HeaderContainer>
            <DescriptionContainer>
              {t('amazonFundRecoveryService.description')}
            </DescriptionContainer>

            <FeatureList>
              <FeatureItem>{t('amazonFundRecoveryService.feature1')}</FeatureItem>
              <FeatureItem>{t('amazonFundRecoveryService.feature2')}</FeatureItem>
              <FeatureItem>{t('amazonFundRecoveryService.feature3')}</FeatureItem>
              <FeatureItem>{t('amazonFundRecoveryService.feature4')}</FeatureItem>
            </FeatureList>
          </SectionContainer>

          {/* Amazon Hesabınıza Feedback Hizmeti */}
          <SectionContainer>
            <HeaderContainer>
              <Header>{t('amazonFeedbackService.title')}</Header>
            </HeaderContainer>
            <DescriptionContainer>
              {t('amazonFeedbackService.description')}
            </DescriptionContainer>

            <FeatureList>
              <FeatureItem>{t('amazonFeedbackService.feature1')}</FeatureItem>
              <FeatureItem>{t('amazonFeedbackService.feature2')}</FeatureItem>
              <FeatureItem>{t('amazonFeedbackService.feature3')}</FeatureItem>
              <FeatureItem>{t('amazonFeedbackService.feature4')}</FeatureItem>
            </FeatureList>
          </SectionContainer>
        </SectionsWrapper>

        <WhatsAppButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          {t('contactUs.whatsapp')}
        </WhatsAppButton>
      </ContentContainer>
    </MainContainer>
  );
};

export default AmazonSolutionsPage;
