import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTranslation } from 'react-i18next';
import { deviceSize } from "../responsive"; 


const FAQMainContainer = styled.main`
  width: 100%;
`;

const FAQSection = styled.section`
  margin-top: 10px;
`;

const FAQHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;

  @media screen and (max-width: ${deviceSize.mobile}) {
    font-size: 20px;
  }
`;

const FAQContent = styled.div`
  width: 60%;
  margin: 20px auto; 
  padding: 20px; 
  background-color: #f8f8f8;
  border-radius: 8px;
  transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  &:hover {
    border: 2px solid navy;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: ${deviceSize.mobile}) {
    width: 80%; 
  }
`;

const FAQItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FAQQuestion = styled.h3`
  font-size: 20px;
  color: navy;

  @media screen and (max-width: ${deviceSize.mobile}) {
    font-size: 16px;
  }
`;

const IconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s ease;
`;

const FAQAnswer = styled.p`
  font-size: 16px;
  width: 100%; 
  color: #333;
  text-align: center;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  margin-top: 20px;

  @media screen and (max-width: ${deviceSize.mobile}) {
    font-size: 12px;
  }
`;

const FAQ = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <FAQMainContainer>
      <FAQSection>
        <FAQHeader>{t('faqSectionHeader')}</FAQHeader>
        {Array.from({ length: 17 }, (_, index) => (
          <FAQContent key={index} onClick={() => handleQuestionClick(index)}>
            <FAQItemContainer>
              <FAQQuestion>{t(`Question${index + 1}`)}</FAQQuestion>
              <IconContainer
                style={{ transform: `rotate(${openIndex === index ? 180 : 0}deg)` }}
              >
                {openIndex === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconContainer>
            </FAQItemContainer>
            <FAQAnswer isOpen={openIndex === index}>
              {t(`Answer${index + 1}`)}
            </FAQAnswer>
          </FAQContent>
        ))}
      </FAQSection>
    </FAQMainContainer>
  );
};

export default FAQ;
