// "use client";

// import { useState } from "react";

// export type ModalType = "pokemon" | "personality" | "subSkill" | null;

// const useModal = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [modalType, setModalType] = useState<ModalType>(null);

//   const handleOpen = (type: ModalType) => {
//     setModalType(type);
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//     setModalType(null);
//   };

//   return {
//     isOpen,
//     modalType,
//     handleOpen,
//     handleClose,
//   };
// };

// export default useModal;

"use client";

import { useState } from "react";

export type ModalType = "pokemon" | "personality" | "subSkill" | null;

type HandleSelectProps = {
  setPokemonLabel: (value: string) => void;
  setPersonalityLabel: (value: string) => void;
  setSubSkillLabel: (value: string) => void;
};

const useModal = ({
  setPokemonLabel,
  setPersonalityLabel,
  setSubSkillLabel,
}: HandleSelectProps) => {
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

  const handleSelect = (type: Exclude<ModalType, null>, value: string) => {
    if (type === "pokemon") setPokemonLabel(value);
    else if (type === "personality") setPersonalityLabel(value);
    else if (type === "subSkill") setSubSkillLabel(value);
    handleClose(); // モーダルを閉じる
  };

  return {
    isOpen,
    modalType,
    handleOpen,
    handleClose,
    handleSelect,
  };
};

export default useModal;

