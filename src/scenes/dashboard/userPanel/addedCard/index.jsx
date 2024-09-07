import React from 'react';
import UserSidebar from '../userSidebar'; 
import styled from 'styled-components';
import AccountAndCardManager from './addedCard'

const PanelLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentArea = styled.div`
  margin-left: 25%; 
  width: 70%;
  padding: 20px;
  overflow: auto;
`;

function AddedCardPage() {
  return (
    <PanelLayout>
      <UserSidebar />
      <ContentArea>
       <AccountAndCardManager />
      </ContentArea>
    </PanelLayout>
  );
}

export default AddedCardPage;
