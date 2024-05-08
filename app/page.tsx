"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Porsonality from "./components/Personality";
import Level from "./components/Level";
import Skill from "./components/Skill";
import Bonuss from "./components/Bonuss";
import Energy from "./components/Energy";
import Pokemon from "./components/Pokemon";

//ポケモンの固有のおてつだい時間を示す表
const pokemonTimeMap: { [pokemonName: string]: number } = {
  "ピカチュウ": 2700,
  "フシギダネ": 4400,
  // 他のポケモン名と対応する時間を追加
};

//ポケモンの性格の倍率を示す表
const pokemonPersonalityMap: { [pokemonPersonality: string]: number } = {
  "まじめ": 1.0,
  "すなお": 1.0,
  "てれや": 1.0,
  "がんばりや": 1.0,
  "きまぐれ": 1.0,
  "ようき": 1.0,
  "むじゃき": 1.0,
  "せっかち": 1.0,
  "のんき": 1.0,
  "おっとり": 1.0,
  "うっかりや": 1.0,
  "なまいき": 1.0,
  "しんちょう": 1.0,
  "おとなしい": 1.0,
  "のうてんき": 1.0,
  "れいせい": 1.0,
  "わんぱく": 1.0,
  "おくびょう": 1.1,
  "ひかえめ": 1.1,
  "ずぶとい": 1.1,
  "おだやか": 1.1,
  "ゆうかん": 0.9,
  "やんちゃ": 0.9,
  "いじっぱり": 0.9,
  "さみしがり": 0.9,
};

//使用する関数一覧
export default function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonPersonality, setPokemonPersonality] = useState("");
  const [pokemonLevel, setPokemonLevel] = useState("");
  const [pokemonSkill, setPokemonSkill] = useState("");
  const [pokemonBonuss, setPokemonBonuss] = useState("");
  const [pokemonEnergy, setPokemonEnergy] = useState("");
  const [helperTime, setHelperTime] = useState(0);

 //ポケモンの名前の入力フィールドの値が変更されたとき即座に対応する役割
  const handlePokemonNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  //ポケモンの性格の入力フィールドの値が変更されたとき即座に対応する役割
  const handlePokemonPesonalityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonPersonality(event.target.value);
  };

  //ポケモンのレベルの入力フィールドの値が変更されたとき即座に対応する役割
  const handlePokemonlevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setPokemonLevel(parseInt(event.target.value));
    setPokemonLevel(event.target.value);
  };

  //checkボタンをクリック時のフォームのリセット防止
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // フォームのデフォルトの送信を防止

    // ポケモンの名前が空でないかをチェック
    if (pokemonName.trim() === "") {
      return; // ポケモンの名前が空の場合、何もしない
    }

    // ポケモンの性格が空でないかをチェック
    if (pokemonPersonality.trim() === "") {
      return; // ポケモンの性格が空の場合、何もしない
    }

   // ポケモンのレベルが空でないかをチェック
    // if (pokemonLevel === 0 || isNaN(pokemonLevel)) {
    //   return; // ポケモンのレベルが空の場合、何もしない
    // }
    if (pokemonLevel.trim() === "") {
      return; // ポケモンのレベルが空の場合、何もしない
    }
  };

  //cancelボタンをクリック時のフォームを初期化
  const handleCancelClick = () => {
    // フォームの状態を初期化
    setHelperTime(0);
    setPokemonName("");
    setPokemonPersonality("");
    setPokemonLevel("");
    // その他の状態を初期化する場合はここに追加
  };

  // checkボタンをクリックしたときの処理
