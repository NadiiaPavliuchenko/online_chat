import { useParams } from "react-router-dom";
import { ChatWindowStyled } from "./ChatWindow.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMessages } from "../../redux/messages/selectors";
import { useEffect } from "react";
import { getMessages } from "../../redux/messages/operations";

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
          <div key={message._id}>
            <div data-sender={message.sender}>{message.text}</div>
            <p>{message.sentAt}</p>
          </div>
        ))}
    </ChatWindowStyled>
  );
};

export default ChatWindow;
