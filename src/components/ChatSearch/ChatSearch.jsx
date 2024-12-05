import {
  ChatSearchStyled,
  UserHeader,
  Thumb,
  LoginButton,
  SearchForm,
  SearchButton,
  SearchInput,
} from "./ChatSearch.styled";
import { LuSearch } from "react-icons/lu";

const ChatSearch = () => {
  return (
    <ChatSearchStyled>
      <UserHeader>
        <Thumb>
          <img
            src="/src/assets/user.png"
            alt="user avatar"
            width={40}
            height={40}
          />
        </Thumb>
        <LoginButton type="button">Log in</LoginButton>
      </UserHeader>
      <SearchForm>
        <SearchButton type="submit">
          <LuSearch />
        </SearchButton>
        <SearchInput type="text" placeholder="Search chats" />
      </SearchForm>
    </ChatSearchStyled>
  );
};

export default ChatSearch;
