"use client";

import React from "react";
import { Box, Stack } from "@mui/material";

import BaseModal from "../Base/BaseModal";
import BaseButton from "../Base/BaseButton";

type Props = {
  opened: boolean;
  onClose: () => void;
  //   onSelect: (label: string) => void;
};

const AddModal = ({
  opened,
  onClose,
}: //  onSelect

Props): React.ReactElement => {
  return (
    <BaseModal title="項目を追加" isOpen={opened} onClose={onClose}>
      <Box sx={{ py: 2 }}>
        <Stack
          spacing={1}
          alignItems="center"
          sx={{ maxHeight: 300, overflowY: "auto", mt: 2 }}
        >
          {["げんき", "おてつだいボーナス", "キャンチケ", "おやすみリボン"].map(
            (label, index) => (
              <BaseButton
                color="light"
                type="button"
                width="60%"
                key={index}
                onClick={() => {
                  //   onSelect(label);
                  onClose();
                }}
              >
                {label}
              </BaseButton>
            )
          )}
        </Stack>
      </Box>
    </BaseModal>
  );
};

export default AddModal;
