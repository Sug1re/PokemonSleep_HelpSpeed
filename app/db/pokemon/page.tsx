import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { getpokemonData } from "@/app/api";

const pokemon00 = async () => {
  let pokemonData: { name: string } | { name: string }[];

  try {
    pokemonData = await getpokemonData(); // データ取得
  } catch (error) {
    console.error("データ取得中にエラーが発生しました:", error);
    pokemonData = { name: "エラーが発生しました" }; // エラーハンドリング
  }

  // データが配列かオブジェクトかで処理を分岐
  const renderPokemonName = () => {
    if (Array.isArray(pokemonData)) {
      return (
        <ul>
          {pokemonData.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      );
    }
    return <h1>ポケモンの名前：{pokemonData.name}</h1>;
  };

  return (
    <main className=" min-h-screen bg-gray-400">
      <div className=" pt-24 bg-gray-400"></div>
      <div className=" grid grid-cols-5 bg-gray-900 p-2 mx-0 sm:mx-4 md:mx-8 lg:mx-36">
        <Link
          // href="/db/event/"
          href=""
          className="relative text-white hover:text-orange-400 flex justify-center items-center border-l border-gray-400 hover:bg-gray-700"
        >
          <Button className="relative text-2xs md:text-xs">
            {/* テキスト */}
            <span className="absolute inset-0 flex items-center justify-center">
              イベント情報
            </span>
            {/* 南京錠アイコン */}
            <LockClosedIcon className="absolute inset-0 h-8 w-8 text-gray-100 opacity-50" />
          </Button>
        </Link>
        <Link
          href="/db/pokemon/"
          className="text-blue-500 flex justify-items-center justify-center border-l border-gray-400 hover:bg-gray-700 "
        >
          <Button className=" text-2xs md:text-xs">ポケモン図鑑</Button>
        </Link>
        <Link
          href="/db/cook/"
          className="text-white hover:text-orange-400 flex justify-items-center justify-center border-l border-gray-400 hover:bg-gray-700  "
        >
          <Button className=" text-2xs md:text-xs">料理</Button>
        </Link>
        <Link
          href="/db/otesupi/"
          className="text-white hover:text-orange-400 flex justify-items-center justify-center border-l border-gray-400 hover:bg-gray-700"
        >
          <Button className=" text-2xs md:text-xs">おてスピ計</Button>
        </Link>
        <Link
          href="/db/food/"
          className="text-white hover:text-orange-400 flex justify-items-center justify-center border-x border-gray-400 hover:bg-gray-700  "
        >
          <Button className=" text-2xs md:text-xs">食材期待値</Button>
        </Link>
      </div>
      {/* <ul className="bg-white p-4 text-2xs grid grid-rows-12">
        {renderPokemonName()}
      </ul> */}
      <div className=" space-y-4 mx-0 sm:mx-4 md:mx-8 lg:mx-36">
        <div className=" mt-4 py-3 pl-4 bg-gray-900 text-white">
          ポケモン図鑑
        </div>
        <div className=" space-y-2">
          <div className=" mt-4 py-3 pl-4 bg-gray-700 text-white text-xs">
            図鑑No.別
          </div>
          <div className=" space-y-0">
            <div className=" mt-4 py-3 pl-4 bg-gray-500 text-white text-xs">
              図鑑No.別
            </div>
            <div className=" mt-4 py-3 pl-4 bg-gray-600 text-white text-xs">
              図鑑No.別
            </div>
          </div>
        </div>
        <div className=" mt-4 py-3 pl-4 bg-gray-700 text-white  text-xs">
          タイプ別
        </div>
        <div className=" mt-4 py-3 pl-4 bg-gray-700 text-white  text-xs">
          得意なもの別
        </div>
        <div className=" mt-4 py-3 pl-4 bg-gray-700 text-white  text-xs">
          睡眠タイプ別
        </div>
        <div className=" mt-4 py-3 pl-4 bg-gray-700 text-white  text-xs">
          メインスキル別
        </div>
        <div className=" mt-4 py-3 pl-4 bg-gray-700 text-white  text-xs">
          フレンドポイント別
        </div>
      </div>
      {/* <ul className=" px-6 py-4 space-y-6 ">
        <li className=" flex justify-around p-2 bg-white rounded border-x-4 border-green-700 shadow">
          <span className=" flex place-self-center">a</span>
          <div className=" flex flex-col">
            <span>b</span>
            <span>c</span>
          </div>
        </li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul> */}
    </main>
  );
};

export default pokemon00;
