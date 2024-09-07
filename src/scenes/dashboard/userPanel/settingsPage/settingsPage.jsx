import React, { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next'; // Çeviri fonksiyonunu ekledik
import { auth, db, storage } from '../../../../firebase/firebase';
import { updateProfile, getAuth, updatePassword, deleteUser } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { 
  ProfileWrapper, Container, ProfileImageContainer, ProfileImage, WelcomeMessage, 
  Form, Input, Button, FileInputHidden, SectionContainer, LeftSection, RightSection 
} from './settingsPageStyles';

const defaultAvatar = "https://upload.wikimedia.org/wikipedia/commons/a/af/Default_avatar_profile.jpg";

function UserSettings() {
    const { t } = useTranslation(); 
    const [currentUser, setCurrentUser] = useState(auth.currentUser);
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [userData, setUserData] = useState({
      name: '',
      email: '',
      phone: '',
      birthDate: '',
      companyName: '',
      taxNumber: '',
      address: '',
    });

    const fileInputRef = useRef();
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

    const handleOpenConfirmationModal = () => {
      setIsConfirmationModalOpen(true);
    };

    useEffect(() => {
      if (currentUser) {
        const fetchUserData = async () => {
          const userRef = doc(db, "users", currentUser.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            let userData = userSnap.data();
            setUserData(userData);
            setPreviewImage(userData.photoURL || defaultAvatar);
          } else {
            console.log("No such document!");
          }
        };
        fetchUserData();
      }
    }, [currentUser]);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(file);
        setPreviewImage(URL.createObjectURL(file));
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (currentUser) {
        await setDoc(doc(db, "users", currentUser.uid), userData, { merge: true });
        if (image) {
          const imageRef = ref(storage, `profileImages/${currentUser.uid}`);
          await uploadBytes(imageRef, image).then(async () => {
            const url = await getDownloadURL(imageRef);
            await updateProfile(currentUser, { photoURL: url });
            await setDoc(doc(db, "users", currentUser.uid), { photoURL: url }, { merge: true });
          });
        }
        toast.success(t("settings.saved")); 
     }
    };

    const handlePasswordChange = async (event) => {
      event.preventDefault();

      if (newPassword.length < 6) {
          toast.error(t("password.min_length")); 
          return;
      }

      try {
          await updatePassword(auth.currentUser, newPassword);
          toast.success(t("password.updated")); 
          setNewPassword('');
      } catch (error) {
          console.error(error);
          toast.error(t("password.error"));
      }
    };

    const removeAccount = () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (window.confirm(t("account.confirm_delete"))) {
        deleteUser(user).then(() => {
          toast.success(t("account.deleted"));
        }).catch((error) => {
          console.error("Bir hata oluştu: ", error);
          toast.error(t("account.error_deleting"));
        });
      }
    };

    return (
      <Container>
         <ToastContainer />
        <SectionContainer>
          <LeftSection>
            <ProfileWrapper>
              <ProfileImageContainer onClick={() => fileInputRef.current.click()}>
                <ProfileImage src={previewImage || userData.photoURL || defaultAvatar} alt={t("user.profile_image")} />
                <FileInputHidden ref={fileInputRef} type="file" onChange={handleImageChange} />
              </ProfileImageContainer>
              {userData.name && <WelcomeMessage>{t("user.welcome", { name: userData.name })}</WelcomeMessage>}
            </ProfileWrapper>
            <Form onSubmit={handleSubmit}>
              <Input type="text" name="name" value={userData.name} onChange={handleInputChange} placeholder={t("user.name")} />
              <Input type="email" name="email" value={userData.email} onChange={handleInputChange} placeholder={t("user.email")} />
              <Input type="tel" name="phone" value={userData.phone} onChange={handleInputChange} placeholder={t("user.phone")} />
              <Input type="date" name="birthDate" value={userData.birthDate} onChange={handleInputChange} placeholder={t("user.birth_date")} />
              <Input type="text" name="companyName" value={userData.companyName} onChange={handleInputChange} placeholder={t("user.company_name")} />
              <Input type="text" name="taxNumber" value={userData.taxNumber} onChange={handleInputChange} placeholder={t("user.tax_number")} />
              <Input type="text" name="address" value={userData.address} onChange={handleInputChange} placeholder={t("user.address")} />
              <Button type="submit">{t("settings.save_changes")}</Button>
            </Form>
          </LeftSection>
          <RightSection>
            <h2>{t("security.title")}</h2>
            <form onSubmit={handlePasswordChange}>
              <label>{t("password.new_password")}</label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder={t("password.confirm")}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button type="submit">{t("password.change_password")}</Button>
            </form>
            <h2>{t("account.management")}</h2>
            <Button onClick={handleOpenConfirmationModal}>{t("account.delete_account")}</Button>
          </RightSection>
        </SectionContainer>
      </Container>
    );
}

export default UserSettings;
