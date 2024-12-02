import styled from "styled-components";

export const ChatWindowStyled = styled.div`
  grid-area: w;
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

export const MessageBox = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  align-items: ${(props) =>
    props.$sender === "user" ? "flex-start" : "flex-end"};
`;

export const StyledMessage = styled.div`
  display: inline-flex;
  width: fit-content;
  border-radius: 10px;
  padding: 5px 10px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;

  color: ${(props) => (props.$sender === "user" ? "#000000" : "#ffffff")};
  background-color: ${(props) =>
    props.$sender === "user" ? "#a9a9a9" : "#2e315e"};
`;

export const Date = styled.p`
  color: lightgray;
  font-size: 12px;
  font-style: italic;
`;
