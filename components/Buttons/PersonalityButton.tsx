"use client";

import React from "react";
import { BaseButton } from "../Base/BaseButton";
import { useDisclosure } from "@mantine/hooks";
import { useLabel } from "@/hooks/useLabel";
import PersonalityModal from "../Modals/PersonalityModal";

const PersonalityButton = () => {
  const [isOpened, handlers] = useDisclosure(false);

  const { selectedLabel, setLabel } = useLabel({
    stateLabel: "性格",
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

      <PersonalityModal
        opened={isOpened}
        onClose={handlers.close}
        onSelect={setLabel}
      />
    </>
  );
};

export default PersonalityButton;
