import React from 'react';
import UserSidebar from '../userSidebar'; 
import styled from 'styled-components';
import BalanceManagement from './balanceManagement';


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

function BalanceManagementPage() {
  return (
    <PanelLayout>
      <UserSidebar />
      <ContentArea>
       <BalanceManagement />
      </ContentArea>
    </PanelLayout>
  );
}

export default BalanceManagementPage;
