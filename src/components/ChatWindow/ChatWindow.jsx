import { useParams } from "react-router-dom";
import {
  ChatWindowStyled,
  MessageBox,
  StyledMessage,
  Date,
} from "./ChatWindow.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMessages } from "../../redux/messages/selectors";
import { useEffect } from "react";
import { getMessages } from "../../redux/messages/operations";
import { dateFormat2 } from "../../helpers/dateFormatters";

const ChatWindow = () => {
  const params = useParams();
  const chatId = params.id;

  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);

  useEffect(() => {
    dispatch(getMessages(chatId));
  }, [dispatch, chatId]);

  return (
    <ChatWindowStyled>
      {messages &&
        messages.map((message) => (
          <MessageBox key={message._id} $sender={message.sender}>
            <StyledMessage $sender={message.sender}>
              {message.text}
            </StyledMessage>
            <Date>{dateFormat2(message.sentAt)}</Date>
          </MessageBox>
        ))}
    </ChatWindowStyled>
  );
};

export default ChatWindow;
