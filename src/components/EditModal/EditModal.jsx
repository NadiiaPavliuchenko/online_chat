import {
  Backdrop,
  CloseButton,
  Modal,
  ModalForm,
  ModalHeader,
  Title,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./EditModal.styled";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { updateChat } from "../../redux/chats/operations";
import { selectCurrentChat } from "../../redux/chats/selectors";

const EditModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const curChat = useSelector(selectCurrentChat);

  const handleEditChat = (e) => {
    e.preventDefault();

    const newChat = {
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
    };
    dispatch(updateChat({ id: curChat._id, newChat }));

    closeModal();
  };

  return (
    <>
      <Backdrop onClick={closeModal}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <Title>Add new chat</Title>
            <CloseButton type="button" onClick={closeModal}>
              <IoClose size={30} />
            </CloseButton>
          </ModalHeader>
          <ModalForm onSubmit={(e) => handleEditChat(e)}>
            <StyledLabel htmlFor="firstName">FirstName</StyledLabel>
            <StyledInput
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              defaultValue={curChat.firstName}
              required
            />
            <StyledLabel htmlFor="lastName">FirstName</StyledLabel>
            <StyledInput
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              defaultValue={curChat.lastName}
              required
            />
            <StyledButton type="submit">Save</StyledButton>
          </ModalForm>
        </Modal>
      </Backdrop>
    </>
  );
};

export default EditModal;
