import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth, db } from "../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import GoogleIcon from '@mui/icons-material/Google';
import { sendPasswordResetEmail } from "firebase/auth"; 

const GoogleLoginButton = styled.button`
  background-color: #fff; 
  color: #4285f4;
  padding: 20px 20px;
  border: 2px solid #f0f0f0; 
  border-radius: 999px; 
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 15px;

  display: flex;
  align-items: center;

  &:hover {
    background-color: #f0f0f0; 
  }
`;
const GoogleLoginContainer = styled.div`
  margin-top: 20px;
`;
const StyledGoogleIcon = styled(GoogleIcon)`
 align-items: center;
`;

export function LoginForm(props) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { switchToSignup } = useContext(AccountContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      await getUserData(userCredential.user.uid);
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };

  const getUserData = async (uid, name, email) => {
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        await createUserData(name, email, uid);
      }
      localStorage.setItem("userID", uid);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const logInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(result.user);
      await getUserData(user.uid, user.displayName, user.email);
      navigate('/user-dashboard');
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };

  const createUserData = async (userName, email, uid) => {
    try {
      const docRef = await setDoc(doc(db, "users", uid), {
        name: userName,
        email: email,
        uid: uid
      });
      console.log("Document written with ID: ", docRef.uid);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Lütfen e-posta adresinizi girin.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Parola sıfırlama e-postası gönderildi!");
    } catch (error) {
      console.error("Parola sıfırlama e-postası gönderilirken hata oluştu:", error.message);
      alert("Parola sıfırlama e-postası gönderilirken hata oluştu.");
    }
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={signIn}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Parola"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MutedLink href="#" onClick={handleForgotPassword}>
          {t('iforgotpass')}
        </MutedLink>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit">{t('login')}</SubmitButton>
        <Marginer direction="vertical" margin={5} />
      </FormContainer>
      <GoogleLoginContainer>
        <GoogleLoginButton onClick={logInWithGoogle}>
          <StyledGoogleIcon />
        </GoogleLoginButton>
      </GoogleLoginContainer>
      <MutedLink href="#">
        {t('notregistered')}
        <BoldLink href="#" onClick={switchToSignup}>
          {t('createacc')}
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}