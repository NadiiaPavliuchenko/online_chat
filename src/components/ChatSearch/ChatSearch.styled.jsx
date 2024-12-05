import styled from "styled-components";

export const ChatSearchStyled = styled.div`
  display: grid;
  grid-area: s;
  border-right: 1px solid grey;
  background-color: #e1e1e1;
  padding: 16px;
`;

export const UserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Thumb = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50px;
`;

export const LoginButton = styled.button`
  height: 30px;
  text-align: center;

  padding: 8px 10px;
  font-size: 12px;
  font-weight: bold;

  background-color: white;
  color: #4998ca;
  border: 1px solid #4998ca;
  border-radius: 15px;

  transition: color 200ms, border-color 200ms ease-in-out;

  &:hover,
  :focus {
    color: #0b69a3;
    border-color: #0b69a3;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;

  background-color: #eaeaea;
  border: 1px solid grey;
  border-radius: 15px;
  padding: 5px;
`;

export const SearchButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;
  margin-right: 5px;
  color: #949494;
`;

export const SearchInput = styled.input`
  width: 100%;
  &:focus {
    outline: none;
  }
`;
