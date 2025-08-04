"use client";

import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { BaseButton } from "../Base/BaseButton";
import PokemonModal from "../Modals/PokemonModal";
import * as CustomHook from "@/hooks/index";
import { useLabel } from "@/hooks/useLabel";
import { useRadioLabel } from "@/hooks/useRadioLabel";

const PokemonButton = () => {
  const [isOpened, handlers] = useDisclosure(false);
  const { pokemonData } = CustomHook.usePokemonData();

  const { selectedLabel, setLabel } = useLabel({
    stateLabel: "ポケモン",
  });

  const { tempRadioLabel, setRadioLabel } = useRadioLabel({
    stateRadioLabel: "",
  });

  const [filterStatus, setFilterStatus] = useState("OFF");

  const FilteredPokemon = () => {
    if (filterStatus === "ON") {
      return Object.entries(pokemonData)
        .filter(([_, value]) => value.berry === tempRadioLabel)
        .map(([key]) => key);
    }
    return Object.keys(pokemonData);
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

      <PokemonModal
        opened={isOpened}
        onClose={handlers.close}
        getFilteredPokemon={FilteredPokemon}
        selectedBerry={tempRadioLabel}
        setSelectedBerry={setRadioLabel}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        onSelect={setLabel}
      />
    </>
  );
};

export default PokemonButton;
