import React from "react";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { useParams } from "react-router-dom";
import { AboutUs } from "../../components/aboutUs";
import ShippingOffer from "../../components/shippingOffer";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

const CustomPageContainer = styled(PageContainer)`
`;

const FullWidthContainer = styled.div`
height: 600px;
width: 100%;
`;

export function AboutUsPage(props) {
  
    return (
      <FullWidthContainer>
        <CustomPageContainer>
          <Navbar />
          <StyledInnerContainer>
            <AboutUs  />
          </StyledInnerContainer>
          <ShippingOffer />
        <Footer />
        </CustomPageContainer>
      </FullWidthContainer>
    );
}
