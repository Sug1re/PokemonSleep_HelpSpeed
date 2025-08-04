"use client";

import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { BaseButton } from "../Base/BaseButton";
import PokemonModal from "../Modals/PokemonModal";
import * as CustomHook from "@/hooks/index";
import { useLabel } from "@/hooks/useLabel";
import { useRadioLabel } from "@/hooks/useRadioLabel";

type Props = {
  value: string;
  onSelect: (name: string) => void;
};

const PokemonButton = ({ value, onSelect }: Props) => {
  const [isOpened, handlers] = useDisclosure(false);
  const { pokemonData } = CustomHook.usePokemonData();

  const { selectedLabel, setLabel } = useLabel({
    stateLabel: value || "ポケモン",
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

  const handleSelect = (label: string) => {
    setLabel(label);
    onSelect(label);
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
        onSelect={handleSelect}
      />
    </>
  );
};

export default PokemonButton;
