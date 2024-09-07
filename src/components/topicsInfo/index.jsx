import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from 'react-i18next';
import Lottie from "react-lottie";
import WorldAnimate from "../../constant/json/worlanimate.json";
import PayedAnimate from "../../constant/json/payed.json";
import CalcAnimate from "../../constant/json/calc.json";

// Updated keyframes with css helper
const growShrink = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const TopicsInfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: ${({ isMobile }) => (isMobile ? "24px" : "35px")};
  color: #264653;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: ${({ isMobile }) => (isMobile ? "18px" : "21px")};
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  width: 60%;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  width: calc(33.33% - 20px); /* 3 kartı yan yana ve aralarında boşluk bırakmak için */
  background-color: transparent;
  border-radius: 25px;
  padding: 20px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: ${({ animate }) => animate ? css`${growShrink} 2s ease-in-out` : 'none'};
  
  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: calc(50% - 20px); /* Tablet ve daha küçük ekranlarda 2 kart yan yana */
  }
  
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%; /* Mobil ekranlarda tek sütun */
  }
`;

// Parallax effect
const parallax = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px); /* Adjust this value to control the parallax effect */
  }
`;

const ParallaxCard = styled(Card)`
  position: relative;
  overflow: hidden;
  background-color: #fff; /* Kartın arka plan rengini beyaz yaptık */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${props => props.bgImage}) no-repeat center center;
    background-size: cover;
    transform: translateZ(0);
    transition: transform 0.5s ease-in-out;
    z-index: -1;
    animation: ${parallax} 10s linear infinite;
  }
`;

const CardLogo = styled.div`
  width: ${({ isMobile }) => (isMobile ? "120px" : "200px")}; /* Animasyon boyutunu büyüttük */
  height: ${({ isMobile }) => (isMobile ? "120px" : "200px")}; /* Animasyon boyutunu büyüttük */
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .lottie-animation {
    width: 100%;
    height: 100%;
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: ${({ isMobile }) => (isMobile ? "14px" : "18px")};
  color: #264653;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
`;

const CardText = styled.p`
  font-size: ${({ isMobile }) => (isMobile ? "12px" : "14px")};
  color: #333;
  text-align: center;
`;

const Divider = styled.div`
  width: 80%;
  height: 4px;
  background-color: #35A29F;
  margin-top: 30px;
`;

export function TopicsInfo(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const { t, i18n } = useTranslation();
  const [animateIndex, setAnimateIndex] = useState(0);

  const defaultOptionsWorld = {
    loop: true,
    autoplay: true,
    animationData: WorldAnimate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptionsPayed = {
    loop: true,
    autoplay: true,
    animationData: PayedAnimate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptionsCalc = {
    loop: true,
    autoplay: true,
    animationData: CalcAnimate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 1500); // Her 1.5 saniyede bir kart animasyon yapar

    return () => clearInterval(interval);
  }, []);

  // Add scroll event listener for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      document.querySelectorAll('.parallax-card').forEach(card => {
        card.style.transform = `translateY(${scrollTop * 0.1}px)`; // Adjust the multiplier to control the parallax effect
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <TitleContainer>
       <Divider />
      <Title isMobile={isMobile}>{t('topictitle')}</Title>
      <Subtitle isMobile={isMobile}>{t('topicsub')}</Subtitle>
      <TopicsInfoContainer>
        <ContentContainer>
          <CardContainer>
            <ParallaxCard className="parallax-card" isMobile={isMobile} animate={animateIndex === 0}>
              <CardLogo isMobile={isMobile}>
                <Lottie options={defaultOptionsCalc} className="lottie-animation" />
              </CardLogo>
              <CardTitle isMobile={isMobile}>{t('card1')}</CardTitle>
              <CardText>{t('card2')}</CardText>
            </ParallaxCard>
            <ParallaxCard className="parallax-card" isMobile={isMobile} animate={animateIndex === 1}>
              <CardLogo isMobile={isMobile}>
                <Lottie options={defaultOptionsWorld} className="lottie-animation" />
              </CardLogo>
              <CardTitle isMobile={isMobile}>{t('card3')}</CardTitle>
              <CardText>{t('card4')}</CardText>
            </ParallaxCard>
            <ParallaxCard className="parallax-card" isMobile={isMobile} animate={animateIndex === 2}>
              <CardLogo isMobile={isMobile}>
                <Lottie options={defaultOptionsPayed} className="lottie-animation" />
              </CardLogo>
              <CardTitle isMobile={isMobile}>{t('card5')}</CardTitle>
              <CardText>{t('card6')}</CardText>
            </ParallaxCard>
          </CardContainer>
        </ContentContainer>
      </TopicsInfoContainer>
      <Divider />
    </TitleContainer>
  );
}
