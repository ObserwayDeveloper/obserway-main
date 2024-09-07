import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { deviceSize } from "../../../components/responsive";
import { useTranslation } from 'react-i18next';
import { Footer } from "../../../components/footer";
import { InnerPageContainer, PageContainer } from "../../../components/pageContainer";
import { Navbar } from "../../../components/navbar";

import { Marginer } from "../../../components/marginer";
import EtsyPriceCalculator from "./internationalCompany";
import InternationalSolutions from "./internationalCompany";


export function CompanySolutions(){
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <PageContainer>
            <Navbar useTransparent={false} isOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />

            <Marginer direction="vertical" margin="5em" />
            <InnerPageContainer>
               <InternationalSolutions />
            </InnerPageContainer>
            <Footer />
        </PageContainer>
    );
}
