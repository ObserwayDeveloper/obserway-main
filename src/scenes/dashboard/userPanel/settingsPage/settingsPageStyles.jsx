import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 40px;
  border-radius: 20px;
  background-color: rgba(53, 162, 159, 0.3);
  box-shadow: 0 4px 8px rgba(53, 162, 159, 0.1);
  width: 1000px;
  box-sizing: border-box;
  margin-top: 5%;
`;

export const ProfileImageContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #35A29F;
  cursor: pointer;
  &:hover {
    border-color: #F2F7A1;
  }
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const WelcomeMessage = styled.div`
  margin: 40px 0;
  font-size: 24px;
  color: #333;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #35A29F;
  width: calc(100% - 20px);
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #35A29F;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #35A29F;
  }
`;

export const FileInputHidden = styled.input`
  display: none;
`;

export const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  gap: 20px;
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;
