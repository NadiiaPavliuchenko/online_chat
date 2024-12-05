import { useDispatch } from "react-redux";
import {
  ChatSearchStyled,
  UserHeader,
  Thumb,
  LoginButton,
  SearchForm,
  SearchInput,
} from "./ChatSearch.styled";
import { LuSearch } from "react-icons/lu";
import { setQuery } from "../../redux/chats/searchSlice";

const ChatSearch = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(setQuery(e.target.value));
  };

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
        <LuSearch />
        <SearchInput
          type="text"
          name="query"
          id="query"
          placeholder="Search chats"
          onChange={(e) => handleSearch(e)}
        />
      </SearchForm>
    </ChatSearchStyled>
  );
};

export default ChatSearch;
