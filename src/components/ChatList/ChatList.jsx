import { useSelector } from "react-redux";
import {
  ChatListStyled,
  ChatListContainer,
  Title,
  ChatItem,
  ChatName,
  LastMessage,
  DateString,
} from "./ChatList.styled";
import { formatDate } from "../../helpers/dateFormatters";
import { selectVisibleChats } from "../../redux/chats/selectors";

const ChatList = () => {
  const chats = useSelector(selectVisibleChats);

  return (
    <ChatListContainer>
      <Title>Chats</Title>
      <ChatListStyled>
        {chats &&
          chats.map((chat) => (
            <ChatItem key={chat._id}>
              <ChatName>
                {chat.firstName} {chat.lastName}
              </ChatName>
              {chat.lastMessage && (
                <>
                  <LastMessage>{chat.lastMessage.text}</LastMessage>
                  {chat.lastMessage.createdAt && (
                    <DateString>
                      {formatDate(chat.lastMessage.createdAt)}
                    </DateString>
                  )}
                </>
              )}
            </ChatItem>
          ))}
      </ChatListStyled>
    </ChatListContainer>
  );
};

export default ChatList;
