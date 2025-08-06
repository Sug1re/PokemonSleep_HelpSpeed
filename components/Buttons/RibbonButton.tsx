"use client";

import React from "react";
import BaseButton from "../Base/BaseButton";
import { useDisclosure } from "@mantine/hooks";
import { useLabel } from "@/hooks/useLabel";
import RibbonModal from "../Modals/RibbonModal";

type Props = {
  value: string;
  onSelect: (label: string) => void;
};

const RibbonButton = ({ value, onSelect }: Props) => {
  const [isOpened, handlers] = useDisclosure(false);

  const { selectedLabel, setLabel } = useLabel({
    stateLabel: value || "おやすみリボン",
  });

  const handleSelect = (label: string) => {
    setLabel(label);
    onSelect(label);
  };

  return (
    <>
      <BaseButton
        color="light"
        type="button"
        width="80%"
        onClick={handlers.open}
      >
        {selectedLabel}
      </BaseButton>

      <RibbonModal
        opened={isOpened}
        onClose={handlers.close}
        onSelect={handleSelect}
      />
    </>
  );
};

export default RibbonButton;
