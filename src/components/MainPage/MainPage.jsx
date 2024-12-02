import ChatList from "../ChatList/ChatList";
import ChatSearch from "../ChatSearch/ChatSearch";
import ChatWindow from "../ChatWindow/ChatWindow";
import { MainPageContainer } from "./MainPage.styled";

const MainPage = () => {
  return (
    <MainPageContainer>
      <ChatSearch />
      <ChatList />
      <ChatWindow />
    </MainPageContainer>
  );
};

export default MainPage;
