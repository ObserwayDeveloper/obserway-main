import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import backgroundImg from '../../../images/detailImg/a3.webp';

const BackgroundContainer = styled.div`
  position: absolute;
  top: 80%;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 60px;
  background-image: url(${backgroundImg});
  background-size: auto 80%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
`;

const AppointmentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: black;
  height: 70vh;
  width: 70vw;
  position: relative;
  overflow: hidden;
`;

const NeonEffect = css`
  box-shadow: 
    0 0 8px rgba(7, 25, 82, 1), 
    0 0 15px rgba(7, 25, 82, 1), 
    0 0 30px rgba(7, 25, 82, 1), 
    0 0 60px rgba(7, 25, 82, 1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 10px;
  font-size: 1.2rem;
  position: relative;
  ${NeonEffect};
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  resize: none;
  height: 150px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #088395;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin: 0 10px;

  &:hover {
    background-color: #F2F7A1;
    color: black;
  }
`;

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateTime: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const sendWhatsAppMessage = () => {
    const message = `Merhaba, adım ${formData.name}. Dropshipping eğitimi hakkında daha fazla bilgi almak istiyorum. İletişim bilgilerim: E-posta: ${formData.email}, Tarih ve Saat: ${formData.dateTime}, Ek bilgiler: ${formData.description}`;
    const whatsappURL = `https://wa.me/+905010804714?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <BackgroundContainer />
      <AppointmentContainer>
        <Form onSubmit={handleSubmit}>
          <h2>Online Dropshipping Eğitimi İçin Randevu Oluştur</h2>
          <Input type="text" name="name" placeholder="Adınız" required value={formData.name} onChange={handleChange} />
          <Input type="email" name="email" placeholder="Email Adresiniz" required value={formData.email} onChange={handleChange} />
          <Input type="datetime-local" name="dateTime" placeholder="Tarih ve Saat" required value={formData.dateTime} onChange={handleChange} />
          <TextArea name="description" placeholder="Açıklama" required value={formData.description} onChange={handleChange}>         </TextArea>
          <ButtonsContainer>
            <StyledButton type="submit">Randevu Al</StyledButton>
            <StyledButton type="button" onClick={sendWhatsAppMessage}>WhatsApp İle İletişime Geç</StyledButton>
          </ButtonsContainer>
        </Form>
      </AppointmentContainer>
    </>
  );
}

export default AppointmentForm;

