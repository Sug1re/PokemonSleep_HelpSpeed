"use client";

import { useState } from "react";

export type ModalType = "pokemon" | "personality" | "subSkill" | null;

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleOpen = (type: ModalType) => {
    setModalType(type);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setModalType(null);
  };

  return {
    isOpen,
    modalType,
    handleOpen,
    handleClose,
  };
};

export default useModal;
