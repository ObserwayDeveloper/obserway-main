import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ObsLogo from '../../../images/logos/logo.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import PaymentIcon from '@mui/icons-material/Payment';
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import ListAltIcon from '@mui/icons-material/ListAlt'; 
import CreateIcon from '@mui/icons-material/Create';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const SidebarContainer = styled.nav`
  width: 20%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(7, 25, 82, 0.9);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  border-radius: 0 10px 10px 0;
`;

const LogoContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 11.5rem;
  min-width: 7.5rem;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  width: 100%;

  &:hover {
    color: #f0f0f0;
  }

  svg {
    margin-right: 15px;
  }
`;

const SectionTitle = styled.h5`
  color: #fff;
  margin: 30px 20px 10px;
  font-size: 16px;
  text-align: left;
  border-bottom: 1px solid rgba(241, 241, 241, 0.5);
  padding-bottom: 10px; 
`;

const UserSidebar = () => {
  const { t } = useTranslation();
  const handleMexicoToShip = () => {
    const mexicoShipWindow = window.open('/login', '_blank', 'width=600,height=400');
  };
  return (
    <SidebarContainer>
      <LogoContainer>
        <Link to="/user-dashboard">
          <LogoImage to="" src={ObsLogo} alt="Logo" />
        </Link>
      </LogoContainer>
      <NavList>
        <NavItem>
          <NavLink to="/user-dashboard"><DashboardIcon />{t('mainscreen')}</NavLink>
        </NavItem>
        <SectionTitle>{t('shipmentmanagement')}</SectionTitle>
        <NavItem>
          <NavLink to="/user-dashboard/inventory"><ListAltIcon />{t('myshipments')}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/user-dashboard/create-shipment"><CreateIcon />{t('createshipment')}</NavLink>
        </NavItem>
        <SectionTitle>{t('shipmentpayment')}</SectionTitle>
        <NavItem>
          <NavLink to="/payments-history"><HistoryIcon />{t('paymenthistory')}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/payment"><PaymentIcon />{t('addpayments')}</NavLink>
        </NavItem>
        <SectionTitle />
        <NavItem>
          <NavLink to="/user-dashboard/add-adress"><LocationOnIcon />{t('adressmanagement')}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#"><LocalShippingIcon />{t('cargo')}</NavLink>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default UserSidebar;
