import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { BrandLogo } from "../../components/brandLogo";
import { Button } from "../../components/button";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import TopSecJson from "../../constant/json/topsec.json"; // JSON animasyon dosyası
import TopSectionBackgroundImg from "../../images/landingpage.png"; // Arka plan resmi

const TopSectionContainer = styled.div`
  width: 100%;
  height: 1050px;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px -150px;
  background-size: cover;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 1050px;
    background-position: 0px 0px;
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(7, 25, 82, 0.9);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (min-width: ${deviceSize.mobile}px) {
    flex-direction: row;
  }
`;

const StandoutImage = styled.div`
  width: 65%; /* Büyütüldü */
  height: 100%; /* Büyütüldü */
  max-width: 100%; /* Ekran genişliğine uyum sağlar */
  margin-left: 10%;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
    height: 30em; /* Mobil ekranlarda uyumlu boyut */
  }

  .lottie-animation {
    width: 100%;
    height: 100%;
     pointer-events: none;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${deviceSize.mobile}px) {
    align-items: flex-start;
  }
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 35px;;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

export function TopSection(props) {
  const { children } = props;
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("Button clicked, navigating...");
    navigate("/customer/access/signup");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TopSecJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <BrandLogo
              logoSize={isMobile ? 40 : 65}
              textSize={isMobile ? 35 : 55}
            />
            <Marginer direction="vertical" margin={8} />
            <SloganText>{t('topsect1')}</SloganText>
            <SloganText>{t('topsect2')}</SloganText>
            <Marginer direction="vertical" margin={15} />
            <Button onClick={handleButtonClick}>{t('teklifalin')}</Button>
          </LogoContainer>
          {!isMobile && (
            <StandoutImage>
              <Lottie options={defaultOptions} className="lottie-animation" />
            </StandoutImage>
          )}
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
