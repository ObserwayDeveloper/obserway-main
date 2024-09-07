import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import styled from 'styled-components';

import { Marginer } from "../marginer";
import { BoldLink, BoxContainer, FormContainer, MutedLink, SubmitButton } from "./common";
import { AccountContext } from "./context";
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";

const InputWithIcon = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 0px 40px 0px 10px;
  border: 2px solid rgba(200, 200, 200, 0.1);
  margin-bottom: 5px;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    border-color: #5963c3;
    outline: none;
  }
`;

const IconWrapper = styled(IconButton)`
  position: absolute;
  top: 0;
  height: 100%;
  color: rgba(100, 100, 100, 0.9);
  &:hover {
    background: transparent;
  }
`;

export function SignupForm(props) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { switchToSignin } = useContext(AccountContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');  // Telefon numarası için state ekleyin
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const checkEmailAvailability = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendVerificationEmail(userCredential.user);
      await createUserData(name, email, phone, userCredential.user.uid);  // Telefon numarasını da dahil edin
      toast.success(t('registration_successful_check_email'));
      navigate('/user-dashboard');
    } catch (error) {
      console.error("Firebase error: ", error);
      if (error.code === 'auth/email-already-in-use') {
        toast.error(t('email_already_in_use'));
      } else if (error.code === 'auth/invalid-email') {
        toast.error(t('invalid_email'));
      } else {
        toast.error(t('error_during_registration'));
      }
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return false;
    }
    return true;
  };

  const signUp = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !password || !confirmPassword) {  // Telefon numarasını da kontrol edin
      toast.error(t('please_fill_all_fields'));
      return;
    }

    if (!validateEmail(email)) {
      toast.error(t('invalid_email'));
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(true);
      toast.error(t('password_length_error'));
      return;
    } else {
      setPasswordError(false);
    }

    if (password !== confirmPassword) {
      toast.error(t('passwords_do_not_match'));
      return;
    }

    await checkEmailAvailability();
  };

  const sendVerificationEmail = async (user) => {
    await sendEmailVerification(user);
  };

  const createUserData = async (userName, userEmail, userPhone, uid) => {  // Telefon numarasını ekleyin
    try {
      await setDoc(doc(db, "users", uid), {
        name: userName,
        email: userEmail,
        phone: userPhone,  // Telefon numarasını kaydedin
        uid: uid
      });
    } catch (error) {
      toast.error(t('error_creating_user_data'));
    }
  };

  return (
    <BoxContainer>
      <ToastContainer />
      <FormContainer onSubmit={signUp}>
        <InputWithIcon>
          <Input placeholder={t('name')} value={name} onChange={(e) => setName(e.target.value)} />
        </InputWithIcon>
        <InputWithIcon>
          <Input placeholder={t('email')} value={email} onChange={(e) => setEmail(e.target.value)} />
        </InputWithIcon>
        {email && !validateEmail(email) && <span style={{ color: 'red' }}>{t('invalid_email')}</span>}
        <InputWithIcon>
          <Input placeholder={t('examplephone')} value={phone} onChange={(e) => setPhone(e.target.value)} />  {/* Telefon numarası alanı */}
        </InputWithIcon>
        <InputWithIcon>
          <Input type={showPassword ? 'text' : 'password'} placeholder={t('password')} value={password} onChange={(e) => setPassword(e.target.value)} />
          <IconWrapper onClick={togglePasswordVisibility}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconWrapper>
        </InputWithIcon>
        {passwordError && <span style={{ color: 'red' }}>{t('password_length_error')}</span>}
        <InputWithIcon>
          <Input type={showConfirmPassword ? 'text' : 'password'} placeholder={t('confirm_password')} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <IconWrapper onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
          </IconWrapper>
        </InputWithIcon>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit">{t('create_account')}</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        {t('already_have_an_account')}
        <div>
          <BoldLink href="#" onClick={switchToSignin}>
            {t('sign_in_here')}
          </BoldLink>
        </div>
      </MutedLink>
    </BoxContainer>
  );
}