import { Modal, Title, YesButton, NoButton } from "./DeleteModal.styled";

const DeleteModal = () => {
  return (
    <Modal>
      <Title>Are you sure you want to delete this chat?</Title>
      <YesButton>Yes</YesButton>
      <NoButton>No</NoButton>
    </Modal>
  );
};

export default DeleteModal;
