import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Shadow = styled.div`
  filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.3));
`;

export const StyledSettings = styled.div`
  position: absolute;
  background: white;
  padding-top: 15px;
  clip-path: polygon(
    100% 100%,
    0% 100%,
    0% 15%,
    84% 15%,
    77% 0%,
    69% 15%,
    100% 15%
  );
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
