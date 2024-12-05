import styled from "styled-components";

export const ChatListContainer = styled.div`
  grid-area: l;
  border-top: 1px solid gray;
  border-right: 1px solid gray;
  height: 100vh;
  overflow: auto;
`;

export const ChatListStyled = styled.ul`
  padding: 0;
  margin: 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const Title = styled.h3`
  color: #4998ca;
  font-size: 14px;
  margin: 20px 0;
  font-weight: bold;
`;

export const AddChatButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  padding: 8px;

  color: #4998ca;
  background-color: transparent;
  border: 1px solid #4998ca;
  border-radius: 15px;
  transition: color 200ms, border-color 200ms ease-in-out;

  &:hover,
  :focus {
    color: #0b69a3;
    border-color: #0b69a3;
  }
  &:active {
    color: #0b69a3;
    border-color: #0b69a3;
    outline: none;
  }
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
