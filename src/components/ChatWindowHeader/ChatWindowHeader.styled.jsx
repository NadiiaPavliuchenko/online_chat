import styled from "styled-components";

export const ChatHeader = styled.div`
  height: 60px;
  background-color: rgb(203, 200, 200);
  padding: 16px;
  display: flex;
  gap: 15px;
  align-items: center;
  border-bottom: 1px solid grey;
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
