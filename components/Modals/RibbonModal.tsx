"use client";

import React from "react";
import BaseModal from "../Base/BaseModal";
import BaseButton from "../Base/BaseButton";
import { Box, Stack } from "@mui/material";

type Props = {
  opened: boolean;
  onClose: () => void;
  onSelect: (label: string) => void;
};

const RibbonModal = ({ opened, onClose, onSelect }: Props) => {
  return (
    <BaseModal title="おやすみリボンを選択" isOpen={opened} onClose={onClose}>
      <Box sx={{ py: 2 }}>
        <Stack
          spacing={1}
          alignItems="center"
          sx={{ maxHeight: 300, overflowY: "auto", mt: 2 }}
        >
          {["500時間以上", "2000時間以上"].map((label, index) => (
            <BaseButton
              color="light"
              type="button"
              width="60%"
              key={index}
              onClick={() => {
                onSelect(label);
                onClose();
              }}
            >
              {label}
            </BaseButton>
          ))}
        </Stack>
      </Box>
    </BaseModal>
  );
};

export default RibbonModal;
