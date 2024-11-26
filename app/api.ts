import { pokemonData } from "./types";

export const getpokemonData = async (): Promise<pokemonData[]> => {
    const res = await fetch("http://localhost:3001/pokemonData",{
        cache: "no-store",//SSR
    });
    const pokemonData = res.json();

    return pokemonData;
};