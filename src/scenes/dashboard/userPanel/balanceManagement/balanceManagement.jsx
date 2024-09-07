import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 50px;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
`;

const BalanceInfo = styled.div`
  background-color: #fff;
  border-radius: 4px;
  margin: 20px 0;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const BalanceManagement = () => {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('balance_management.title')}</Title>
      <BalanceInfo>
        <p>{t('balance_management.current_balance')}</p>
      </BalanceInfo>
      <Form>
        <Input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder={t('balance_management.deposit_amount')}
        />
        <Button type="submit">{t('balance_management.deposit_button')}</Button>
      </Form>
      <Form>
        <Input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder={t('balance_management.withdraw_amount')}
        />
        <Button type="submit">{t('balance_management.withdraw_button')}</Button>
      </Form>
    </Container>
  );
};

export default BalanceManagement;
