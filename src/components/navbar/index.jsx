import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { HamburgerMenu } from "./mobileMenu";

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: normal;
  padding: 10px 20px;
  background-color: ${({ scrolled, useTransparent }) =>
    scrolled ? "#071952" : useTransparent ? "transparent" : "#071952"};
  position: fixed;
  z-index: 1000;
  color: ${({ scrolled, useTransparent }) =>
    useTransparent ? (scrolled ? "#fff" : "#fff") : "#fff"};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, height 0.3s ease-in-out;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")}; 
  position: ${({ isMobile }) => (isMobile ? "relative" : "fixed")}; 

  @media (max-width: ${deviceSize.mobile}px) {
    justify-content: space-between; 
    flex-direction: row; 
  
`;

const AccessibilityContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
position: relative;
@media (max-width: 768px) {
  flex-direction: row;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 10px;
  height: 100vh;
  width: 100%;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
}
`;

const AnchorLink = styled(Link)`
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 10px;
`;

const DropdownHeader = styled.div`
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  padding: 8px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const DropdownItem = styled(Link)`
  padding: 8px 16px;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`;
const DropdownMenuOurServices = styled(DropdownMenu)`
  margin-top: 5px;
  background-color: #fff; 
  border-radius: 5px; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
  width: 220px; 
`;
const DropdownContainerOurServices = styled(DropdownContainer)`
width: auto;
display: flex;
align-items: center;
margin-left: 10px;
gap: 40px;

&:hover ${DropdownMenuOurServices} { // Eğer bu container'ın üzerine gelinirse
  display: block; // Dropdown menüyü göster
}

@media (max-width: ${deviceSize.mobile}px) {
  display: none; 
`;


// Hizmetlerimiz Dropdown Header stilin
const DropdownHeaderOurServices = styled(DropdownHeader)`
display: flex;
align-items: center;
cursor: pointer; 
`;

const DropdownItemOurServices = styled(DropdownItem)`
  padding: 12px 16px; 
  cursor: pointer;
  font-size: 12px; 
  display: block;
  color: #333; 
  &:hover {
    background-color: #071952; 
    color: #fff; 
  }
`;



const LanguageContainer = styled.div`
justify-content: right;
  display: flex;
  align-items: center;
  margin-left: 10px;
  position: relative;
  @media (max-width: ${deviceSize.mobile}px) {
    display: none; /* Hide on mobile */
  }
`;

const AuthButtonContainer = styled.div`
margin-left: auto; /* Eklendi */
  width: auto;
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (max-width: ${deviceSize.mobile}px) {
    display: none; /* Hide on mobile */
  }
`;

const AuthButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #fff;
  color: #000;
`;

const LanguageButton = styled.button`
  font-size: 14px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    filter: contrast(0.8);
  }
`;


const DropdownMenuLanguage = styled(DropdownMenu)`
  position: absolute;
  top: 100%;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  width: fit-content;
`;


const DropdownItemLanguage = styled(DropdownItem)`
  padding: 8px 16px;
  cursor: pointer;
  display: block;
  width: fit-content;

  &:hover {
    background-color: #f1f1f1;
  }
`;


const DropdownItemLanguageTR = styled(DropdownItemLanguage)``;

const Seperator = styled.div`
  min-height: 35px;
  width: 1px;
  background-color: #fff;
`;


export function Navbar(props) {
  const { t, i18n } = useTranslation();
  const { useTransparent } = props;
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);



  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const [isDropdownOpenOurServices, setDropdownOpenOurServices] = useState(false);
  const [isDropdownOpenLanguage, setDropdownOpenLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("TR");

  const toggleDropdownOurServices = () => {
    setDropdownOpenOurServices(!isDropdownOpenOurServices);
  };

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  const toggleDropdownLanguage = () => {
    setDropdownOpenLanguage(!isDropdownOpenLanguage);
  }
  const changeLanguage = async (language) => {
    setDropdownOpenLanguage(false);

    if (language === "EN") {
      setSelectedLanguage("EN");
      await i18n.changeLanguage("en");
    } else if (language === "TR") {
      setSelectedLanguage("TR");
      await i18n.changeLanguage("tr");
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openTawkToChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    } else {
      console.log("Tawk.to chat is not available.");
    }
  };
  return (
    <>
      <NavbarContainer scrolled={isScrolled} useTransparent={useTransparent}>
          <BrandLogo logoSize={isMobile ? 50 : 70} />
        <AccessibilityContainer  open={isHamburgerMenuOpen}>
         {!isMobile && <Marginer direction="horizontal" margin={25} />}
          <DropdownContainerOurServices>
            <DropdownHeaderOurServices to="/our-services" onClick={toggleDropdownOurServices}>
              {t("hizmetlerimiz")} <KeyboardArrowDownIcon fontSize="small"  
              style={{ transform: isDropdownOpenOurServices ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease-in-out' }} />
            </DropdownHeaderOurServices>
            <DropdownMenuOurServices isOpen={isDropdownOpenOurServices}>
              <DropdownItemOurServices to="/our-services/ecommerce-solutions">
              {t("ecommerce")}
              </DropdownItemOurServices>
              <DropdownItemOurServices to="/our-services/company-solutions">
              {t("companysolutions")}
              </DropdownItemOurServices>
              <DropdownItemOurServices to="/our-services/amazon-solutions">
              {t("amazonsolutions")}
              </DropdownItemOurServices>
              <DropdownItemOurServices to="/our-services/educate-inform">
              {t("educate")}
              </DropdownItemOurServices>
            </DropdownMenuOurServices>
          </DropdownContainerOurServices>
          {!isMobile && <Marginer direction="horizontal" margin={isMobile ? 10 : 25} />}
          {!isMobile && <AnchorLink to="/how-to-works">{t("nasilcalisir")}</AnchorLink>}
          {!isMobile && <Marginer direction="horizontal" margin={isMobile ? 10 : 25} />}
          {!isMobile && <AnchorLink to="/about-us">{t("bizkimiz")}</AnchorLink>}
          {!isMobile && <Marginer direction="horizontal" margin={isMobile ? 10 : 25} />}
          {!isMobile && <AnchorLink to="/faqs">{t("sss")}</AnchorLink>}  
          {!isMobile && <Marginer direction="horizontal" margin={isMobile ? 10 : 25} />}
          {!isMobile && (<AnchorLink as="button" onClick={openTawkToChat} style={{ background: 'none', border: 'none',  }}> {t("Destek Merkezi")}</AnchorLink>)}      
        </AccessibilityContainer>
          {!isMobile && <Marginer direction="horizontal" margin={isMobile ? 10 : 25} />}
          <AuthButtonContainer>
            <Link to="/customer/access/signup" style={{ textDecoration: "none" }}>
              <AuthButton size={isMobile ? 12 : 15}>
                <PersonAddIcon fontSize="small" />
                {t("sign")}
              </AuthButton>
            </Link>
          </AuthButtonContainer>
          {!isMobile && <Seperator />}
          <LanguageContainer>
            <LanguageButton size={isMobile ? 10 : 12} onClick={toggleDropdownLanguage}>
              {selectedLanguage}
            </LanguageButton>
            <DropdownMenuLanguage isOpen={isDropdownOpenLanguage}>
              <DropdownItemLanguageTR onClick={() => changeLanguage("TR")}>
                TR
              </DropdownItemLanguageTR>
              <DropdownItemLanguage onClick={() => changeLanguage("EN")}>
                EN
              </DropdownItemLanguage>
            </DropdownMenuLanguage>
          </LanguageContainer>
          {!isMobile && <Marginer direction="horizontal" margin={isMobile ? 10 : 25} />}
       
        {isMobile && (
    <MenuIcon fontSize="large" style={{ cursor: "pointer" }} onClick={toggleHamburgerMenu} />
  )}
  {/* ... rest of your NavbarContainer content ... */}
  <HamburgerMenu isMobile={isMobile} isOpen={isHamburgerMenuOpen} onClose={toggleHamburgerMenu} />
      </NavbarContainer>
    </>
  );
}
