import styled from "styled-components";

export const ChatWindowStyled = styled.div`
  grid-area: w;
  height: 100vh;
`;

export const ChatMessages = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 80vh;
  overflow-y: auto;
  padding: 16px;
`;

export const MessageBox = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  align-items: ${(props) =>
    props.$sender === "bot" ? "flex-start" : "flex-end"};
`;

export const StyledMessage = styled.div`
  display: inline-flex;
  width: fit-content;
  border-radius: 10px;
  padding: 5px 10px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 5px;
  max-width: 400px;

  color: ${(props) => (props.$sender === "bot" ? "#000000" : "#ffffff")};
  background-color: ${(props) =>
    props.$sender === "bot" ? "#a9a9a9" : "#2e315e"};
`;

export const Date = styled.p`
  color: lightgray;
  font-size: 12px;
  font-style: italic;
`;

export const MessageInput = styled.div`
  background-color: #e1e1e1;
  border-top: 1px solid grey;
  padding: 16px;
`;

export const StyledInputContainer = styled.form`
  background-color: #eaeaea;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 25px;
  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`;
