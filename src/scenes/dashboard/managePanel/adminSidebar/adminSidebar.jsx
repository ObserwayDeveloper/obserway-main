import React, { useState } from 'react';
import { Container } from '@mui/material';
import {
  SidebarContainer,
  Toggle,
  LogoContainer,
  LogoImg,
  CloseButton,
  SidebarContent,
  SidebarLink,
  MessageCount
} from './adminSidebarStyles'; // Import styled components

import Logo from '../../../../images/logos/logo.png';
import {
  DashboardOutlined,
  PersonOutlined,
  ReceiptOutlined,
  EqualizerOutlined,
  MailOutlined,
  InventoryOutlined,
  ReportOutlined,
  SettingsOutlined,
  AddCircleOutline,
  LogoutOutlined,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';


const AdminSidebar = () => {
    const [selectedItem, setSelectedItem] = useState('analytics');
    const { t } = useTranslation();

    return (
      <Container>
        <SidebarContainer>
            <Toggle>
                <LogoContainer>
                    <LogoImg src={Logo} alt="Logo" />
                </LogoContainer>
                <CloseButton id="close-btn">
                    <span className="material-icons-sharp">close</span>
                </CloseButton>
            </Toggle>
            <SidebarContent>
                <SidebarLink onClick={() => setSelectedItem('dashboard')} selected={selectedItem === 'dashboard'}>
                    <DashboardOutlined /> {/* MUI Dashboard icon */}
                    <h3>{t('sidebar.dashboard')}</h3>
                </SidebarLink>
                <SidebarLink onClick={() => setSelectedItem('users')} selected={selectedItem === 'users'}>
                    <PersonOutlined /> {/* MUI PersonOutline icon */}
                    <h3>{t('sidebar.users')}</h3>
                </SidebarLink>
                <SidebarLink onClick={() => setSelectedItem('history')} selected={selectedItem === 'history'}>
                    <ReceiptOutlined /> {/* MUI ReceiptLong icon */}
                    <h3>{t('sidebar.payment_history')}</h3>
                </SidebarLink>
                <SidebarLink onClick={() => setSelectedItem('analytics')} selected={selectedItem === 'analytics'} className="active">
                    <EqualizerOutlined /> {/* MUI Insights icon */}
                    <h3>{t('sidebar.analytics')}</h3>
                </SidebarLink>
                <SidebarLink onClick={() => setSelectedItem('tickets')} selected={selectedItem === 'tickets'}>
                    <MailOutlined /> {/* MUI MailOutline icon */}
                    <h3>{t('sidebar.subscriptions')}</h3>
                    <MessageCount>27</MessageCount>
                </SidebarLink>
                <SidebarLink onClick={() => setSelectedItem('sale-list')} selected={selectedItem === 'sale-list'}>
                    <InventoryOutlined /> {/* MUI Inventory icon */}
                    <h3>{t('sidebar.pending_payments')}</h3>
                </SidebarLink>
                <SidebarLink onClick={() => setSelectedItem('reports')} selected={selectedItem === 'reports'}>
                    <ReportOutlined /> {/* MUI ReportGmailerrorred icon */}
                    <h3>{t('sidebar.reports')}</h3>
                </SidebarLink>
                <SidebarLink onClick={() => setSelectedItem('settings')} selected={selectedItem === 'settings'}>
                    <SettingsOutlined /> {/* MUI Settings icon */}
                    <h3>{t('sidebar.settings')}</h3>
                </SidebarLink>
                <SidebarLink onClick={() => setSelectedItem('new-login')} selected={selectedItem === 'new-login'}>
                    <AddCircleOutline /> {/* MUI Add icon */}
                    <h3>{t('sidebar.new_admin')}</h3>
                </SidebarLink>
                <SidebarLink onClick={() => setSelectedItem('logout')} selected={selectedItem === 'logout'}>
                    <LogoutOutlined /> {/* MUI Logout icon */}
                    <h3>{t('sidebar.logout')}</h3>
                </SidebarLink>
            </SidebarContent>
        </SidebarContainer>
        </Container>
    );
}

export default AdminSidebar;
