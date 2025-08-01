"use client";

import React, { useState } from "react";
import { BaseButton } from "../Base/BaseButton";
import BaseModal from "../Base/BaseModal";

const SelectPokemonButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <BaseButton color="light" type="button" width="80%" onClick={handleOpen}>
        ポケモン
      </BaseButton>
      <BaseModal title="ポケモンを選択" isOpen={isOpen} onClose={handleClose}>
        a
      </BaseModal>
    </>
  );
};

export default SelectPokemonButton;
