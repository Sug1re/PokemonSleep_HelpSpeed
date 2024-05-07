"use client";

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import pokemonTimeMap from "./PokemonTimeMap"; // 相対パスを使って pokemonTimeMap をインポート

const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [helperTime, setHelperTime] = useState(0);

  const handlePokemonNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setPokemonName(name);
    const time = pokemonTimeMap[name];
    if (time !== undefined) {
      setHelperTime(time);

      setHelperTime(0); // ポケモン名が見つからない場合は0とする
    }
  };

  return (
    <div className="space-y-1.5 mx-10">
      <Label className="text-2xl text-white" htmlFor="pokemonName">ポケモン</Label>
      <Input
        id="pokemonName"
        type="text"
        placeholder="Please input the Pokémon."
        className="bg-gray-400 text-white border-blue-700"
        value={pokemonName}
        onChange={handlePokemonNameChange}
      />
      <Label
        htmlFor="helperTime"
        className="text-2xl text-white"
      >おてつだい時間</Label>
      <Input
        id="helperTime"
        type="text"
        readOnly
        value={helperTime}
        className="bg-gray-400 text-white border-blue-700"
      />
    </div>
  );
}

export default Pokemon;