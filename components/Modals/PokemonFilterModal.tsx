"use client";

import React, { useEffect } from "react";
import { Box, Stack } from "@mui/material";
import {
  berryOptions,
  sleepTypeOptions,
  strengthsOptions,
} from "@/constants/options";
import BaseModal from "../Base/BaseModal";
import BaseRadio from "../Base/BaseRadio";
import { useRadioLabel } from "@/hooks/useRadioLabel";
type Props = {
  opened: boolean;
  onClose: () => void;
  berryLabel: ReturnType<typeof useRadioLabel>;
  typeLabel: ReturnType<typeof useRadioLabel>;
  strengthLabel: ReturnType<typeof useRadioLabel>;
  setFilterStatus: (value: string) => void;
};

const PokemonFilterModal = ({
  opened,
  onClose,
  berryLabel,
  typeLabel,
  strengthLabel,
  setFilterStatus,
}: Props) => {
  useEffect(() => {
    if (opened) {
      berryLabel.updateTempRadioLabel(berryLabel.tempRadioLabel);
      typeLabel.updateTempRadioLabel(typeLabel.tempRadioLabel);
      strengthLabel.updateTempRadioLabel(strengthLabel.tempRadioLabel);
    }
  }, [opened, berryLabel, typeLabel, strengthLabel]);

  const handleReset = () => {
    berryLabel.resetTempRadioLabel();
    typeLabel.resetTempRadioLabel();
    strengthLabel.resetTempRadioLabel();
    berryLabel.submitRadioLabel();
    typeLabel.submitRadioLabel();
    strengthLabel.submitRadioLabel();
    setFilterStatus("OFF");
  };

  const handleSubmit = () => {
    berryLabel.submitRadioLabel();
    typeLabel.submitRadioLabel();
    strengthLabel.submitRadioLabel();

    const isActive =
      berryLabel.tempRadioLabel !== "" ||
      typeLabel.tempRadioLabel !== "" ||
      strengthLabel.tempRadioLabel !== "";
    setFilterStatus(isActive ? "ON" : "OFF");

    onClose();
  };

  return (
    <>
      <BaseModal
        title="絞り込む"
        isOpen={opened}
        onClose={onClose}
        onReset={handleReset}
        onSubmit={handleSubmit}
        type="filter"
      >
        <Box sx={{ py: 2 }}>
          <Stack
            spacing={1}
            sx={{
              maxHeight: 300,
              overflowY: "auto",
              alignItems: "center",
            }}
          >
            <BaseRadio
              name="berry"
              title="タイプ"
              width="80%"
              maps={berryOptions}
              stateRadioLabel={berryLabel.tempRadioLabel}
              onChange={berryLabel.updateTempRadioLabel}
            />
            <BaseRadio
              name="sleepType"
              title="睡眠タイプ"
              width="80%"
              maps={sleepTypeOptions}
              stateRadioLabel={typeLabel.tempRadioLabel}
              onChange={typeLabel.updateTempRadioLabel}
            />
            <BaseRadio
              name="strengths"
              title="とくいなもの"
              width="80%"
              maps={strengthsOptions}
              stateRadioLabel={strengthLabel.tempRadioLabel}
              onChange={strengthLabel.updateTempRadioLabel}
            />
          </Stack>
        </Box>
      </BaseModal>
    </>
  );
};

export default PokemonFilterModal;
