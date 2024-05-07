"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Porsonality from "./components/Porsonality";
import Level from "./components/Level";
import Skill from "./components/Skill";
import Bonuss from "./components/Bonuss";
import Energy from "./components/Energy";
import Pokemon from "./components/Pokemon";

const pokemonTimeMap: { [pokemonName: string]: number } = {
  "ピカチュウ": 2700,
  "フシギダネ": 4400,
  // 他のポケモン名と対応する時間を追加
};

export default function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [helperTime, setHelperTime] = useState(0);

  const handlePokemonNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleCheckButtonClick = () => {
    const time = pokemonTimeMap[pokemonName];
    if (time !== undefined) {
      setHelperTime(time);
    } else {
      setHelperTime(0);
    }
  };

  return (
    <main className="min-h-screen items-center justify-between bg-blue-950">
      <form>
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
                {/* <Label
                  htmlFor="helperTime"
                  className="text-2xl text-white"
                >おてつだい時間</Label>
                <Input
                  id="helperTime"
                  type="text"
                  readOnly
                  value={helperTime}
                  className="bg-gray-400 text-white border-blue-700"
                /> */}
            </div>
            <div className="space-y-1.5 mx-10">
                    <Label className="text-2xl text-white" htmlFor="性格">性格</Label>
                    <Input
                      id="personality"
                      placeholder="Please input the Pokémon’s personality."
                      className="bg-gray-400 text-white border-blue-700"
                    />
             </div>
             <div className="space-y-1.5 mx-10">
                    <Label className="text-2xl text-white" htmlFor="レベル">レベル</Label>
                    <Input
                      id="level"
                      placeholder="Please tell me the level of the Pokémon."
                      className="bg-gray-400 text-white border-blue-700"
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
            <Button className=" bg-sky-900  text-white rounded transform hover:bg-sky-950 hover:scale-95">
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