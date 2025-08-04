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

  const berryLabel = useRadioLabel({ stateRadioLabel: "" });
  const typeLabel = useRadioLabel({ stateRadioLabel: "" });
  const strengthLabel = useRadioLabel({ stateRadioLabel: "" });

  const [filterStatus, setFilterStatus] = useState("OFF");

  const FilteredPokemon = () => {
    if (filterStatus === "ON") {
      return Object.entries(pokemonData)
        .filter(([_, value]) => {
          return (
            (!berryLabel.selectedRadioLabel ||
              value.berry === berryLabel.selectedRadioLabel) &&
            (!typeLabel.selectedRadioLabel ||
              value.sleepType === typeLabel.selectedRadioLabel) &&
            (!strengthLabel.selectedRadioLabel ||
              value.strengths === strengthLabel.selectedRadioLabel)
          );
        })
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
        berryLabel={berryLabel}
        typeLabel={typeLabel}
        strengthLabel={strengthLabel}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        onSelect={setLabel}
      />
    </>
  );
};

export default PokemonButton;
