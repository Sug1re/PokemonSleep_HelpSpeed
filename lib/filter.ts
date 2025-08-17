import { Pokemon } from "@/types/pokemon";

type FilterValues = {
  selectedBerry: string;
  selectedSleepType: string;
  selectedStrengths: string;
};

export const filterPokemon = (
  data: Record<string, Pokemon>,
  { selectedBerry, selectedSleepType, selectedStrengths }: FilterValues
) => {
  return Object.keys(data).filter((name) => {
    const pokemon = data[name];
    return (
      (!selectedBerry || pokemon.berry === selectedBerry) &&
      (!selectedSleepType || pokemon.sleepType === selectedSleepType) &&
      (!selectedStrengths || pokemon.strengths === selectedStrengths)
    );
  });
};
