import React from 'react';
import UserSidebar from '../userSidebar'; 
import styled from 'styled-components';
import UserSettings from './settingsPage';




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


function Settings() {
  return (
    <PanelLayout>
       <UserSidebar />
      <ContentArea>
     <UserSettings />
      </ContentArea>
    </PanelLayout>
  );
}

export default Settings;
