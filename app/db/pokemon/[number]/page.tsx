import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { getpokemonData } from "@/app/api";
import { pokemonData } from "@/app/types";

interface PokemonDataProps {
  pokemonDataNumber: pokemonData[];
}

//　paramsで[number]を動的ルートにする関数
const PokemonNumberPage = async ({
  params,
}: {
  params: { number: string };
}) => {
  const pokemonDataNumber = (await getpokemonData()).map(
    (pokemonData, index) => ({
      ...pokemonData,
      id: index + 1, //　1から始まるIDを付与
    })
  );

  let filteredPokemonData: any[];

  //　動的ルートに基づいてフィルタリング範囲を変更
  //　ポケモンが追加されるたび　修正ポイント
  switch (params.number) {
    case "0001~0050":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 1 && pokemonData.id <= 27
      );
      break;
    case "0051~0100":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 28 && pokemonData.id <= 52
      );
      break;
    case "0101~0150":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 53 && pokemonData.id <= 65
      );
      break;
    case "0151~0200":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 66 && pokemonData.id <= 88
      );
      break;
    case "0201~0250":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 89 && pokemonData.id <= 101
      );
      break;
    case "0251~0300":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 102 && pokemonData.id <= 107
      );
      break;
    case "0301~0350":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 108 && pokemonData.id <= 115
      );
      break;
    case "0351~0400":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 116 && pokemonData.id <= 122
      );
      break;
    case "0401~0450":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 123 && pokemonData.id <= 131
      );
      break;
    case "0451~0500":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 132 && pokemonData.id <= 141
      );
      break;
    case "0501~0550":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 132 && pokemonData.id <= 141
      );
      break;
    case "0551~0600":
      //　ゲーム内にポケモンがいないのでデータを取得しない

      filteredPokemonData = [];
      break;
    case "0601~0650":
      //　ゲーム内にポケモンがいないのでデータを取得しない

      filteredPokemonData = [];
      break;
    case "0651~0700":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id == 142
      );
      break;
    case "0701~0750":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 143 && pokemonData.id <= 146
      );
      break;
    case "0751~0800":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 147 && pokemonData.id <= 150
      );
      break;
    case "0801~0850":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id == 151
      );
      break;
    case "0851~0900":
      //　ゲーム内にポケモンがいないのでデータを取得しない

      filteredPokemonData = [];
      break;
    case "0901~0950":
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 152 && pokemonData.id <= 160
      );
      break;
    case "0951~1000":
      //　ゲーム内にポケモンがいないのでデータを取得しない

      filteredPokemonData = [];
      break;
    case "1001~1050":
      //　ゲーム内にポケモンがいないのでデータを取得しない

      filteredPokemonData = [];
      break;
    default:
      filteredPokemonData = pokemonDataNumber.filter(
        (pokemonData) => pokemonData.id >= 1 && pokemonData.id <= 1000
      );
      break;
  }

  // const handleScrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "instant", //スクロール速度調整
  //   });
  // };

  return (
    <main className="min-h-screen bg-gray-400">
      <div className="pt-24 bg-gray-400"></div>
      <div className="text-sm grid grid-cols-5 bg-gray-900 p-2 mx-0 sm:mx-4 md:mx-8 lg:mx-36">
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
          href=""
          // href="/db/pokemon/"
          className="relative text-white hover:text-orange-400 flex justify-center items-center border-l border-gray-400 hover:bg-gray-700"
        >
          <Button className="relative text-2xs md:text-xs">
            <span className="absolute inset-0 flex items-center justify-center ">
              ポケモン図鑑
            </span>
            <LockClosedIcon className="absolute inset-0 h-8 w-8 text-gray-100 opacity-50" />
          </Button>
        </Link>
        <Link
          href=""
          // href="/db/cook/"
          className="relative text-white hover:text-orange-400 flex justify-center items-center border-l border-gray-400 hover:bg-gray-700"
        >
          <Button className="relative text-2xs md:text-xs">
            <span className="absolute inset-0 flex items-center justify-center">
              料理
            </span>
            <LockClosedIcon className="absolute inset-0 h-8 w-8 text-gray-100 opacity-50" />
          </Button>
        </Link>
        <Link
          href="/db/otesupi/"
          className="text-white hover:text-orange-400 flex justify-items-center justify-center border-l border-gray-400 hover:bg-gray-700"
        >
          <Button className=" text-2xs md:text-xs">おてスピ計</Button>
        </Link>
        <Link
          href=""
          // href="/db/food/"
          className="relative text-white hover:text-orange-400 flex justify-center items-center border-x border-gray-400 hover:bg-gray-700"
        >
          <Button className="relative text-2xs md:text-xs">
            <span className="absolute inset-0 flex items-center justify-center">
              食材期待値
            </span>
            <LockClosedIcon className="absolute inset-0 h-8 w-8 text-gray-100 opacity-50" />
          </Button>
        </Link>
      </div>
      <div className=" p-2 my-4 bg-gray-900 text-white text-xs mx-0 sm:mx-4 md:mx-8 lg:mx-36">
        ポケモン図鑑 No.{params.number}
      </div>
      <div className="mb-40 mx-0 sm:mx-4 md:mx-8 lg:mx-36">
        {/* <div className=" p-2 mb-4 flex bg-gray-900 text-white text-4xs md:text-xs whitespace-nowrap">
          <div className=" grid grid-cols-5 gap-1">
            <div>図鑑No.</div>
            <div>ポケモン名</div>
            <div>タイプ</div>
            <div>とくい</div>
            <div>睡眠</div>
          </div>
          <div className=" grid grid-cols-5 gap-1">
            <div>メインスキル</div>
            <div>おてつだい時間</div>
            <div>食材A</div>
            <div>食材B</div>
            <div>食材C</div>
          </div> */}
        {/* </div> */}
        <div className=" px-1 py-1.5 mb-4 flex justify-between bg-gray-900 text-white text-4xs md:text-xs">
          <div className=" w-5 border-r border-gray-400">図鑑No.</div>
          <div className=" w-8 border-r border-gray-400">ポケモン名</div>
          <div className=" w-7 border-r border-gray-400">タイプ</div>
          <div className=" w-6 border-r border-gray-400">睡眠</div>
          <div className=" w-5 border-r border-gray-400">とくい</div>
          <div className=" w-14 border-r border-gray-400">メインスキル</div>
          <div className=" w-7 border-r border-gray-400">基礎時間</div>
          <div className=" w-12 border-r border-gray-400">食材A</div>
          <div className=" w-12 border-r border-gray-400">食材B</div>
          <div className=" w-12">食材C</div>
        </div>
        <div className=" px-1 py-1.5 flex justify-between bg-gray-500 text-white text-4xs md:text-xs">
          <div className=" w-5">0001</div>
          <div className=" w-8">フシギダネ</div>
          <div className=" w-7">くさ</div>
          <div className=" w-6">うとうと</div>
          <div className=" w-5">食材</div>
          <div className=" w-14">食材ゲットS</div>
          <div className=" w-7">4400</div>
          <div className=" w-12">あまいミツ</div>
          <div className=" w-12">ワカクサトマト</div>
          <div className=" w-12">ほっこりポテト</div>
        </div>
        {/*　ポケモンが追加されるたび　修正ポイント　*/}
        {[
          "0551~0600",
          "0601~0650",
          "0851~0900",
          "0951~1000",
          "1001~1050",
        ].includes(params.number) ? (
          // データがない場合のテキスト
          <div className="p-4 bg-red-600 text-white text-center">
            現在『Pokémon Sleep』に登場していないのでデータがありません。
          </div>
        ) : (
          // filteredPokemonDataを表示
          filteredPokemonData.map((pokemonData) => (
            <div
              key={pokemonData.id}
              className=" px-1 py-1.5 flex justify-between items-center bg-gray-600 border-x-2 border-gray-900 text-white text-4xs md:text-3xs"
            >
              <div className=" w-5">{pokemonData.number}</div>
              <div className=" w-8 text-balance">{pokemonData.name}</div>
              <div className=" w-7">{pokemonData.type}</div>
              <div className=" w-6">{pokemonData.sleep}</div>
              <div className=" w-5">{pokemonData.forte}</div>
              <div className=" w-14">{pokemonData.skill}</div>
              <div className=" w-7">{pokemonData.time}</div>
              <div className=" w-12">{pokemonData.foodA}</div>
              <div className=" w-12">{pokemonData.foodB}</div>
              <div className=" w-12">{pokemonData.foodC}</div>
            </div>
          ))
        )}
      </div>
      {/* <Button
        // onClick={handleScrollToTop}
        className=" w-full py-6 flex justify-center border-t-4 border-gray-600 bg-gray-900 text-white hover:bg-gray-900 btn-scroll-top"
      >
        ↑ページトップに戻る
      </Button> */}
    </main>
  );
};

export default PokemonNumberPage;
