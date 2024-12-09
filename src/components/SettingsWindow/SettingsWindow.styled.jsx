import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledSettings = styled.div`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
export const SettingsList = styled.ul``;
export const SettingsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 40px;
  width: 100px;
  padding: 10px;
  transition: background-color 200ms ease-in-out;

  &:hover,
  :focus {
    background-color: rgb(211, 211, 211, 0.5);
  }
  &:active {
    background-color: rgb(211, 211, 211, 0.5);
  }
`;
