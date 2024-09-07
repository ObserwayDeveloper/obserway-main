import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { useTranslation } from 'react-i18next';
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FooterMainContainer = styled.div`
  width: 100%;
  background-color: #071952; 
  color: #fff;
`;

const FooterContainer = styled.div`
  width: 90%;
  max-width: ${deviceSize.laptop}px;
  margin: 0 auto;
  padding: 20px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 10px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: ${deviceSize.mobile}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.div`
  @media screen and (max-width: ${deviceSize.mobile}px) {
    display: ${props => props.hideOnMobile ? 'none' : 'block'};
  }
    margin-right:20px;
`;

const CenteredContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: ${deviceSize.mobile}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;

  @media screen and (min-width: ${deviceSize.mobile}px) {
    text-align: left;
    flex: 1;
  }
`;

const FLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 18px;
  margin-bottom: 12px;
`;

const ContactContainer = styled.div`
  flex: 2;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-top: 20px;
  }
`;

const ContactText = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 0;
  border-bottom: 1px solid #8A8A8A;

  &:last-child {
    border-bottom: none;
  }
`;

const BottomContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${deviceSize.mobile}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const LeftBottomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  justify-content: flex-start; /* Logoyu sola hizalar */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px; /* Logoyla diğer içerikler arasına boşluk bırakır */
`;

const PrivacyText = styled.p`
  color: #8A8A8A;
  font-size: 14px;
`;

const RightBottomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export function Footer(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const { t } = useTranslation();

  return (
    <FooterMainContainer>
      <FooterContainer>
        <TopContainer>
          <ImageContainer hideOnMobile={true}>
            <BrandLogo logoSize={isMobile ? 70 : 80} />
          </ImageContainer>
          <CenteredContentContainer>
            <ContentContainer>
              <Title>{t('companyTitle')}</Title>
              <FLink href="/">{t('homepage')}</FLink>
              <FLink href="/about-us">{t('aboutus')}</FLink>
              <FLink href="/faq">{t('faqs')}</FLink>
            </ContentContainer>
            <ContentContainer>
              <Title>{t('solutionsTitle')}</Title>
              <FLink href="/our-services/ecommerce-solutions">{t('ecommerce')}</FLink>
              <FLink href="/our-services/company-solutions">{t('companysolutions')}</FLink>
              <FLink href="/our-services/amazon-solutions">{t('amazonsolutions')}</FLink>
              <FLink href="/our-services/educate-inform">{t('educatetitle')}</FLink>
            </ContentContainer>
            <ContentContainer>
              <Title>{t('contractsTitle')}</Title>
              <FLink href="/data-protection">{t('assigment1')}</FLink>
              <FLink href="/communication-consent">{t('assigment2')}</FLink>
              <FLink href="/user-agreement">{t('assigment3')}</FLink>
              <FLink href="/cookie-policy">{t('assigment4')}</FLink>
              <FLink href="/our-policies">{t('assigment5')}</FLink>
            </ContentContainer>
            <ContactContainer>
              <Title>{t('contactTitle')}</Title>
              <ContactText>
                <MailIcon /> <FLink href="mailto:info@obserway.com">{t('mail')}</FLink>
              </ContactText>
              <ContactText>
                <PhoneIcon /> <FLink href="tel:+901234567890">{t('phone')}</FLink>
              </ContactText>
              <ContactText>
                <LocationOnIcon /> <FLink href="#">{t('address1')}</FLink>
              </ContactText>
              <FLink href="https://www.google.com/maps/search/?api=1&query=Folkart%20Towers%2C%20Izmir%2C%20Adalet%20Mahallesi">
                {t('address2')}
              </FLink>
            </ContactContainer>
          </CenteredContentContainer>
        </TopContainer>
        <BottomContainer>
          <LeftBottomContainer>
            <LogoContainer>
              <BrandLogo hideLogo color="#8A8A8A" textSize={isMobile ? 20 : 25} />
            </LogoContainer>
            <PrivacyText> &#169; {t('copyright')} 2024</PrivacyText>
          </LeftBottomContainer>
          <RightBottomContainer>
            {/* {t('socialMediaSection')} */}
          </RightBottomContainer>
        </BottomContainer>
      </FooterContainer>
    </FooterMainContainer>
  );
}

export default Footer;
