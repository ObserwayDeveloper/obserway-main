import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { TopicsInfo } from "../../components/topicsInfo";
import { DetailViewer } from "../../components/detailViewer";
import { ShippingPartners } from "../../components/shippingPartners";
import PriceComparison from "../../components/priceComparison";
import { Footer } from "../../components/footer";
import ShippingOffer from "../../components/shippingOffer";
import CookieBanner from "../../components/cookieBanner/cookieBanner";

// Parallax animasyonu
const parallaxAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100px;
  }
`;

const ScrollButton = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  background: ${props => props.white ? "#fff" : "rgba(255, 255, 255, 0.8)"};
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(7, 25, 82, 0.3);
  
  &::after {
    content: "▼";
    font-size: 24px;
    color: ${props => props.white ? "#071952" : "#071952"};
  }

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    &::after {
      font-size: 18px;
    }
  }
`;

// Genel ScrollableSection stili
const ScrollableSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh; /* Her bölüm ekran yüksekliği kadar */
  padding: 2em;
  margin: 0;
  background-color: #ffffff;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #f0f0f0;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(0);
    animation: ${parallaxAnimation} 20s linear infinite;
    background: url('path_to_your_image') repeat;
  }

  .content {
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

// ShippingPartners özel stili
const ShippingPartnersSection = styled(ScrollableSection)`
  min-height: 10vh; /* Yüksekliği biraz daha küçük yapar */
`;

export function HomePage(props) {
  const [currentSection, setCurrentSection] = useState(0);

  const sectionRefs = useRef([]);
  sectionRefs.current = [
    useRef(null), // TopSection
    useRef(null), // TopicsInfo
    useRef(null), // DetailViewer
    useRef(null), // ShippingPartners
    useRef(null), // PriceComparison
  ];

  // Bölüm geçişi fonksiyonu
  const scrollToNextSection = () => {
    const nextIndex = currentSection + 1;
    if (nextIndex < sectionRefs.current.length) {
      window.scrollTo({
        top: sectionRefs.current[nextIndex].current.offsetTop - 60,
        behavior: 'smooth'
      });
      setCurrentSection(nextIndex);
    }
  };

  return (
    <>
      <TopSection ref={sectionRefs.current[0]}>
        <Navbar useTransparent isOpen={false} toggleMobileMenu={() => {}} />
        <ScrollButton white onClick={scrollToNextSection} />
      </TopSection>
      <ScrollableSection ref={sectionRefs.current[1]}>
        <div className="content">
          <TopicsInfo />
          <ScrollButton onClick={scrollToNextSection} />
        </div>
      </ScrollableSection>
      <ScrollableSection ref={sectionRefs.current[2]}>
        <div className="content">
          <DetailViewer />
          <ScrollButton onClick={scrollToNextSection} />
        </div>
      </ScrollableSection>
      <ShippingPartnersSection ref={sectionRefs.current[3]}>
        <div className="content">
          <ShippingPartners />
          <ScrollButton onClick={scrollToNextSection} />
        </div>
      </ShippingPartnersSection>
      <ScrollableSection ref={sectionRefs.current[4]}>
        <div className="content">
          <PriceComparison />
          <ScrollButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </div>
      </ScrollableSection>
      <ShippingOffer />
      <Footer />
      <CookieBanner />
    </>
  );
}
