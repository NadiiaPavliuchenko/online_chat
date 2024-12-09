import { useEffect, useRef } from "react";
import {
  Backdrop,
  StyledSettings,
  SettingsItem,
  SettingsList,
} from "./SettingsWindow.styled";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const SettingsWindow = ({ position, isModalOpen, setIsModalOpen }) => {
  const modalRef = useRef(null);

  const handleCloseModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, setIsModalOpen]);

  return (
    <>
      {isModalOpen && (
        <Backdrop onClick={handleCloseModal}>
          <StyledSettings
            ref={modalRef}
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
            }}
          >
            <SettingsList>
              <SettingsItem>
                <FaRegEdit />
                <span>Edit</span>
              </SettingsItem>
              <SettingsItem>
                <FaRegTrashAlt />
                <span>Delete</span>
              </SettingsItem>
            </SettingsList>
          </StyledSettings>
        </Backdrop>
      )}
    </>
  );
};

export default SettingsWindow;
