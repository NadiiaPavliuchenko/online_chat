import styled from "styled-components";

export const ChatListContainer = styled.div`
  display: grid;
  grid-area: l;
  border-top: 1px solid gray;
`;

export const ChatListStyled = styled.ul`
  padding: 0;
  margin: 0;
`;

export const Title = styled.h3`
  color: #4998ca;
  font-size: 14px;
  margin: 20px 16px;
  font-weight: bold;
`;

export const ChatItem = styled.li`
  padding: 16px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ChatName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const LastMessage = styled.p`
  font-size: 14px;
  color: #666;
`;

export const DateString = styled.p`
  font-size: 12px;
  color: #999;
  margin-top: 4px;
`;
