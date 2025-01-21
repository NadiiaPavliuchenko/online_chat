import { useParams } from "react-router-dom";
import {
  ChatWindowStyled,
  ChatMessages,
  MessageBox,
  StyledMessage,
  MessageDate,
  MessageInput,
  StyledInput,
  StyledButton,
  StyledInputContainer,
} from "./ChatWindow.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMessages } from "../../redux/messages/selectors";
import { useEffect, useRef } from "react";
import {
  getMessages,
  sendRealtimeMessage,
  getReplyQuote,
  markAsRead,
} from "../../redux/messages/operations";
import { dateFormat2 } from "../../helpers/dateFormatters";
import { IoSendSharp } from "react-icons/io5";
import ChatWindowHeader from "../ChatWindowHeader/ChatWindowHeader";
import { getLastMessage, getOneChat } from "../../redux/chats/operations";
import { selectLastMessages } from "../../redux/chats/selectors";

const ChatWindow = () => {
  const params = useParams();
  const chatId = params.id;
  const chatRef = useRef();

  // const [menuVisible, setMenuVisible] = useState(false);
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);
  const lastMessages = useSelector(selectLastMessages);

  useEffect(() => {
    dispatch(getOneChat(chatId));
  }, [dispatch, chatId]);

  useEffect(() => {
    dispatch(getMessages(chatId));
  }, [dispatch, chatId]);

  useEffect(() => {
    dispatch(getLastMessage(chatId));
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      chatId,
      text: e.target.elements.text.value.trim(),
      sender: "user",
      sentAt: new Date().toISOString(),
    };
    dispatch(sendRealtimeMessage(newMessage));

    setTimeout(async () => {
      try {
        const replyText = await getReplyQuote();

        const replyMessage = {
          text: replyText.quote,
          sender: "bot",
          chatId: chatId,
          sentAt: new Date().toISOString(),
        };

        dispatch(sendRealtimeMessage(replyMessage));
      } catch (e) {
        console.error(e);
      }
    }, 3000);

    e.target.reset();
  };

  // useEffect(() => {
  //   const messageId = lastMessages[chatId]?._id;
  //   const isRead = lastMessages[chatId]?.isRead;

  //   if (!messageId || isRead) return;

  //   const checkScrollPosition = () => {
  //     const { scrollTop, scrollHeight, clientHeight } = chatRef.current;
  //     if (scrollTop + scrollHeight >= clientHeight && !isRead) {
  //       dispatch(markAsRead(messageId, { isRead: true }));
  //     }
  //   };

  //   const chatWindow = chatRef.current;

  //   chatWindow.addEventListener("scroll", checkScrollPosition);

  //   return chatWindow.removeEventListener("scroll", checkScrollPosition);
  // });

  // const handleOpenPopup = (e) => {
  //   console.log(e.target.$sender);
  //   if (e.$sender === "user") {
  //     setPosition({ x: e.clientX, y: e.clientY });
  //     setMenuVisible(true);
  //   }
  // };

  // const hideMenu = () => {
  //   setMenuVisible(false);
  // };

  const handleScroll = (e) => {
    const messageId = lastMessages[chatId]?._id;
    const isRead = lastMessages[chatId]?.isRead;
    console.log(isRead);

    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + scrollHeight >= clientHeight && !isRead) {
      dispatch(markAsRead(messageId, { isRead: true }));
    }
  };

  return (
    <ChatWindowStyled>
      <ChatWindowHeader />
      <ChatMessages
        ref={chatRef}
        onScroll={(e) => {
          handleScroll(e);
        }}
      >
        {messages &&
          messages.map((message) => (
            <MessageBox key={message._id} $sender={message.sender}>
              <StyledMessage $sender={message.sender}>
                {message.text}
                {/* {menuVisible && (
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
                )} */}
              </StyledMessage>
              <MessageDate>{dateFormat2(message.sentAt)}</MessageDate>
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
