import { PokemonInfo } from "@/types/pokemonInfo";

type FilterValues = {
  selectedBerry: string;
  selectedSleepType: string;
  selectedStrengths: string;
};

export const filterPokemon = (
  data: Record<string, PokemonInfo>,
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