const handleCheckButtonClick = () => {
  // ポケモンの名前が空でないかをチェック
  if (pokemonName.trim() === "") {
    return; // ポケモンの名前が空の場合、何もしない
  }
  // ポケモンの性格が空でないかをチェック
  if (pokemonPersonality.trim() === "") {
    return; // ポケモンの性格が空の場合、何もしない
  }

  // ポケモンのレベルが空でないかをチェック
    // if (pokemonLevel === 0 || isNaN(pokemonLevel)) {
    //   return; // ポケモンのレベルが空の場合、何もしない
    // }
    if (pokemonLevel.trim() === "") {
      return; // ポケモンのレベルが空の場合、何もしない
    }

  // ポケモンの名前と性格を数値に変換
  const pokemonTimeValue = pokemonTimeMap[pokemonName];
  const pokemonPersonalityValue = pokemonPersonalityMap[pokemonPersonality];

  // ポケモンの名前と性格とレベルが存在する場合のみ計算を行う
  if (pokemonTimeValue !== undefined && pokemonPersonalityValue !== undefined && pokemonLevel !== undefined) {
    // おてつだい時間を計算し、状態に設定する
    const calculatedHelperTime = Math.floor(Math.floor(pokemonTimeValue *
                                                       pokemonPersonalityValue) *
                                                       (1.000 - (Math.floor( Number(pokemonLevel) - 1 )) * 0.002 ));
    setHelperTime(calculatedHelperTime);
  } else {
    // 存在しない場合はデフォルト値を設定
    setHelperTime(0);
  }
};

  return (
    <main className="min-h-screen items-center justify-between bg-blue-950">
      <form onSubmit={handleSubmit}>
        <div className="pt-4">
          <div className="grid lg:grid-cols-3 pb-4  pt-2 mx-24 gap-4 shadow-md rounded bg-sky-950">
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
            </div>
            <div className="space-y-1.5 mx-10">
                    <Label className="text-2xl text-white" htmlFor="pokemonPesonality">性格</Label>
                    <Input
                      id="pokemonPersonality"
                      type="txet"
                      placeholder="Please input the Pokémon’s personality."
                      className="bg-gray-400 text-white border-blue-700"
                      value={pokemonPersonality}
                      onChange={handlePokemonPesonalityChange}
                    />
             </div>
             <div className="space-y-1.5 mx-10">
                    <Label className="text-2xl text-white" htmlFor="pokemonLevel">レベル</Label>
                    <Input
                      id="pokemonLevel"
                      type="text"
                      placeholder="Please tell me the level of the Pokémon."
                      className="bg-gray-400 text-white border-blue-700"
                      value={pokemonLevel}
                      onChange={handlePokemonlevelChange}
                    />
             </div>
            <Skill />
          </div>
        </div>
        <div className="space-y-2 mx-24 my-7 pb-4 flex justify-center items-center shadow-md rounded  bg-sky-950 text-white ">
          <Bonuss />
          <Energy />
        </div>
        <CardFooter className="flex flex-row justify-center items-center pt-10 pb-5 space-x-96">
          <div className=" pr-48">
          <Button
            className="bg-sky-900 text-white rounded transform hover:bg-sky-950 hover:scale-95"
            onClick={handleCancelClick} // クリックされたときに呼び出す関数を指定
          >
            Cancel
          </Button>
          </div>
          <div className=" pl-48">
            <Button
              className=" bg-gray-400 text-white rounded transform hover:bg-gray-500 hover:scale-95"
              onClick={handleCheckButtonClick} // "Check"ボタンがクリックされたときに実行される関数を指定
            >
              Check
            </Button>
          </div>
        </CardFooter>
        <div className=" mx-96  pt-2 pb-4  flex justify-center items-center flex-col space-y-1.5 shadow-md rounded bg-sky-950">
          <Label
            htmlFor="helperTime"
            className="text-2xl text-white">おてつだい時間</Label>
          <Input
            id="helperTime"
            type="text"
            readOnly
            value={helperTime}
            className="bg-gray-400 text-white w-1/3 border-blue-700"
          />
        </div>
      </form>
    </main>
  );
}

// function setHelperTime(time: number) {
//   throw new Error('Function not implemented.');
// }
