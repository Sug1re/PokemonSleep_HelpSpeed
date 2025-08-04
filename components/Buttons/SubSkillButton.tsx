"use client";

import React from "react";
import { BaseButton } from "../Base/BaseButton";
import { useDisclosure } from "@mantine/hooks";
import { useLabel } from "@/hooks/useLabel";
import SubSkillModal from "../Modals/SubSkillModal";

const SubSkillButton = () => {
  const [isOpened, handlers] = useDisclosure(false);

  const { selectedLabel, setLabel } = useLabel({
    stateLabel: "サブスキル",
  });
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
        onSelect={setLabel}
      />
    </>
  );
};

export default SubSkillButton;
