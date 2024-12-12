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
} from "./AddChatModal.styled";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { createChat } from "../../redux/chats/operations";

const AddChatModal = ({ isModalOpen, closeModal }) => {
  const dispatch = useDispatch();

  const handleAddChat = (e) => {
    e.preventDefault();

    const newChat = {
      firstName: e.target.elements.firstName.value.trim(),
      lastName: e.target.elements.lastName.value.trim(),
    };
    dispatch(createChat(newChat));

    e.target.reset();
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <Backdrop onClick={closeModal}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <Title>Add new chat</Title>
              <CloseButton type="button" onClick={closeModal}>
                <IoClose size={30} />
              </CloseButton>
            </ModalHeader>
            <ModalForm onSubmit={(e) => handleAddChat(e)}>
              <StyledLabel htmlFor="firstName">FirstName</StyledLabel>
              <StyledInput
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                required
              />
              <StyledLabel htmlFor="lastName">FirstName</StyledLabel>
              <StyledInput
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                required
              />
              <StyledButton type="submit">Start chat</StyledButton>
            </ModalForm>
          </Modal>
        </Backdrop>
      )}
    </>
  );
};

export default AddChatModal;
