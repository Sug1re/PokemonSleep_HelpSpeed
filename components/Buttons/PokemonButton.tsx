"use client";

import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { BaseButton } from "../Base/BaseButton";
import PokemonModal from "../Modals/PokemonModal";
import * as CustomHook from "@/hooks/index";
import { useLabel } from "@/hooks/useLabel";

const PokemonButton = () => {
  const [isOpened, handlers] = useDisclosure(false);

  const { pokemonData } = CustomHook.usePokemonData();

  const { selectedLabel, setLabel } = useLabel({
    stateLabel: "ポケモン",
  });

  const FilteredPokemon = () => {
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
        onSelect={setLabel}
      />
    </>
  );
};

export default PokemonButton;
