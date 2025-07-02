"use client";

import { useEffect, useState } from "react";
import { fetchPokemonData } from "@/lib/api/pokemon";
import { PokemonInfo } from "@/types/pokemonInfo";

export const usePokemonData = () => {
  const [pokemonData, setPokemonData] = useState<Record<string, PokemonInfo>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonData();
        setPokemonData(data);
      } catch (err) {
        console.error("ポケモン情報の取得に失敗しました", err);
      } 
    };

    fetchData();
  }, []);

  return { pokemonData };
};
