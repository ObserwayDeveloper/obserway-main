import React from "react";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import styled from "styled-components";

import { AccountBox } from "../../components/accountBox";
import { useParams } from "react-router-dom";
import { BrandLogo } from "../../components/brandLogo";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
  height: 40px; /* İstenilen yüksekliği ayarlayın */
`;

const CustomPageContainer = styled(PageContainer)`
`;

const FullWidthContainer = styled.div`
height: 500px;
  background-color: #071952;
  width: 100%;
`;

export function CustomerAccessPage(props) {
    const { action } = useParams();
  
    return (
      <FullWidthContainer>
        <CustomPageContainer>
          <LogoContainer>
            <BrandLogo logoSize={100} /> 
          </LogoContainer>
          <StyledInnerContainer>
            <AccountBox initialActive={action} />
          </StyledInnerContainer>
        </CustomPageContainer>
      </FullWidthContainer>
    );
}
