import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  border-radius: 15px;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  color: #4998ca;
`;

export const CloseButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledLabel = styled.label`
  font-style: italic;
`;

export const StyledInput = styled.input`
  border: 1px solid grey;
  border-radius: 5px;

  width: 300px;
  padding: 10px;
`;

export const StyledButton = styled.button`
  align-self: center;
  background-color: #4998ca;
  border: none;
  color: white;
  border-radius: 20px;

  width: 100px;
  padding: 10px;

  transition: background-color 200ms ease-in-out;

  &:hover,
  :focus {
    background-color: #0b69a3;
  }
  &:active {
    background-color: #0b69a3;
  }
`;
