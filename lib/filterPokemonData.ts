import { typeToBerryMap } from "@/constants/typeToBerryMap";

export const filterPokemonData = (
  pokemonData: Record<string, any>,
  formattedRange: string
): [string, any][] => {
  if (/^No\.\d{4}〜\d{4}$/.test(formattedRange)) {
    const match = formattedRange.match(/^No\.(\d{4})〜(\d{4})$/);
    if (!match) return [];

    const [_, startStr, endStr] = match;
    const start = parseInt(startStr, 10);
    const end = parseInt(endStr, 10);

    return Object.entries(pokemonData).filter(([, data]) => {
      const num = parseInt(data.number, 10);
      return num >= start && num <= end;
    });
  }

  const berryFromType = typeToBerryMap[formattedRange];

  return Object.entries(pokemonData).filter(([name, data]) => {
    if (berryFromType) {
      return data.berry === berryFromType;
    }

    return (
      name.includes(formattedRange) ||
      data.sleepType === formattedRange ||
      data.strengths === formattedRange ||
      data.berry === formattedRange ||
      data.mainSkill?.includes(formattedRange)
    );
  });
};