import React, { createContext, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LoginForm } from "./loginForm";
import { AccountContext } from "./context";
import { SignupForm } from "./signupForm";

import { useTranslation } from 'react-i18next';




const BoxContainer = styled.div`
  width: 630px;
  min-height: 850px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(8, 131, 149, 0.5);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 2em;
  z-index: 5;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  width: 250%;
  height: 350px;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -200px;
  left: -150px;
  background: rgba(7, 25, 82, 0.9);
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const HeaderText = styled.h2`
  font-weight: 500;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-size: 40px;
  line-height: 1.24;
  align-items: center;
`;

const SmallText = styled.h5`
  font-weight: 300;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-size: 18px;
  line-height: 1.24;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.7em;
  margin-top: auto;
`;

const backdropVariants = {
  expanded: {
    width: "190%",
    height: "1200px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "600px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.4,
  stiffness: 50,
};

export function AccountBox(props) {
  const { initialActive } = props;
  const { t, i18n } = useTranslation();
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState(
    initialActive ? initialActive : "signin"
  );

  const playExpandingEffect = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
  };

  const switchToSignup = () => {
    playExpandingEffect();
    switchActive("signup");
  };

  const switchToSignin = () => {
    playExpandingEffect();
    switchActive("signin");
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,
    playExpandingEffect,
  };
 
  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            variants={backdropVariants}
            transition={expandingTransition}
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
          />
          {active === "signin" && (
            <>
              <HeaderContainer>
                <HeaderText>{t('welcome')}</HeaderText>
              </HeaderContainer>
              <SmallText>{t('signinand')}</SmallText>
            </>
          )}
          {active === "signup" && (
            <>
              <HeaderContainer>
                <HeaderText>{t('createaccount')}</HeaderText>
              </HeaderContainer>
              <SmallText>{t('createaccountand')}</SmallText>
            </>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
