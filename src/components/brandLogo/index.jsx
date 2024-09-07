import React from "react";
import styled from "styled-components";

import LogoImg from "../../images/logos/logo.png";
import { Link } from "react-router-dom";

const BrandLogoContainer = styled.div`
display: flex;
align-items: center;
padding: 10px; 
`;



const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};

  img {
    width: 140%;
    height: 100%;
  }
`;


export function BrandLogo(props) {
  const { logoSize, hideLogo } = props;

  return (
    <BrandLogoContainer>
      {!hideLogo && (
        <Link to="/">
          <LogoImage size={logoSize}>
            <img src={LogoImg} alt="Servycing logo" />
          </LogoImage>
        </Link>
      )}
    </BrandLogoContainer>
  );
}