import styled from "styled-components";

export const ChatHeader = styled.div`
  height: 60px;
  background-color: #e1e1e1;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const Thumb = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Name = styled.h3`
  font-size: 16px;
`;

export const SettingsButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  color: #4998ca;
  transition: color 200ms ease-in-out;

  &:hover,
  :focus {
    color: #0b69a3;
  }
  &:active {
    color: #0b69a3;
    outline: none;
  }
`;
