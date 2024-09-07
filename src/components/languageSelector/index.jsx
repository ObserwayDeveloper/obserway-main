import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  position: relative;
`;

const LanguageButton = styled.button`
  font-size: 15px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    filter: contrast(0.8);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: #071952;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  width: fit-content;
`;

const DropdownItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  display: block;
  width: fit-content;

  &:hover {
    color:000;
    background-color: #f1f1f1;
  }
`;

const DropdownItemTR = styled(DropdownItem)``;

const LanguageSelector = () => {
  const [isDropdownOpenLanguage, setDropdownOpenLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('TR');

  useEffect(() => {
    // Yerel depolamadan dil tercihini yükle
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage.toUpperCase());
    }
  }, []);

  const toggleDropdownLanguage = () => {
    setDropdownOpenLanguage(!isDropdownOpenLanguage);
  };

  const changeLanguage = (language) => {
    setDropdownOpenLanguage(false);

    const languageCode = language.toUpperCase();
    setSelectedLanguage(languageCode);

    // Dil tercihini yerel depolamada sakla
    localStorage.setItem('selectedLanguage', languageCode);
  };

  return (
    <LanguageContainer>
      <LanguageButton size={12} onClick={toggleDropdownLanguage}>
        {selectedLanguage}
      </LanguageButton>
      <DropdownMenu isOpen={isDropdownOpenLanguage}>
        <DropdownItemTR onClick={() => changeLanguage('tr')}>TR</DropdownItemTR>
        <DropdownItem onClick={() => changeLanguage('en')}>EN</DropdownItem>
      </DropdownMenu>
    </LanguageContainer>
  );
};

export default LanguageSelector;
