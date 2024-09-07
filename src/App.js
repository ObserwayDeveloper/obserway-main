import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { HomePage } from './containers/HomePage';
import { CustomerAccessPage } from './containers/customerAccessPage';
import { AboutUsPage } from './containers/aboutUsPage';
import { FaqsPage } from './containers/faqsPage';
import { AmazonDrop, Solutions } from './containers/ourServices/eCommerce/index.jsx';
import { CompanySolutions, EtsyDrop } from './containers/ourServices/intComp/index.jsx';
import { AmazonRecovery, ShopifyDrop } from './containers/ourServices/amazonSolutions/index.jsx';
import { EducationInform } from './containers/ourServices/educationPage';
import TawkToChat from './tawkTo';
import UserDashboard from './scenes/dashboard/userPanel';
import AddShipmentsPanel from './scenes/dashboard/userPanel/addShipment';
import CargoOptions from './scenes/dashboard/userPanel/cargoOptions';
import PaymentHistory from './scenes/dashboard/userPanel/paymentHistory';
import SettingsPage from './scenes/dashboard/userPanel/settingsPage';
import PaymentPage from './scenes/dashboard/userPanel/paymentPage';
import InventoryPage from './scenes/dashboard/userPanel/ınventory';
import ManageDashboard from './scenes/dashboard/managePanel';
import AddAdressPanel from './scenes/dashboard/userPanel/adresses/index.jsx';
import EcommerceSolutions from './containers/ourServices/eCommerce/eCommerceSolutions.jsx';

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      <TawkToChat />
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="fade"
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/customer/access/:action" element={<CustomerAccessPage />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/user-dashboard/create-shipment" element={<AddShipmentsPanel />} />
            <Route path="our-services/ecommerce-solutions" element={<Solutions />} />
            <Route path="our-services/company-solutions" element={<CompanySolutions />} />
            <Route path="our-services/amazon-solutions" element={<AmazonRecovery />} />
            <Route path="our-services/educate-inform" element={<EducationInform />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="faqs" element={<FaqsPage />} />
            <Route path="cargo-options" element={<CargoOptions />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="payments-history" element={<PaymentHistory />} />
            <Route path="/user-dashboard/inventory" element={<InventoryPage />} />
            <Route path="manage-panel" element={<ManageDashboard />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
