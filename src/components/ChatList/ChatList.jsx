import { useSelector } from "react-redux";
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
import {
  selectLastMessages,
  selectVisibleChats,
} from "../../redux/chats/selectors";
import { Outlet, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import AddChatModal from "../AddChatModal/AddChatModal";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import { useModal } from "../../customHooks/useModal";

const ChatList = () => {
  const chats = useSelector(selectVisibleChats);
  const lastMessages = useSelector(selectLastMessages);
  const navigate = useNavigate();

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
                  <MessageContainer>
                    <LastMessage>{lastMessages[chat._id]?.text}</LastMessage>
                    <DateString>
                      {lastMessages[chat._id]
                        ? dateFormat1(lastMessages[chat._id]?.sentAt)
                        : ""}
                    </DateString>
                  </MessageContainer>
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
