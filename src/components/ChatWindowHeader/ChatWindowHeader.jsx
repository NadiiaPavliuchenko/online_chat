import { useSelector } from "react-redux";
import {
  ChatHeader,
  ChatName,
  Name,
  Thumb,
  SettingsButton,
  UserInfo,
} from "./ChatWindowHeader.styled";
import { selectCurrentChat } from "../../redux/chats/selectors";
import { IoSettingsSharp } from "react-icons/io5";
import SettingsWindow from "../SettingsWindow/SettingsWindow";
import { useEffect, useRef, useState } from "react";
import { useModal } from "../../customHooks/useModal";

const ChatWindowHeader = () => {
  const curChat = useSelector(selectCurrentChat);
  const settingsRef = useRef(null);
  const [modalStyle, setModalStyle] = useState({ top: 0, left: 0 });

  const { isOpen, closeModal, toggleModal } = useModal(false);

  useEffect(() => {
    const findModalPosition = () => {
      if (settingsRef.current) {
        const rect = settingsRef.current.getBoundingClientRect();
        setModalStyle({
          top: rect.bottom + window.scrollY + 5,
          left: rect.left + window.scrollX - 60,
        });
      }
    };

    findModalPosition();

    window.addEventListener("resize", findModalPosition);
    window.addEventListener("scroll", findModalPosition);

    return () => {
      window.removeEventListener("resize", findModalPosition);
      window.removeEventListener("scroll", findModalPosition);
    };
  }, []);

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
          {curChat && (
            <>
              <Name>{curChat.firstName}</Name>
              <Name>{curChat.lastName}</Name>
            </>
          )}
        </ChatName>
      </UserInfo>
      <SettingsButton type="button" ref={settingsRef} onClick={toggleModal}>
        <IoSettingsSharp size={20} />
      </SettingsButton>
      {isOpen && (
        <SettingsWindow
          position={modalStyle}
          isModalOpen={isOpen}
          closeModal={closeModal}
        />
      )}
    </ChatHeader>
  );
};

export default ChatWindowHeader;
