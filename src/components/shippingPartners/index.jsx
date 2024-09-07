// src/components/shippingPartners/ShippingPartners.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Marginer } from '../marginer';
import { useTranslation } from 'react-i18next';

import SP1 from '../../images/shipLogo/fedex.png';
import SP2 from '../../images/shipLogo/ups.webp';
import SP3 from '../../images/shipLogo/dhl.png';
import SP4 from '../../images/shipLogo/obsship.png';
import MastercardLogo from '../../images/payment/masterpass.jpg';
import BKMLogo from '../../images/payment/bkm.jpg';
import TroyLogo from '../../images/payment/troy.jpg';
import MercuryLogo from '../../images/payment/mercury.svg';
import StripeLogo from '../../images/payment/stripe.png';
import WiseLogo from '../../images/payment/wise.png';
import PayoneerLogo from '../../images/payment/payoneer.png';
import PaytrLogo from '../../images/payment/paytr.jpg';
import PTTLogo from '../../images/payment/ptt.jpg';

import PackageTracking from '../packageTracking/packageTracking';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;
const ShippingPartnersWrapper = styled.div`
  width: 100vw;
  min-height: 100%;
  background-color: #071952;
  border-top: 2px solid rgba(8, 131, 149, 0.4);
  border-bottom: 2px solid rgba(8, 131, 149, 0.4);
  overflow: hidden;
  position: relative;
  background-image: url('../../images/background/parallax-background.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`;

const PartnersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  overflow: hidden;
  padding: 20px 0;
`;

const PartnerImage = styled.img`
  width: 150px;
  height: auto;
  object-fit: contain;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: relative;
  margin-bottom: 0;
`;

const Title = styled.h2`
  font-size: 27px;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin-bottom: 2px;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #fff;
  margin: 20px 0;
`;

const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 20px 0;
  background-color: #fff;
  position: relative;
`;

const PaymentList = styled.div`
  display: flex;
  flex-direction: row;
  animation: ${scroll} 35s linear infinite;
`;

const PaymentImage = styled.img`
  width: 100px;
  height: 50px;
  object-fit: contain;
  margin: 0 15px;
`;

const ShippingPartners = () => {
  const { t } = useTranslation();

  return (
    <ShippingPartnersWrapper>
      <TitleContainer>
        <Title>{t('shippingparttit')}</Title>
        <Subtitle>{t('shippingpartsub')}</Subtitle>
        <Subtitle>{t('shippingpartsub2')}</Subtitle>
        <Marginer direction="vertical" margin="5em" />
      </TitleContainer>
      <PartnersContainer>
        <PartnerImage src={SP1} alt="Shipping Partner 1" />
        <PartnerImage src={SP2} alt="Shipping Partner 2" />
        <PartnerImage src={SP4} alt="OBS Ship" />
        <PartnerImage src={SP3} alt="Shipping Partner 3" />
      </PartnersContainer>
      <Divider />
      <PaymentMethods>
        <PaymentList>
          <PaymentImage src={MastercardLogo} alt="Mastercard" />
          <PaymentImage src={BKMLogo} alt="BKM" />
          <PaymentImage src={TroyLogo} alt="Troy" />
          <PaymentImage src={MercuryLogo} alt="Mercury" />
          <PaymentImage src={StripeLogo} alt="Stripe" />
          <PaymentImage src={WiseLogo} alt="Wise" />
          <PaymentImage src={PayoneerLogo} alt="Payoneer" />
          <PaymentImage src={PaytrLogo} alt="Paytr" />
          <PaymentImage src={PTTLogo} alt="PTT" />
          <PaymentImage src={MastercardLogo} alt="Mastercard" />
          <PaymentImage src={BKMLogo} alt="BKM" />
          <PaymentImage src={TroyLogo} alt="Troy" />
          <PaymentImage src={MercuryLogo} alt="Mercury" />
          <PaymentImage src={StripeLogo} alt="Stripe" />
          <PaymentImage src={WiseLogo} alt="Wise" />
          <PaymentImage src={PayoneerLogo} alt="Payoneer" />
          <PaymentImage src={PaytrLogo} alt="Paytr" />
          <PaymentImage src={PTTLogo} alt="PTT" />
          <PaymentImage src={MastercardLogo} alt="Mastercard" />
          <PaymentImage src={BKMLogo} alt="BKM" />
          <PaymentImage src={TroyLogo} alt="Troy" />
          <PaymentImage src={MercuryLogo} alt="Mercury" />
          <PaymentImage src={StripeLogo} alt="Stripe" />
          <PaymentImage src={WiseLogo} alt="Wise" />
          <PaymentImage src={PayoneerLogo} alt="Payoneer" />
          <PaymentImage src={PaytrLogo} alt="Paytr" />
          <PaymentImage src={PTTLogo} alt="PTT" />
        </PaymentList>
      </PaymentMethods>
      <PackageTracking />
    </ShippingPartnersWrapper>
  );
};

export { ShippingPartners };
