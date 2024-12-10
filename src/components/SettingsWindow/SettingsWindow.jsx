import { useRef } from "react";
import {
  Backdrop,
  StyledSettings,
  SettingsItem,
  SettingsList,
  Shadow,
} from "./SettingsWindow.styled";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useModal } from "../../customHooks/useModal";
import DeleteModal from "../DeleteModal/DeleteModal";

const SettingsWindow = ({ position, isModalOpen, closeModal }) => {
  const modalRef = useRef(null);

  const handleCloseModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const deleteModal = useModal(false);
  // const editModal = useModal(false);

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
              <SettingsItem // onClick={editModal.openModal}
              // isModalOpen={editModal.isOpen}
              // closeModal={editModal.closeModal}
              >
                <FaRegEdit />
                <span>Edit</span>
              </SettingsItem>
              <SettingsItem onClick={deleteModal.openModal}>
                <FaRegTrashAlt />
                <span>Delete</span>
              </SettingsItem>
            </SettingsList>
          </StyledSettings>
        </Shadow>
      </Backdrop>
      {deleteModal.isOpen && (
        <DeleteModal closeModal={deleteModal.closeModal} />
      )}
    </>
  );
};

export default SettingsWindow;
