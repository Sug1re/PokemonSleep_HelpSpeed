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
  selectedBerry: string;
  setSelectedBerry: (value: string) => void;
  setFilterStatus: (value: string) => void;
};

const PokemonFilterModal = ({
  opened,
  onClose,
  selectedBerry,
  setSelectedBerry,
  setFilterStatus,
}: Props) => {
  const {
    tempRadioLabel,
    updateTempRadioLabel,
    resetTempRadioLabel,
    submitRadioLabel,
  } = useRadioLabel({
    stateRadioLabel: selectedBerry,
  });

  useEffect(() => {
    if (opened) {
      updateTempRadioLabel(selectedBerry);
    }
  }, [opened, selectedBerry, updateTempRadioLabel]);

  const handleReset = () => {
    resetTempRadioLabel();
    setSelectedBerry("");
    setFilterStatus("OFF");
  };

  const handleSubmit = () => {
    submitRadioLabel();
    setSelectedBerry(tempRadioLabel);
    setFilterStatus(tempRadioLabel === "" ? "OFF" : "ON");
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
              title="タイプ"
              width="80%"
              maps={berryOptions}
              stateRadioLabel={tempRadioLabel}
              onChange={updateTempRadioLabel}
            />
          </Stack>
        </Box>
      </BaseModal>
    </>
  );
};

export default PokemonFilterModal;
