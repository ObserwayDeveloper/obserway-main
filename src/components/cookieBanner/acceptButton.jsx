import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #088395; /* Renk seçimleri */
  border: none;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px; /* Buton köşelerini yuvarlatma */
  transition: background-color 0.3s;

  &:hover {
    background-color: #0a6a73; /* Hover efektleri */
  }
`;

const AcceptButton = ({ onClick }) => {
  return <Button onClick={onClick}>Tümünü Kabul Et</Button>;
};

export default AcceptButton;
