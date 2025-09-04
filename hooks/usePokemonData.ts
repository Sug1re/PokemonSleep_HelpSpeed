import { useEffect, useState } from "react";
import { fetchPokemonData } from "@/lib/api/pokemon";
import { Pokemon } from "@/types/pokemon";

export const usePokemonData = () => {
  const [pokemonData, setPokemonData] = useState<Record<string, Pokemon>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonData(false);
        setPokemonData(data);
      } catch (err) {
        console.error("ポケモン情報の取得に失敗しました", err);
      }
    };

    fetchData();
  }, []);

  return { pokemonData };
};
