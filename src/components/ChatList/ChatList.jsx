import { useSelector } from "react-redux";
import {
  ChatListStyled,
  ChatListContainer,
  Title,
  ChatItem,
  ChatName,
  LastMessage,
  DateString,
  MessageContainer,
  Thumb,
  ItemContainer,
} from "./ChatList.styled";
import { dateFormat1 } from "../../helpers/dateFormatters";
import { selectVisibleChats } from "../../redux/chats/selectors";
import { Outlet, useNavigate } from "react-router-dom";

const ChatList = () => {
  const chats = useSelector(selectVisibleChats);
  const navigate = useNavigate();

  const handleOpenChat = (id) => {
    navigate(`/chat/${id}`);
  };

  return (
    <>
      <ChatListContainer>
        <Title>Chats</Title>
        <ChatListStyled>
          {chats &&
            chats.map((chat) => (
              <ChatItem key={chat._id} onClick={() => handleOpenChat(chat._id)}>
                <Thumb>
                  <img src="./src/assets/user.png" alt="avatar" />
                </Thumb>
                <ItemContainer>
                  <ChatName>
                    {chat.firstName} {chat.lastName}
                  </ChatName>
                  {chat.lastMessage && (
                    <MessageContainer>
                      <LastMessage>{chat.lastMessage.text}</LastMessage>
                      {chat.lastMessage.createdAt && (
                        <DateString>
                          {dateFormat1(chat.lastMessage.createdAt)}
                        </DateString>
                      )}
                    </MessageContainer>
                  )}
                </ItemContainer>
              </ChatItem>
            ))}
        </ChatListStyled>
      </ChatListContainer>
      <Outlet />
    </>
  );
};

export default ChatList;
