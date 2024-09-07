import React from 'react';
import styled from 'styled-components';

// Stil tanımlamaları
const Section = styled.section`
width:100%;
min-height: 200px;
   display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #97FEED;
`;

const Description = styled.div`
  font-size: 20px;
  color: #000;
  margin-bottom: 15px;
`;

const SubText = styled.span`
  font-size: 14px;
  color: #000;
  margin-bottom: 10px;
`;

const OfferButton = styled.a`
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  &:hover {
    background-color: #f1f1f1;
  }
`;


const ShippingOffer = () => {
  return (
    <Section>
      <Description>İlk gönderinizi beraber gerçekleştirelim.</Description>
      <SubText>7/24 destek, online ödeme, yük takip</SubText>
      <OfferButton target="_self">Hemen Teklif Al</OfferButton>
    </Section>
  );
};

export default ShippingOffer;
