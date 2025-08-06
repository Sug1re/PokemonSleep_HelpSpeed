"use client";

import React from "react";
import BaseButton from "../Base/BaseButton";
import { useDisclosure } from "@mantine/hooks";
import { useLabel } from "@/hooks/useLabel";
import EnergyModal from "../Modals/EnergyModal";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

type Props = {
  value: string;
  onSelect: (label: string) => void;
};

const EnergyButton = ({ value, onSelect }: Props) => {
  const [isOpened, handlers] = useDisclosure(false);

  const { selectedLabel, setLabel } = useLabel({
    stateLabel: value || "げんき度",
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
        leftIcon={<SentimentSatisfiedAltIcon />}
        onClick={handlers.open}
      >
        {selectedLabel}
      </BaseButton>

      <EnergyModal
        opened={isOpened}
        onClose={handlers.close}
        onSelect={handleSelect}
      />
    </>
  );
};

export default EnergyButton;
