import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5);
  z-index: 0;
`;

export const ModalHeader = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const YesButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
`;

export const NoButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
`;

export const CloseButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;
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
