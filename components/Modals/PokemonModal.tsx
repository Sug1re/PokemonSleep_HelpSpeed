"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useDisclosure } from "@mantine/hooks";
import SearchIcon from "@mui/icons-material/Search";
import BaseModal from "../Base/BaseModal";
import BaseButton from "../Base/BaseButton";
import PokemonFilterModal from "./PokemonFilterModal";
import { useRadioLabel } from "@/hooks/useRadioLabel";

type Props = {
  opened: boolean;
  onClose: () => void;
  getFilteredPokemon: () => string[];
  berryLabel: ReturnType<typeof useRadioLabel>;
  typeLabel: ReturnType<typeof useRadioLabel>;
  strengthLabel: ReturnType<typeof useRadioLabel>;
  filterStatus: string;
  setFilterStatus: (label: string) => void;
  onSelect: (label: string) => void;
};

const PokemonModal = ({
  opened,
  onClose,
  getFilteredPokemon,
  berryLabel,
  typeLabel,
  strengthLabel,
  filterStatus,
  setFilterStatus,
  onSelect,
}: Props): React.ReactElement => {
  const [isFilterOpen, { open: openFilter, close: closeFilter }] =
    useDisclosure(false);

  if (isFilterOpen) {
    return (
      <PokemonFilterModal
        opened={isFilterOpen}
        onClose={closeFilter}
        berryLabel={berryLabel}
        typeLabel={typeLabel}
        strengthLabel={strengthLabel}
        setFilterStatus={setFilterStatus}
      />
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
          onClick={() => {
            openFilter();
          }}
        >
          {filterStatus}
        </BaseButton>

        <Stack
          spacing={1}
          alignItems="center"
          sx={{ maxHeight: 300, overflowY: "auto", mt: 2 }}
        >
          {getFilteredPokemon().length === 0 ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
          )}
        </Stack>
      </Box>
    </BaseModal>
  );
};

export default PokemonModal;
