import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { deviceSize } from "../../../components/responsive";
import { Footer } from "../../../components/footer";
import { InnerPageContainer, PageContainer } from "../../../components/pageContainer";
import { Navbar } from "../../../components/navbar";
import { Marginer } from "../../../components/marginer";
import EcommerceSolutions from "./eCommerceSolutions";

// Styled components
const StyledPageContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw; /* Full viewport width */
  background: linear-gradient(135deg, rgba(7, 25, 82, 0.9), rgba(8, 131, 149, 0.8));
  box-sizing: border-box;
`;

const StyledInnerPageContainer = styled(InnerPageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
`;

const StyledFooter = styled(Footer)`
  position: relative;
  width: 100%;
  background-color: #071952;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
`;

export function Solutions() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <StyledPageContainer>
      <NavbarContainer>
        <Navbar useTransparent={false} isOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      </NavbarContainer>
      <ContentContainer>
        <StyledInnerPageContainer>
          <Marginer direction="vertical" margin="5em" />
          <EcommerceSolutions />
        </StyledInnerPageContainer>
      </ContentContainer>
      <StyledFooter />
    </StyledPageContainer>
  );
}
