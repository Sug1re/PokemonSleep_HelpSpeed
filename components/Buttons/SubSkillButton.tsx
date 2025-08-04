"use client";

import React from "react";
import { BaseButton } from "../Base/BaseButton";
import { useDisclosure } from "@mantine/hooks";
import { useLabel } from "@/hooks/useLabel";
import SubSkillModal from "../Modals/SubSkillModal";

type Props = {
  value: string;
  onSelect: (name: string) => void;
};

const SubSkillButton = ({ value, onSelect }: Props) => {
  const [isOpened, handlers] = useDisclosure(false);

  const { selectedLabel, setLabel } = useLabel({
    stateLabel: value || "サブスキル",
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

      <SubSkillModal
        opened={isOpened}
        onClose={handlers.close}
        onSelect={handleSelect}
      />
    </>
  );
};

export default SubSkillButton;
