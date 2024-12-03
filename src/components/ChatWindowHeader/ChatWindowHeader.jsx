import { useSelector } from "react-redux";
import { ChatHeader, ChatName, Name, Thumb } from "./ChatWindowHeader.styled";
import { selectChats } from "../../redux/chats/selectors";

const ChatWindowHeader = ({ chatId }) => {
  const chats = useSelector(selectChats);
  let curChat;
  if (chats && chats.length > 0) {
    curChat = chats.filter((chat) => chat._id === chatId);
  }
  console.log(curChat);

  return (
    <ChatHeader>
      <Thumb>
        <img src="/src/assets/user.png" alt="chat avatar" />
      </Thumb>
      <ChatName>
        {chats.length > 0 && (
          <>
            <Name>{curChat[0].firstName}</Name>
            <Name>{curChat[0].lastName}</Name>
          </>
        )}
      </ChatName>
    </ChatHeader>
  );
};

export default ChatWindowHeader;
