import styled from 'styled-components';

export const AppContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
`;

export const CardTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CardSubtitle = styled.span`
  color: #fff;
  opacity: 0.75;
`;

export const Button = styled.a`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 30px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

export const Row = styled.div`
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Column = styled.div`
  padding: 15px;
  flex: 1;
`;

export const ListCard = styled.div`
  background-color: #071952;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 3px grid #071952;
  color: #fff;
  padding: 20px;
  height: auto;
  overflow-y: auto;
`;

export const ListItem = styled.div`
  padding: 10px;
  border-bottom: 3px solid #fff;
  color: #fff;

  &:last-child {
    border-bottom: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap; /* To ensure inputs align properly on smaller screens */
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 5px solid #071952;
  border-radius: 10px;
  margin-right: 10px;
`;

export const SelectContainer = styled.div`
  flex: 3;
  margin-right: 10px;
  border: 5px solid #071952;
  border-radius: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchButton = styled.button`
  padding: 10px;
  background-color: #fff;
  border: 3px solid #35A29F;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #37B7C3;
  }
  
  img {
    height: 24px;
    width: auto;
  }
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

export const CargoButton = styled.button`
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
  background-color: #088395;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #37B7C3;
  }
`;

export const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #071952;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: 'none',
    padding: '5px',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '5px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#37B7C3' : '#fff',
    color: state.isSelected ? '#fff' : '#000',
    padding: '10px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#000',
  }),
};
