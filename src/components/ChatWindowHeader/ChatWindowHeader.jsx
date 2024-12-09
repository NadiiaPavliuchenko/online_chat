import { useSelector } from "react-redux";
import {
  ChatHeader,
  ChatName,
  Name,
  Thumb,
  SettingsButton,
  UserInfo,
} from "./ChatWindowHeader.styled";
import { selectChats } from "../../redux/chats/selectors";
import { IoSettingsSharp } from "react-icons/io5";
import SettingsWindow from "../SettingsWindow/SettingsWindow";
import { useEffect, useRef, useState } from "react";

const ChatWindowHeader = ({ chatId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const chats = useSelector(selectChats);
  const settingsRef = useRef(null);
  const [modalStyle, setModalStyle] = useState({ top: 0, left: 0 });

  let curChat;
  if (chats && chats.length > 0) {
    curChat = chats.filter((chat) => chat._id === chatId);
  }

  const findModalPosition = () => {
    if (!isOpen && settingsRef.current) {
      const rect = settingsRef.current.getBoundingClientRect();
      setModalStyle({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX - 60,
      });
    }
  };

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    findModalPosition();

    window.addEventListener("resize", findModalPosition);
    window.addEventListener("scroll", findModalPosition);

    return () => {
      window.removeEventListener("resize", findModalPosition);
      window.removeEventListener("scroll", findModalPosition);
    };
  });

  return (
    <ChatHeader>
      <UserInfo>
        <Thumb>
          <img
            src="/src/assets/user.png"
            alt="chat avatar"
            width={40}
            height={40}
          />
        </Thumb>
        <ChatName>
          {chats.length > 0 && (
            <>
              <Name>{curChat[0].firstName}</Name>
              <Name>{curChat[0].lastName}</Name>
            </>
          )}
        </ChatName>
      </UserInfo>
      <SettingsButton
        type="button"
        ref={settingsRef}
        onClick={handleToggleModal}
      >
        <IoSettingsSharp size={20} />
      </SettingsButton>
      <SettingsWindow
        position={modalStyle}
        isModalOpen={isOpen}
        setIsModalOpen={setIsOpen}
      />
    </ChatHeader>
  );
};

export default ChatWindowHeader;
