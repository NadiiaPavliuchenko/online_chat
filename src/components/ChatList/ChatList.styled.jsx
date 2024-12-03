import styled from "styled-components";

export const ChatListContainer = styled.div`
  grid-area: l;
  border-top: 1px solid gray;
  border-right: 1px solid gray;
  height: 100vh;
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
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
`;

export const Thumb = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  overflow: hidden;
  border-radius: 50px;
`;

export const ChatName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LastMessage = styled.p`
  font-size: 14px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
`;

export const DateString = styled.p`
  font-size: 12px;
  color: #999;
  margin-top: 4px;
`;
