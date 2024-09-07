import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language"; 

const MobileMenu = styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  height: 100%;
  width: 70%;
  background-color: #fff;
  z-index: 999;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`;

const TopControls = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const CloseButton = styled.button`
  font-size: 26px;
  color: #000;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #707070;
  }
`;

const LanguageSwitcher = styled.div`
  display: flex;
  margin-right: 5px;
  align-items: center;
  font-size: 20px;
  color: #000;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`;

const StyledLinkMobile = styled(Link)`
  font-size: 16px;
  font-weight: normal;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  margin: 25px 20px;
  display: block;

`;

const MenuSectionTitle = styled.div`
  font-size: 14px;
  color: #000;
  font-weight: thin;
  padding:20px 0;
  text-align: left;
  width: 100%; 
  box-sizing: border-box;
  border-bottom: ${({ first }) => first ? "none" : "2px solid #eaeaea"};


  &:hover {
    color: #505050;
  }
`;

export function HamburgerMenu({ isOpen, onClose }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <MobileMenu isOpen={isOpen}>
      <TopControls>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <LanguageSwitcher onClick={() => changeLanguage(i18n.language === 'en' ? 'tr' : 'en')}>
          <LanguageIcon /> {i18n.language.toUpperCase()}
        </LanguageSwitcher>
      </TopControls>
      <MenuSectionTitle>{t("sign")}</MenuSectionTitle> 
      <StyledLinkMobile to="/customer/access/signup" onClick={onClose}>
        {t("sign")}
      </StyledLinkMobile>

      <MenuSectionTitle>{t("nasilcalisir")}</MenuSectionTitle> 
      <StyledLinkMobile to="/how-to-works" onClick={onClose}>
        {t("nasilcalisir")}
      </StyledLinkMobile>

      <MenuSectionTitle>{t("hizmetlerimiz")}</MenuSectionTitle> 
      <StyledLinkMobile to="/our-services/international-shipping" onClick={onClose}>
        {t("international")}
      </StyledLinkMobile>
      <StyledLinkMobile to="/our-services/us-domestic-shipments" onClick={onClose}>
        {t("domestiusa")}
      </StyledLinkMobile>
      
      <MenuSectionTitle>{t("bizkimiz")}</MenuSectionTitle>
      <StyledLinkMobile to="/about-us" onClick={onClose}>
        {t("aboutus")}
      </StyledLinkMobile>
      <MenuSectionTitle>{t("sss")}</MenuSectionTitle>
      <StyledLinkMobile to="/faqs" onClick={onClose}>
        {t("sss")}
      </StyledLinkMobile>
      
    </MobileMenu>
  );
}
