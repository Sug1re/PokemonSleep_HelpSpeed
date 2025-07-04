import {
  numberGroups3,
  numberGroups4,
  numberGroups5,
  numberGroups6,
  typeGroups5,
  typeGroups7,
  typeGroups9,
  skillGroups2,
  skillGroups3,
  skillGroups4,
  strengthsGroups4,
  sleepTypeGroups3,
  numberGroups2,
} from "@/constants/PokemonDataBase";

export const getResponsiveGroups = (
  isWideScreen1: boolean,
  isWideScreen2: boolean,
  isWideScreen3: boolean,
  isWideScreen4: boolean,
) => {
  const numberGroups = isWideScreen1
    ? numberGroups6
    : isWideScreen2
    ? numberGroups5
    : isWideScreen3
    ? numberGroups4
    : isWideScreen4
    ? numberGroups3
    : numberGroups2;

  const typeGroups =
    isWideScreen1 || isWideScreen2
      ? typeGroups9
      : isWideScreen3
      ? typeGroups7
      : typeGroups5;

    const sleepTypeGroups = sleepTypeGroups3;
    const strengthsGroups = strengthsGroups4;

  const skillGroups =
    isWideScreen1 || isWideScreen2
      ? skillGroups4
      : isWideScreen3
      ? skillGroups3
      : skillGroups2;

  return { numberGroups, typeGroups, sleepTypeGroups, strengthsGroups, skillGroups };
};
