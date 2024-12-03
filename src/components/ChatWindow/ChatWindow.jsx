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
import { useEffect } from "react";
import {
  getMessages,
  getReplyQuote,
  sendMessage,
} from "../../redux/messages/operations";
import { dateFormat2 } from "../../helpers/dateFormatters";
import { IoSendSharp } from "react-icons/io5";
import ChatWindowHeader from "../ChatWindowHeader/ChatWindowHeader";

const ChatWindow = () => {
  const params = useParams();
  const chatId = params.id;

  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);

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
    dispatch(sendMessage(newMessage));

    setTimeout(async () => {
      const reply = await getReplyQuote();
      const replyMessage = {
        chatId,
        text: reply.quote,
        sender: "bot",
      };
      dispatch(sendMessage(replyMessage));
    }, "3000");
    e.target.reset();
  };

  return (
    <ChatWindowStyled>
      <ChatWindowHeader chatId={chatId} />
      <ChatMessages>
        {messages &&
          messages.map((message) => (
            <MessageBox key={message._id} $sender={message.sender}>
              <StyledMessage $sender={message.sender}>
                {message.text}
              </StyledMessage>
              <Date>{dateFormat2(message.sentAt)}</Date>
            </MessageBox>
          ))}
      </ChatMessages>

      <MessageInput>
        <StyledInputContainer onSubmit={(e) => handleSendMessage(e)}>
          <StyledInput name="text" id="text" placeholder="Type your message" />
          <StyledButton type="submit">
            <IoSendSharp style={{ color: "grey" }} />
          </StyledButton>
        </StyledInputContainer>
      </MessageInput>
    </ChatWindowStyled>
  );
};

export default ChatWindow;
