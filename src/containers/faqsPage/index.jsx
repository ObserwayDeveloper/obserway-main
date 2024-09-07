import React from "react";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import ShippingOffer from "../../components/shippingOffer/";
import FAQ from "../../components/faqs/faqs";
import { Navbar } from "../../components/navbar/index";

const FullWidthContainer = styled.div`
height:auto;
  width: 100%;
`;

const CustomPageContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  width: 100%;
  max-width: 1200px; 
  margin: auto; 
`;

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 10em; 
  width: 100%; 
`;

export function FaqsPage() {
  
    return (
      <FullWidthContainer>
        <CustomPageContainer>
          <Navbar />
          <StyledInnerContainer>
           <FAQ />
          </StyledInnerContainer>
          <ShippingOffer />
        <Footer />
        </CustomPageContainer>
      </FullWidthContainer>
    );
}
