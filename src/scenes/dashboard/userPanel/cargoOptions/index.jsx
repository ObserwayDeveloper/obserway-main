import React from 'react';
import UserSidebar from '../userSidebar'; 
import styled from 'styled-components';
import CargoOptionsPage from './cargoOptions';



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
function CargoOptions() {
  return (
    <PanelLayout>
      <UserSidebar />
      <ContentArea>
        <CargoOptionsPage />
      </ContentArea>
    </PanelLayout>
  );
}

export default CargoOptions;
