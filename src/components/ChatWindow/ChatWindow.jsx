import { useParams } from "react-router-dom";
import {
  ChatWindowStyled,
  ChatMessages,
  MessageBox,
  StyledMessage,
  Date,
  MessageInput,
  StyledInput,
  StyledButton,
  StyledInputContainer,
} from "./ChatWindow.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMessages } from "../../redux/messages/selectors";
import { useEffect, useState } from "react";
import {
  getMessages,
  sendRealtimeMessage,
} from "../../redux/messages/operations";
import { dateFormat2 } from "../../helpers/dateFormatters";
import { IoSendSharp } from "react-icons/io5";
import ChatWindowHeader from "../ChatWindowHeader/ChatWindowHeader";
import { getOneChat } from "../../redux/chats/operations";

const ChatWindow = () => {
  const params = useParams();
  const chatId = params.id;

  const [menuVisible, setMenuVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);

  useEffect(() => {
    dispatch(getOneChat(chatId));
  }, [dispatch, chatId]);

  useEffect(() => {
    dispatch(getMessages(chatId));
  }, [dispatch, chatId]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      chatId,
      text: e.target.elements.text.value.trim(),
      sender: "user",
    };
    dispatch(sendRealtimeMessage(newMessage));

    // setTimeout(async () => {
    //   const reply = await getReplyQuote();
    //   const replyMessage = {
    //     chatId,
    //     text: reply.quote,
    //     sender: "bot",
    //   };
    //   dispatch(sendMessage(replyMessage));
    // }, "3000");
    e.target.reset();
  };

  const handleOpenPopup = (e) => {
    console.log(e.target.$sender);
    if (e.$sender === "user") {
      setPosition({ x: e.clientX, y: e.clientY });
      setMenuVisible(true);
    }
  };

  // const hideMenu = () => {
  //   setMenuVisible(false);
  // };

  return (
    <ChatWindowStyled>
      <ChatWindowHeader />
      <ChatMessages>
        {messages &&
          messages.map((message) => (
            <MessageBox key={message._id} $sender={message.sender}>
              <StyledMessage $sender={message.sender} onClick={handleOpenPopup}>
                {message.text}
                {menuVisible && (
                  <div
                    style={{
                      position: "absolute",
                      top: `${position.y}px`,
                      left: `${position.x}px`,
                      background: "white",
                      border: "1px solid #ccc",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                      padding: "10px",
                      zIndex: 1000,
                    }}
                  ></div>
                )}
              </StyledMessage>
              <Date>{dateFormat2(message.sentAt)}</Date>
            </MessageBox>
          ))}
      </ChatMessages>

      <MessageInput>
        <StyledInputContainer onSubmit={(e) => handleSendMessage(e)}>
          <StyledInput
            type="text"
            name="text"
            id="text"
            placeholder="Type your message"
          />
          <StyledButton type="submit">
            <IoSendSharp style={{ color: "grey" }} />
          </StyledButton>
        </StyledInputContainer>
      </MessageInput>
    </ChatWindowStyled>
  );
};

export default ChatWindow;
