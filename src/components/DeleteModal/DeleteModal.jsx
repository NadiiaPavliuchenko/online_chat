import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  Title,
  YesButton,
  NoButton,
  CloseButton,
  Backdrop,
  ModalHeader,
  ButtonsContainer,
} from "./DeleteModal.styled";
import { IoClose } from "react-icons/io5";
import { deleteChat } from "../../redux/chats/operations";
import { selectCurrentChat } from "../../redux/chats/selectors";
import { useState } from "react";

const DeleteModal = ({ closeModal }) => {
  const [style, setStyle] = useState({ border: "none" });
  const curChat = useSelector(selectCurrentChat);
  const dispatch = useDispatch();

  const handleDeleteChat = () => {
    dispatch(deleteChat(curChat._id));
    closeModal();
  };

  const handleWarning = () => {
    setStyle({ border: "2px solid red" });
  };

  return (
    <Backdrop onClick={handleWarning}>
      <Modal style={style}>
        <ModalHeader>
          <Title>Are you sure you want to delete this chat?</Title>
          <CloseButton type="button" onClick={closeModal}>
            <IoClose size={30} />
          </CloseButton>
        </ModalHeader>
        <ButtonsContainer>
          <YesButton onClick={handleDeleteChat}>Yes</YesButton>
          <NoButton onClick={closeModal}>No</NoButton>
        </ButtonsContainer>
      </Modal>
    </Backdrop>
  );
};

export default DeleteModal;
