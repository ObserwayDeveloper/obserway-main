import React from 'react';
import styled from 'styled-components';

// Import components
import Sidebar from './adminSidebar/adminSidebar.jsx'; 
import Analyses from './analystics.jsx'; 
import NewUsersSection from './newUser'; 
import RecentOrders from './recentOrders';
import RightSection from './rightSection'; 

// Main container
const Container = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.8);
`;

const SidebarContainer = styled.div`
  /* Additional sidebar styles can be added here */
`;

const MainContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const RightSectionContainer = styled.div`
  /* Additional right section styles can be added here */
`;

function ManageDashboard() {
  return (
    <Container>
      {/* Left Section */}
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      
      {/* Main Content */}
      <MainContainer>
        
        {/* Analytics Component */}
        <Analyses />
        
        {/* New Users Component */}
        <NewUsersSection />
        
        {/* Recent Orders Component */}
        <RecentOrders />
      </MainContainer>
      
      {/* Right Section */}
      <RightSectionContainer>
        <RightSection />
      </RightSectionContainer>
    </Container>
  );
}

export default ManageDashboard;
