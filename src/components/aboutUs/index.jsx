import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive"; // useMediaQuery'i içe aktarın
import { useTranslation } from 'react-i18next';
import { Marginer } from "../marginer";
import { deviceSize } from "../responsive"; // Varsayılan aygıt boyutlarını içe aktarın veya kendiniz tanımlayın

const Title = styled.h2`
  font-size: ${({ isMobile }) => (isMobile ? "20px" : "35px")};
  color: #264653;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  margin-top: ${({ isMobile }) => (isMobile ? "10%" : "20%")};
  margin-bottom: 10px;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ isMobile }) => (isMobile ? "10px" : "20px")};
  border-radius: 10px;
  width: ${({ isMobile }) => (isMobile ? "80%" : "60%")};
  margin: 0 auto; /* Sayfanın ortasına almak için */
`;

const AboutText = styled.p`
  font-size: ${({ isMobile }) => (isMobile ? "14px" : "16px")};
  line-height: 1.5;
  text-align: center;
  color: #000;
  margin-top: 20px;
`;

export function AboutUs() {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
    const { t } = useTranslation();

  return (
    <AboutContainer isMobile={isMobile}>
        <Title isMobile={isMobile}>{t('aboutustitle')}</Title>
      <AboutText isMobile={isMobile}>
       {t('aboutuscontext')}
       <Marginer direction="vertical" margin={isMobile ? 15 : 25} />
       {t('aboutuscontext2')}
       <Marginer direction="vertical" margin={isMobile ? 15 : 25} />
       {t('aboutuscontext3')}
       <Marginer direction="vertical" margin={isMobile ? 15 : 25} />
       {t('aboutuscontext4')}
       <Marginer direction="vertical" margin={isMobile ? 15 : 25} />
       {t('aboutuscontext5')}
      </AboutText>
    </AboutContainer>
  );
}
