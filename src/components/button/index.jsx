import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  height: 45px;
  border: none;
  outline: none;
  color: #000;
  padding: 6px 1em;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  font-weight: 500;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  transition: all 200ms ease-in-out;

   &:focus {
    outline: none;
  }

  &:hover {
    background-color: #f1f1f1; /* Butonun arka plan rengini değiştir */
    color: #333; /* Butonun metin rengini değiştir */
    transform: scale(1.05); /* Butonu biraz büyüt */
  }
`;

export function Button(props) {
  const { size, onClick } = props; // onClick destructure 

  return (
    <ButtonWrapper size={size} className={props.className} onClick={onClick}> 
      {props.children}
    </ButtonWrapper>
  );
}
