import { useEffect, useRef } from "react";
import {
  Backdrop,
  StyledSettings,
  SettingsItem,
  SettingsList,
  Shadow,
} from "./SettingsWindow.styled";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const SettingsWindow = ({ position, isModalOpen, closeModal }) => {
  const modalRef = useRef(null);

  const handleCloseModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, closeModal]);

  const handleDeleteChat = () => {};

  const handleEditChat = () => {};

  if (!isModalOpen) return null;

  return (
    <>
      <Backdrop onClick={(e) => handleCloseModal(e)}>
        <Shadow>
          <StyledSettings
            ref={modalRef}
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
            }}
          >
            <SettingsList>
              <SettingsItem onClick={handleEditChat}>
                <FaRegEdit />
                <span>Edit</span>
              </SettingsItem>
              <SettingsItem onClick={handleDeleteChat}>
                <FaRegTrashAlt />
                <span>Delete</span>
              </SettingsItem>
            </SettingsList>
          </StyledSettings>
        </Shadow>
      </Backdrop>
    </>
  );
};

export default SettingsWindow;
