"use client";

import { useState } from "react";

export type ModalType = "pokemon" | "personality" | "subSkill" | "pokemonFilter" | null;

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
  const [filterData, setFilterData] = useState<any>(null); // 任意の型に合わせて修正

  const handleOpen = (type: ModalType, filters: any = null) => {
    setModalType(type);
    if (type === "pokemonFilter") {
      setFilterData(filters); // フィルター情報保存
    }
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setModalType(null);
  };

  const handleModalTypeChange = () => {
    // pokemon モーダルに遷移し、フィルターを適用
    setModalType("pokemon");
    // フィルター情報は維持したままモーダルを切り替え
  };

  const handleSelect = (type: Exclude<ModalType, null>, value: string) => {
    if (type === "pokemon") setPokemonLabel(value);
    else if (type === "personality") setPersonalityLabel(value);
    else if (type === "subSkill") setSubSkillLabel(value);
    handleClose();
  };

  return {
    isOpen,
    modalType,
    filterData,
    handleOpen,
    handleClose,
    handleSelect,
    handleModalTypeChange,
  };
};

export default useModal;
