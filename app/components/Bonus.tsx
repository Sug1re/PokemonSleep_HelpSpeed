"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const pokemonBonusMap: { [pokemonBonus: string]: number } = {
  1: 0.05,
  2: 0.1,
  3: 0.15,
  4: 0.2,
  5: 0.25,
  0: 0.0,
};

// プロップの型を定義
interface BonusProps {
  pokemonBonus: string;
  setPokemonBonus: React.Dispatch<React.SetStateAction<string>>;
}

const Bonus: React.FC<BonusProps> = ({ pokemonBonus, setPokemonBonus }) => {
  const handlePokemonBonusChange = (value: string) => {
    // 選択されたおてつだいボーナスに対応する数値を取得
    const bonusMultiplier = pokemonBonusMap[value];
    if (bonusMultiplier !== undefined) {
      // pokemonBonus の状態を数値に更新
      setPokemonBonus(bonusMultiplier.toString());
    }
  };
  return (
    <div className="flex flex-col space-y-2 container  md:w-4/5">
      <Label
        className="text-xl text-white font-semibold"
        htmlFor="pokemonBonus"
      >
        おてつだいボーナス
      </Label>
      <Select onValueChange={handlePokemonBonusChange} required>
        <SelectTrigger
          id="pokemonBonus"
          className="bg-gray-500 text-white border-red-500"
        >
          <SelectValue placeholder="おてつだいボーナスを選択" />
        </SelectTrigger>
        <SelectContent
          position="popper"
          className="bg-gray-500 text-white border-red-500"
        >
          <SelectItem value="1" onClick={() => handlePokemonBonusChange("1")}>
            1
          </SelectItem>
          <SelectItem value="2" onClick={() => handlePokemonBonusChange("2")}>
            2
          </SelectItem>
          <SelectItem value="3" onClick={() => handlePokemonBonusChange("3")}>
            3
          </SelectItem>
          <SelectItem value="4" onClick={() => handlePokemonBonusChange("4")}>
            4
          </SelectItem>
          <SelectItem value="5" onClick={() => handlePokemonBonusChange("5")}>
            5
          </SelectItem>
          <SelectItem value="0" onClick={() => handlePokemonBonusChange("0")}>
            0
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Bonus;
