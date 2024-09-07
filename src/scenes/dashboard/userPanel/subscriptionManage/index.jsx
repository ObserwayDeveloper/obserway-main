import React from 'react';
import UserSidebar from '../userSidebar'; 
import styled from 'styled-components';
import SubscriptionManagement from './subsManage';
import TopBar from '../topBar';

const PanelLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentArea = styled.div`
  margin-left: 20%;
  width: 80%;
  padding: 20px;
  overflow: auto;
`;

const TopBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 20%; 
  width: 80%; 
  z-index: 999; 
`;

const SubscriptionContainer = styled.div`
  margin-top: 70px;
`;

function Subscription() {
  return (
    <PanelLayout>
      <UserSidebar />
      <ContentArea>
        <TopBarContainer>
          <TopBar /> 
        </TopBarContainer>
        <SubscriptionContainer>
          <SubscriptionManagement />
        </SubscriptionContainer>
      </ContentArea>
    </PanelLayout>
  );
}

export default Subscription;
