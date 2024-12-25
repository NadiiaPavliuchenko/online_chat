import { useDispatch, useSelector } from "react-redux";
import {
  ChatListStyled,
  ChatListContainer,
  HeaderContainer,
  Title,
  AddChatButton,
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
import { FaPlus } from "react-icons/fa6";
import AddChatModal from "../AddChatModal/AddChatModal";
import { Suspense, useEffect } from "react";
import Loader from "../Loader/Loader";
import { useModal } from "../../customHooks/useModal";
import { selectLastMessages } from "../../redux/messages/selectors";
import { getLastMessage } from "../../redux/messages/operations";

const ChatList = () => {
  const chats = useSelector(selectVisibleChats);
  const lastMessages = useSelector(selectLastMessages);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const chatIds = chats.map((chat) => chat._id);
    chatIds.forEach((chatId) => {
      dispatch(getLastMessage(chatId));
    });
  }, [chats, dispatch]);

  const getLastMessageInChat = (chatId) => {
    return lastMessages.filter((message) => message.chatId === chatId);
  };

  const handleOpenChat = (id) => {
    navigate(`/chat/${id}`);
  };

  const { isOpen, openModal, closeModal } = useModal(false);

  return (
    <Suspense fallback={<Loader />}>
      <ChatListContainer>
        <HeaderContainer>
          <Title>Chats</Title>
          <AddChatButton type="button" onClick={openModal}>
            <FaPlus />
          </AddChatButton>
        </HeaderContainer>
        <ChatListStyled>
          {chats &&
            chats.map((chat) => (
              <ChatItem key={chat._id} onClick={() => handleOpenChat(chat._id)}>
                <Thumb>
                  <img src="/src/assets/user.png" alt="avatar" />
                </Thumb>
                <ItemContainer>
                  <ChatName>
                    {chat.firstName} {chat.lastName}
                  </ChatName>
                  {lastMessages && (
                    <MessageContainer>
                      {console.log(getLastMessageInChat(chat._id))}
                      {/* <LastMessage>
                        {getLastMessageInChat(chat._id).text}
                      </LastMessage>
                      <DateString>
                        {dateFormat1(getLastMessageInChat(chat._id).sentAt)}
                      </DateString> */}
                    </MessageContainer>
                  )}
                </ItemContainer>
              </ChatItem>
            ))}
        </ChatListStyled>
      </ChatListContainer>
      <Outlet />
      <AddChatModal isModalOpen={isOpen} closeModal={closeModal} />
    </Suspense>
  );
};

export default ChatList;
