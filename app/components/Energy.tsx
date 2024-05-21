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

const pokemonEnergyMap: { [pokemonEnergy: string]: number } = {
  80: 0.45,
  60: 0.52,
  40: 0.62,
  20: 0.71,
  0: 1.0,
};

// プロップの型を定義
interface EnergyProps {
  pokemonEnergy: string;
  setPokemonEnergy: React.Dispatch<React.SetStateAction<string>>;
}

const Energy: React.FC<EnergyProps> = ({ pokemonEnergy, setPokemonEnergy }) => {
  const handlePokemonBonussChange = (value: string) => {
    // 選択されたげんきに対応する数値を取得
    const EnergyMultiplier = pokemonEnergyMap[value];
    if (EnergyMultiplier !== undefined) {
      // pokemonEnergy の状態を数値に更新
      setPokemonEnergy(EnergyMultiplier.toString());
    }
  };

  return (
    <div className="flex flex-row-reverse">
      <div className=" space-y-1.5 mx-10">
        <Label className="text-2xl text-white " htmlFor="pokemonEnergy">
          げんき補正
        </Label>
        <Select onValueChange={handlePokemonBonussChange}>
          <SelectTrigger
            id="pokemonEnergy"
            className="bg-gray-400 text-white w-52 border-blue-700"
          >
            <SelectValue placeholder="げんきを選択" />
          </SelectTrigger>

          <SelectContent
            position="popper"
            className="bg-gray-400 text-white border-blue-700"
          >
            <SelectItem
              value="80"
              onClick={() => handlePokemonBonussChange("80")}
            >
              80以上
            </SelectItem>
            <SelectItem
              value="60"
              onClick={() => handlePokemonBonussChange("60")}
            >
              80未満60以上
            </SelectItem>
            <SelectItem
              value="40"
              onClick={() => handlePokemonBonussChange("40")}
            >
              60未満40以上
            </SelectItem>
            <SelectItem
              value="20"
              onClick={() => handlePokemonBonussChange("20")}
            >
              40未満20以上
            </SelectItem>
            <SelectItem
              value="0"
              onClick={() => handlePokemonBonussChange("0")}
            >
              20未満
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Energy;
