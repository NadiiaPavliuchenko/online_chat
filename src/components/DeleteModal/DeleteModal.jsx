import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  Title,
  YesButton,
  NoButton,
  CloseButton,
  Backdrop,
} from "./DeleteModal.styled";
import { IoClose } from "react-icons/io5";
import { deleteChat } from "../../redux/chats/operations";
import { selectCurrentChat } from "../../redux/chats/selectors";

const DeleteModal = ({ closeModal }) => {
  const curChat = useSelector(selectCurrentChat);
  const dispatch = useDispatch();

  const handleDeleteChat = () => {
    console.log(curChat._id);
    dispatch(deleteChat(curChat._id));
    closeModal();
  };

  return (
    <Backdrop>
      <Modal>
        <Title>Are you sure you want to delete this chat?</Title>
        <CloseButton type="button" onClick={closeModal}>
          <IoClose size={30} />
        </CloseButton>
        <YesButton onClick={handleDeleteChat}>Yes</YesButton>
        <NoButton onClick={closeModal}>No</NoButton>
      </Modal>
    </Backdrop>
  );
};

export default DeleteModal;
