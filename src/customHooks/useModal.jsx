import { useState } from "react";

export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = () => {
    console.log("open");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { isOpen, openModal, closeModal, toggleModal };
};
