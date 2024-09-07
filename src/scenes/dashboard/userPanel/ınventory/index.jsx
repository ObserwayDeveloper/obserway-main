import React from 'react';
import UserSidebar from '../userSidebar';
import TopBar from '../topBar'; 
import styled from 'styled-components';
import Inventory from './ınventoryPage';

const PanelLayout = styled.div`
  display: flex;
  flex-direction: column; /* Üstten alta hizalama */
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 100%; 
`;

const ContentArea = styled.div`
  margin-left: 25%; 
  width: 70%;
  padding: 20px;
  overflow: auto;
`;

function InventoryPage() {
  return (
    <PanelLayout>
      <TopBar /> 
      <ContentWrapper>
        <UserSidebar />
        <ContentArea>
          <Inventory />
        </ContentArea>
      </ContentWrapper>
    </PanelLayout>
  );
}

export default InventoryPage;
