import {curry, desserts, pokemonData, salad } from "./types";

export const getpokemonData = async (): Promise<pokemonData[]> => {
    const res = await fetch("http://localhost:3002/pokemonData",{
        cache: "no-store",//SSR
    });
    const pokemonData = res.json();

    return pokemonData;
};

export const getcurryData = async (): Promise<curry[]> => {
    const res = await fetch("http://localhost:3006/curry",{
        cache: "no-store",
    });
    const curryData = res.json();

    return curryData;
};

export const getsaladData = async (): Promise<salad[]> => {
    const res = await fetch("http://localhost:3007/salad",{
        cache: "no-store",
    });
    const saladData = res.json();

    return saladData;
};

export const getdessertsData = async (): Promise<desserts[]> => {
    const res = await fetch("http://localhost:3008/desserts",{
        cache: "no-store",
    });
    const dessertsData = res.json();

    return dessertsData;
};