"use client";

import { useState } from "react";

export type ModalType = "pokemon" | "personality" | "subSkill" | "pokemonFilter" | null;

type HandleSelectProps = {
  setPokemonLabel: (value: string) => void;
  setPersonalityLabel: (value: string) => void;
  setSubSkillLabel: (value: string) => void;
  resetFilterStates: () => void; 
};

const useModal = ({
  setPokemonLabel,
  setPersonalityLabel,
  setSubSkillLabel,
  resetFilterStates,
}: HandleSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [filterData, setFilterData] = useState<any>(null);

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

  const handleModalTypeNoChange = () => {
    // フィルター情報をクリアしてから pokemon モーダルに遷移
    resetFilterStates();
    setFilterData(null);
    setModalType("pokemon");
  };

  const resetFilterData = () => {
    resetFilterStates();
    setFilterData(null);
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
    handleModalTypeNoChange,
    resetFilterData,
  };
};

export default useModal;
