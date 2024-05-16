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

const pokemonSkillMap: { [pokemonSkill: string]: number } = {
  おてつだいスピードS: 0.07,
  おてつだいスピードM: 0.14,
  両方: 0.21,
  なし: 0.0,
};

// プロップの型を定義
interface SkillProps {
  pokemonSkill: string;
  setPokemonSkill: React.Dispatch<React.SetStateAction<string>>;
}

const Skill: React.FC<SkillProps> = ({ pokemonSkill, setPokemonSkill }) => {
  const handlePokemonSkillChange = (value: string) => {
    // 選択されたサブスキルに対応する数値を取得
    const skillMultiplier = pokemonSkillMap[value];
    if (skillMultiplier !== undefined) {
      // pokemonSkill の状態を数値に更新
      setPokemonSkill(skillMultiplier.toString());
    }
  };

  return (
      <div className="space-y-1.5 mx-10">
        <Label className="text-2xl text-white" htmlFor="pokemonSkill">
          サブスキル
        </Label>
        <Select onValueChange={handlePokemonSkillChange} >
          <SelectTrigger
            id="pokemonSkill"
            className="bg-gray-400 text-white border-blue-700"
          >
            <SelectValue placeholder="サブスキルを選択" />
          </SelectTrigger>
          <SelectContent
            position="popper"
            className="bg-gray-400 text-white border-blue-700"
          >
            <SelectItem
              value="おてつだいスピードS"
              onClick={() => handlePokemonSkillChange("おてつだいスピードS")}
            >
              おてつだいスピードS
            </SelectItem>
            <SelectItem
              value="おてつだいスピードM"
              onClick={() => handlePokemonSkillChange("おてつだいスピードM")}
            >
              おてつだいスピードM
            </SelectItem>
            <SelectItem
              value="両方"
              onClick={() => handlePokemonSkillChange("両方")}
            >
              両方
            </SelectItem>
            <SelectItem
              value="なし"
              onClick={() => handlePokemonSkillChange("なし")}
            >
              なし
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
  );
};

export default Skill;
