import React from 'react';
import styled from 'styled-components';

// Obserway logosunu import ediyoruz
import ObserwayLogo from '../../images/shipLogo/obsship.png';

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  width: 220px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-right: 15px;
`;

const Content = styled.div`
  flex: 1;
`;

const PlatformName = styled.h3`
  color: #071952;
  margin: 0;
  font-size: 16px;
`;

const Cost = styled.p`
  color: #000;
  margin: 0;
  font-size: 14px;
`;

const ShippingResultCard = ({ platform, cost }) => {
  //console.log('ShippingResultCard - Cost:', cost); // Cost'u burada da kontrol edelim

  // Cost değerini biçimlendirmek için Intl.NumberFormat kullanımı
  const formattedCost = typeof cost === 'number' ? new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cost) : 'N/A';

  return (
    <Card>
    {/* Obserway logosu burada gösteriliyor */}
    <Logo src={ObserwayLogo} alt="Obserway Logo" />
    <Content>
      <PlatformName>{platform || "Platform Bilinmiyor"}</PlatformName>
      <Cost>{formattedCost}</Cost>
    </Content>
  </Card>
  );
};

export default ShippingResultCard;