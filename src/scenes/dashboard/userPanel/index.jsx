import React from 'react';
import styled from 'styled-components';
import UserSidebar from './userSidebar'; 
import Dashboard from './dashboard';
import TopBar from './topBar';

const PanelLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  width: 20%;
  background-color: #ccc; 
`;

const ContentContainer = styled.div`
  width: 82%; 
  display: flex;
  flex-direction: column; 
`;

const TopBarContainer = styled.div`
  /* Additional style definitions for TopBar can be added here if necessary */
`;

const ContentArea = styled.div`
  flex: 1;
  overflow: auto;
  padding: 20px;
`;

function UserDashboard() {
  return (
    <PanelLayout>
      <SidebarContainer>
        <UserSidebar />
      </SidebarContainer>
      <ContentContainer>
        <TopBarContainer>
          <TopBar /> 
        </TopBarContainer>
        <ContentArea>
          <Dashboard />
        </ContentArea>
      </ContentContainer>
    </PanelLayout>
  );
}

export default UserDashboard;
