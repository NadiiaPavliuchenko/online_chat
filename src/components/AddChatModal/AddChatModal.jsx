import { useEffect } from "react";
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

const AddChatModal = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setIsModalOpen(false);
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

  const handleAddChat = (e) => {
    e.preventDefault();

    const newChat = {
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
    };
    dispatch(createChat(newChat));

    e.target.reset();
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Backdrop onClick={handleCloseModal}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <Title>Add new chat</Title>
              <CloseButton type="button" onClick={handleCloseModal}>
                <IoClose size={30} />
              </CloseButton>
            </ModalHeader>
            <ModalForm onSubmit={(e) => handleAddChat(e)}>
              <StyledLabel htmlFor="firstName">FirstName</StyledLabel>
              <StyledInput
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
              />
              <StyledLabel htmlFor="lastName">FirstName</StyledLabel>
              <StyledInput
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
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
