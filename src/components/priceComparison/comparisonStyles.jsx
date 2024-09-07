import styled from "styled-components";
import { Button } from "../button";

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #071952;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: rgba(7, 25, 82, 0.8);
  border-radius: 15px;
  padding: 20px;
  width: 100%;
  position: relative;
  background-image: url("../../images/background/parallax-background.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`;

export const StyledButton = styled(Button)`
  margin: 0 10px;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #071952;
  transition: background-color 0.3s ease;
  width: 30%;
  &:hover {
    background-color: #f1f1f1;
    color: #071952;
  }
`;

export const StyledInput = styled.input`
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 40px);
`;

export const StyledSelect = styled.select`
  padding: 4px 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 35px;
  box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
`;

export const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
`;

export const ShippingResultsContainerWrapper = styled.div`
  margin-top: 20px;
  display: ${props => (props.showResults ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Description = styled.p`
  margin: 30px 0;
  color: #071952;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  width: 80%;
  line-height: 1.4;
  position: relative;
  top: -0px;
`;

export const AmazonButton = styled.button`
  background: url(${require('../../images/asin/asin.png')}) no-repeat center;
  background-size: contain;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-left: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
