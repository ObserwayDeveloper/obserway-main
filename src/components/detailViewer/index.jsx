import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../button";
import styled from "styled-components";
import { deviceSize } from "../responsive";
import { useTranslation } from 'react-i18next';

import TopicOne from "./amazonSol.png";
import TopicSec from "./compSol.png";
import TopicThd from "./ecomSol.png";
import TopicFr from "./online.png";

// Parallax efekti için styled-component
const ParallaxContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh; /* Yüksekliği ekran boyutuna göre ayarladık */
  display: flex;
  flex-direction: column;
  align-items: center; /* İçerikleri ortalamak için */
  perspective: 1px; /* Parallax efekti için */
  background-attachment: fixed; /* Parallax kaydırma efekti */
  background-size: cover; /* Arka planın her zaman kaplı olmasını sağlarız */
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  position: relative; /* Parallax efekti için */

  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const StyledDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 320px; /* Maksimum genişlik belirlendi */
  margin: 10px;
  background-color: #fff; /* Arka plan rengini beyaz yaptık */
  border-radius: 10px; /* Köşeleri yuvarladık */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Box shadow ekledik */
  overflow: hidden; /* İçerik taşmasını engelledik */
  transition: transform 0.2s ease-in-out; /* Hover efekti için geçiş */
  position: relative; /* Divider için konum ayarı */

  &:hover {
    transform: translateY(-10px); /* Hover efekti */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4); /* Hover box shadow */
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
    margin: 10px 0;
  }

  /* Divider stili */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px; /* Divider yüksekliği */
    background-color: #071952; /* Divider rengi */
    transform: scaleX(0); /* Başlangıçta görünmez */
    transition: transform 0.3s ease; /* Geçiş efekti */
  }

  &:hover::after {
    transform: scaleX(1); /* Hover sırasında görünür */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px; /* Sabit yükseklik belirledik */
  object-fit: cover; /* Resmi kapsayacak şekilde ayarlandı */
  border-radius: 10px; /* Köşeleri yuvarladık */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Box shadow ekledik */
`;

const Content = styled.div`
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 14px; /* Mobil ekranlarda font boyutu */
  }
`;

const Title = styled.h2`
  font-size: 20px; /* Font boyutu küçültüldü */
  color: #333;
  margin-bottom: 10px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 18px; /* Mobil ekranlarda font boyutu */
    text-align: center;
  }
`;

const Subtitle = styled.h3`
  font-size: 18px; /* Alt başlık boyutu */
  color: #555;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 16px; /* Mobil ekranlarda font boyutu */
  }
`;

const StyledButton = styled(Button)`
  background-color: #071952;
  color: white;
  &:hover {
    background-color: #F2F7A1;
    color: #000;
  }
`;

const DetailContainer = ({ title, imageSrc, details, linkTo, buttonText }) => { 
  const { t } = useTranslation();

  return (
    <StyledDetailContainer>
      <Image src={imageSrc} alt={`Image of ${title}`} />
      <Content>
        <Title>{title}</Title>
        <Text>{details}</Text>
        <Link to={linkTo}>
          <StyledButton>{buttonText ? buttonText : t('detailviewbutton')}</StyledButton> 
        </Link>
      </Content>
    </StyledDetailContainer>
  );
};

const DetailViewer = () => {
  const { t } = useTranslation();

  return (
    <ParallaxContainer>
      <Title>{t('detailviewtitle')}</Title>
      <Subtitle>{t('detailviewsubtitle')}</Subtitle>
      <DetailWrapper>
        <DetailContainer
          title={t('detailviewtit1')}
          imageSrc={TopicOne}
          details={t('detailview2')}
          linkTo="our-services/amazon-solutions"
        />
        <DetailContainer
          title={t('detailviewtit3')}
          imageSrc={TopicSec}
          details={t('detailview4')}
          linkTo="our-services/company-solutions"
        />
        <DetailContainer
          title={t('detailviewtit5')}
          imageSrc={TopicThd}
          details={t('detailview6')}
          linkTo="our-services/ecommerce-solutions"
        />
        <DetailContainer
          title={t('detailviewtit7')}
          imageSrc={TopicFr}
          details={t('detailview8')}
          linkTo="our-services/educate-inform"
          buttonText={t('onlineview')}
        />
      </DetailWrapper>
    </ParallaxContainer>
  );
};

export { DetailViewer };
