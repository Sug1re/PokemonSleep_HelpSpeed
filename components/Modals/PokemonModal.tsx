"use client";

import React from "react";
import { useDisclosure } from "@mantine/hooks";
import SearchIcon from "@mui/icons-material/Search";
import BaseModal from "../Base/BaseModal";
import { BaseButton } from "../Base/BaseButton";
import { Box, Stack, Typography } from "@mui/material";
import * as styles from "@/styles/calculator";
import SelectPokemonFilterModal from "./PokemonFilterModal";

type Props = {
  opened: boolean;
  onClose: () => void;
  getFilteredPokemon: () => string[];
  onSelect: (label: string) => void;
};

const PokemonModal = ({
  opened,
  onClose,
  getFilteredPokemon,
  onSelect,
}: Props): React.ReactElement => {
  const [isFilterOpen, { open: openFilter, close: closeFilter }] =
    useDisclosure(false);

  if (isFilterOpen) {
    return (
      <SelectPokemonFilterModal opened={isFilterOpen} onClose={closeFilter} />
    );
  }

  return (
    <BaseModal title="ポケモンを選択" isOpen={opened} onClose={onClose}>
      <Box sx={{ py: 2 }}>
        <BaseButton
          color="dark"
          type="button"
          width="50%"
          leftIcon={<SearchIcon />}
          onClick={openFilter}
        >
          OFF
        </BaseButton>

        <Stack
          spacing={1}
          alignItems="center"
          sx={{ maxHeight: 300, overflowY: "auto", mt: 2 }}
        >
          {getFilteredPokemon().length === 0 ? (
            <Box sx={styles.formControl}>
              <Typography
                sx={{
                  color: "#f44336",
                }}
              >
                該当するポケモンが見つかりませんでした
              </Typography>
            </Box>
          ) : (
            getFilteredPokemon().map((label, index) => (
              <BaseButton
                color="light"
                type="button"
                width="80%"
                key={index}
                onClick={() => {
                  onSelect(label);
                  onClose(); // モーダルを閉じるのもここでOK
                }}
              >
                {label}
              </BaseButton>
            ))
          )}
        </Stack>
      </Box>
    </BaseModal>
  );
};

export default PokemonModal;
