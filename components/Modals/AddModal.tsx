"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import BaseModal from "../Base/BaseModal";
import BaseButton from "../Base/BaseButton";

type Props = {
  opened: boolean;
  onClose: () => void;
  onSelect: (label: string) => void;
  excludedItems: string[];
};

const AddModal = ({
  opened,
  onClose,
  onSelect,
  excludedItems,
}: Props): React.ReactElement => {
  const allLabels = [
    "げんき",
    "おてつだいボーナス",
    "キャンチケ",
    // "おやすみリボン",
  ];

  const availableLabels = allLabels.filter(
    (label) => !excludedItems.includes(label)
  );

  return (
    <BaseModal title="項目を追加" isOpen={opened} onClose={onClose}>
      <Box sx={{ py: 2 }}>
        <Stack
          spacing={1}
          alignItems="center"
          sx={{ maxHeight: 300, overflowY: "auto", mt: 2 }}
        >
          {availableLabels.length > 0 ? (
            availableLabels.map((label, index) => (
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
            ))
          ) : (
            <Typography
              sx={{
                color: "#f44336",
              }}
            >
              選択できる項目がありません
            </Typography>
          )}
        </Stack>
      </Box>
    </BaseModal>
  );
};

export default AddModal;
