import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LockClosedIcon } from "@heroicons/react/24/solid";

const pokemon00 = () => {
  return (
    //12.26 スキルコピー追加
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
      <div className=" space-y-3 py-4 mx-0 sm:mx-4 md:mx-8 lg:mx-36">
        <div className="py-3 pl-4 bg-gray-900 text-white">ポケモン図鑑</div>
        {/*図鑑No.別*/}
        <div className=" space-y-1">
          <div className=" py-3 pl-4 bg-gray-700 text-white text-xs">
            図鑑No.別
          </div>
          <div>
            <div className=" flex bg-gray-500 text-white">
              <Link href="/db/pokemon/all">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  全ポケモン
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-3 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/pokemon/0001~0050">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  No.0001〜0050
                </Button>
              </Link>
              <Link href="/db/pokemon/0051~0100">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  No.0051〜0100
                </Button>
              </Link>
              <Link href="/db/pokemon/0101~0150">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  No.0101〜0150
                </Button>
              </Link>
              <Link href="/db/pokemon/0151~0200">
                <Button className=" hidden md:block md:text-xs underline decoration-solid hover:text-orange-500">
                  No.0151〜0200
                </Button>
              </Link>
              <Link href="/db/pokemon/0201~0250">
                <Button className=" hidden md:block md:text-xs underline decoration-solid hover:text-orange-500">
                  No.0201〜0250
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-3 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/pokemon/0151~0200" className=" md:hidden">
                <Button className=" text-2xs underline decoration-solid hover:text-orange-400">
                  No.0151〜0200
                </Button>
              </Link>
              <Link href="/db/pokemon/0201~0250" className=" md:hidden">
                <Button className=" text-2xs underline decoration-solid hover:text-orange-400">
                  No.0201〜0250
                </Button>
              </Link>
              <Link href="/db/pokemon/0251~0300">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  No.0251〜0300
                </Button>
              </Link>
              <Link href="/db/pokemon/0301~0350">
                <Button className=" hidden md:flex md:text-xs underline decoration-solid hover:text-orange-400">
                  No.0301〜0350
                </Button>
              </Link>
              <Link href="/db/pokemon/0351~0400">
                <Button className=" hidden md:flex md:text-xs underline decoration-solid hover:text-orange-400">
                  No.0351〜0400
                </Button>
              </Link>
              <Link href="/db/pokemon/0401~0450">
                <Button className=" hidden md:flex md:text-xs underline decoration-solid hover:text-orange-400">
                  No.0401〜0450
                </Button>
              </Link>
              <Link href="/db/pokemon/0451~0500">
                <Button className=" hidden md:flex md:text-xs underline decoration-solid hover:text-orange-400">
                  No.0451〜0500
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-3 md:grid-cols-5  bg-gray-600 text-white">
              <Link href="/db/pokemon/0301~0350" className=" md:hidden">
                <Button className=" text-2xs underline decoration-solid hover:text-orange-500">
                  No.0301〜0350
                </Button>
              </Link>

              <Link href="/db/pokemon/0351~0400" className=" md:hidden">
                <Button className=" text-2xs underline decoration-solid hover:text-orange-500">
                  No.0351〜0400
                </Button>
              </Link>

              <Link href="/db/pokemon/0401~0450" className=" md:hidden">
                <Button className=" text-2xs underline decoration-solid hover:text-orange-500">
                  No.0401〜0450
                </Button>
              </Link>

              <Link href="/db/pokemon/0501~0550">
                <Button className=" hidden md:block md:text-xs underline decoration-solid hover:text-orange-500">
                  No.0501〜0550
                </Button>
              </Link>

              <Link href="/db/pokemon/0551~0600">
                <Button className=" hidden md:block md:text-xs underline decoration-solid hover:text-orange-500">
                  No.0551〜0600
                </Button>
              </Link>

              <Link href="/db/pokemon/0601~0650">
                <Button className=" hidden md:block md:text-xs underline decoration-solid hover:text-orange-500">
                  No.0601〜0650
                </Button>
              </Link>

              <Link href="/db/pokemon/0651~0700">
                <Button className=" hidden md:block md:text-xs underline decoration-solid hover:text-orange-500">
                  No.0651〜0700
                </Button>
              </Link>

              <Link href="/db/pokemon/0701~0750">
                <Button className=" hidden md:block md:text-xs underline decoration-solid hover:text-orange-500">
                  No.0701〜0750
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-3 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/pokemon/0451~0500" className=" md:hidden">
                <Button className=" text-2xs  underline decoration-solid hover:text-orange-400">
                  No.0451〜0500
                </Button>
              </Link>
              <Link href="/db/pokemon/0501~0550" className=" md:hidden">
                <Button className=" text-2xs  underline decoration-solid hover:text-orange-400">
                  No.0501〜0550
                </Button>
              </Link>
              <Link href="/db/pokemon/0551~0600" className=" md:hidden">
                <Button className=" text-2xs  underline decoration-solid hover:text-orange-400">
                  No.0551〜0600
                </Button>
              </Link>
              <Link href="/db/pokemon/0751~0800">
                <Button className=" hidden md:block md:text-xs underline decoration-solid hover:text-orange-400">
                  No.0751〜0800
                </Button>
              </Link>
              <Link href="/db/pokemon/0801~0850">
                <Button className=" hidden md:block md:text-xs underline decoration-solid hover:text-orange-400">
                  No.0801〜0850
                </Button>
              </Link>
              <Link href="/db/pokemon/0851~0900">
                <Button className=" hidden md:block md:text-xs underline decoration-solid hover:text-orange-400">
                  No.0851〜0900
                </Button>
              </Link>
              <Link href="/db/pokemon/0901~0950">
                <Button className=" hidden md:block md:text-xs underline decoration-solid hover:text-orange-400">
                  No.0901〜0950
                </Button>
              </Link>
              {/* <div>No.0951〜1000</div> */}
            </div>
            <div className=" md:hidden grid grid-cols-3 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/pokemon/0601~0650">
                <Button className="  text-2xs underline decoration-solid hover:text-orange-500">
                  No.0601〜0650
                </Button>
              </Link>
              <Link href="/db/pokemon/0651~0700">
                <Button className="  text-2xs underline decoration-solid hover:text-orange-500">
                  No.0651〜0700
                </Button>
              </Link>
              <Link href="/db/pokemon/0701~0750">
                <Button className="  text-2xs underline decoration-solid hover:text-orange-500">
                  No.0701〜0750
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-3 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/pokemon/0751~0800">
                <Button className="  text-2xs underline decoration-solid hover:text-orange-500">
                  No.0751〜0800
                </Button>
              </Link>
              <Link href="/db/pokemon/0801~0850">
                <Button className=" text-2xs underline decoration-solid hover:text-orange-500">
                  No.0801〜0850
                </Button>
              </Link>
              <Link href="/db/pokemon/0851~0900">
                <Button className=" text-2xs underline decoration-solid hover:text-orange-500">
                  No.0851〜0900
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-3 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/pokemon/0901~0950">
                <Button className=" text-2xs  underline decoration-solid hover:text-orange-400">
                  No.0901〜0950
                </Button>
              </Link>
              <Link href="/db/pokemon/0951~1000">
                <Button className=" text-2xs  underline decoration-solid hover:text-orange-400">
                  No.0951〜1000
                </Button>
              </Link>
              <Link href="/db/pokemon/1001~1050">
                <Button className=" text-2xs  underline decoration-solid hover:text-orange-400">
                  No.1001〜1050
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/*タイプ別*/}
        <div className=" space-y-1">
          <div className=" py-3 pl-4 bg-gray-700 text-white text-xs">
            タイプ別
          </div>
          <div>
            <div className=" grid grid-cols-5 bg-gray-500 text-white">
              <Link href=".db/pokemon/normal">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ノーマル
                </Button>
              </Link>
              <Link href=".db/pokemon/fighting">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  かくとう
                </Button>
              </Link>
              <Link href=".db/pokemon/poison">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  どく
                </Button>
              </Link>
              <Link href=".db/pokemon/ground">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  じめん
                </Button>
              </Link>
              <Link href=".db/pokemon/flying">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ひこう
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-5 bg-gray-600 text-white">
              <Link href=".db/pokemon/bug">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  むし
                </Button>
              </Link>
              <Link href=".db/pokemon/rock">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  いわ
                </Button>
              </Link>
              <Link href=".db/pokemon/ghost">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ゴースト
                </Button>
              </Link>
              <Link href=".db/pokemon/steel">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  はがね
                </Button>
              </Link>
              <Link href=".db/pokemon/fire">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ほのお
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-5 bg-gray-500 text-white">
              <Link href=".db/pokemon/water">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  みず
                </Button>
              </Link>
              <Link href=".db/pokemon/electric">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  でんき
                </Button>
              </Link>
              <Link href=".db/pokemon/grass">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  くさ
                </Button>
              </Link>
              <Link href=".db/pokemon/ice">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  こおり
                </Button>
              </Link>
              <Link href=".db/pokemon/psychic">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  エスパー
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-5 bg-gray-600 text-white">
              <Link href=".db/pokemon/dragon">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ドラゴン
                </Button>
              </Link>
              <Link href=".db/pokemon/dark">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  あく
                </Button>
              </Link>
              <Link href=".db/pokemon/fairy">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  フェアリー
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/*得意なもの別*/}
        <div className=" space-y-1">
          <div className=" py-3 pl-4 bg-gray-700 text-white text-xs">
            得意なもの別
          </div>
          <div>
            <div className=" grid grid-cols-3 bg-gray-500 text-white">
              <Link href="/db/pokemon/berries">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  きのみ
                </Button>
              </Link>
              <Link href="/db/pokemon/ingredients">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  食材
                </Button>
              </Link>
              <Link href="/db/pokemon/skills">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  スキル
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/*睡眠タイプ別*/}
        <div className=" space-y-1">
          <div className=" py-3 pl-4 bg-gray-700 text-white text-xs">
            睡眠タイプ別
          </div>
          <div>
            <div className=" grid grid-cols-3 bg-gray-500 text-white">
              <Link href="/db/pokemon/dozing">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  うとうと
                </Button>
              </Link>
              <Link href="/db/pokemon/snoozing">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  すやすや
                </Button>
              </Link>
              <Link href="/db/pokemon/slumbering">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ぐっすり
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/*メインスキル別*/}
        <div className=" space-y-1">
          <div className=" py-3 pl-4 bg-gray-700 text-white text-xs">
            メインスキル別
          </div>
          <div>
            <div className=" grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/pokemon/charge-strengthS">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  エナジーチャージS
                </Button>
              </Link>
              <Link href="/db/pokemon/charge-strengthM">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  エナジーチャージM
                </Button>
              </Link>
              <Link
                href="/db/pokemon/dream-shard-magnetS"
                className=" hidden md:flex"
              >
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ゆめのかけらゲットS
                </Button>
              </Link>
              <Link
                href="/db/pokemon/energizing-cheerS"
                className=" hidden md:flex"
              >
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  げんきエールS
                </Button>
              </Link>
              <Link
                href="/db/pokemon/charge-energyS"
                className=" hidden md:flex"
              >
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  げんきチャージS
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/pokemon/energizing-cheerS" className=" md:hidden">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  ゆめのかけらゲットS
                </Button>
              </Link>
              <Link href="/db/pokemon/energizing-cheerS" className=" md:hidden">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  げんきエールS
                </Button>
              </Link>
              <Link
                href="/db/pokemon/energy-for-everyoneS"
                className=" hidden md:flex"
              >
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  げんきオールS
                </Button>
              </Link>
              <Link
                href="/db/pokemon/extra-helpfulS"
                className=" hidden md:flex"
              >
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  おてつだいサポートS
                </Button>
              </Link>
              <Link
                href="/db/pokemon/ingredient-magnetS"
                className=" hidden md:flex"
              >
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  食材ゲットS
                </Button>
              </Link>
              <Link
                href="/db/pokemon/cooking-power-upS"
                className=" hidden md:flex"
              >
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  料理パワーアップ
                </Button>
              </Link>
              <Link href="/db/pokemon/metronome" className=" hidden md:flex">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  ゆびをふる
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/pokemon/extra-helpfulS" className=" md:hidden">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  げんきチャージS
                </Button>
              </Link>
              <Link href="/db/pokemon/extra-helpfulS" className=" md:hidden">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  げんきオールS
                </Button>
              </Link>
              <Link
                href="/db/pokemon/tasty-chanceS"
                className=" hidden md:flex"
              >
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  料理チャンスS
                </Button>
              </Link>
              <Link href="/db/pokemon/helper-boost" className=" hidden md:flex">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  おてつだいブースト
                </Button>
              </Link>
              <Link href="/db/pokemon/berry-burst" className=" hidden md:flex">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  きのみバースト
                </Button>
              </Link>
              <Link href="/db/pokemon/skill-copy" className=" hidden md:flex">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  スキルコピー
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/pokemon/metronome">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  おてつだいサポートS
                </Button>
              </Link>
              <Link href="/db/pokemon/tasty-chanceS">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  食材ゲットS
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/pokemon/cooking-power-upS">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  料理パワーアップ
                </Button>
              </Link>
              <Link href="/db/pokemon/metronome">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  ゆびをふる
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/pokemon/tasty-chanceS">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  料理チャンスS
                </Button>
              </Link>
              <Link href="/db/pokemon/helper-boost">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  おてつだいブースト
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/pokemon/berry-burst">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  きのみバースト
                </Button>
              </Link>
              <Link href="/db/pokemon/skill-copy">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  スキルコピー
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/*進化別*/}
        <div className=" space-y-1">
          <div className=" py-3 pl-4 bg-gray-700 text-white text-xs">
            進化別
          </div>
          <div>
            <div className=" grid grid-cols-4 bg-gray-500 text-white">
              <Link href="/db/pokemon/no-evolution">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  未進化
                </Button>
              </Link>
              <Link href="/db/pokemon/first-evolution">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  1進化
                </Button>
              </Link>
              <Link href="/db/pokemon/second-evolution">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  2進化
                </Button>
              </Link>
              <Link href="/db/pokemon/unevolved">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  未進化
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/*フィールド別*/}
        <div className=" space-y-1">
          <div className=" py-3 pl-4 bg-gray-700 text-white text-xs">
            フィールド別
          </div>
          <div>
            <div className=" grid grid-cols-3 bg-gray-500 text-white">
              <Link href="/db/pokemon/greengrass-isle">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ワカクサ本島
                </Button>
              </Link>
              <Link href="/db/pokemon/cyan-beach">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  シアンの砂浜
                </Button>
              </Link>
              <Link href="/db/pokemon/taupe-hollow">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  トープ洞窟
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-3 bg-gray-600 text-white">
              <Link href="/db/pokemon/snowdrop-tundra">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  ウノハナ雪原
                </Button>
              </Link>
              <Link href="/db/pokemon/lapis-lakeside">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  ラピラズリ湖畔
                </Button>
              </Link>
              <Link href="/db/pokemon/old-gold-power-plant">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                  ゴールド旧発電所
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/*地方別(世代別)*/}
        <div className=" space-y-1">
          <div className=" py-3 pl-4 bg-gray-700 text-white text-xs">
            地方別(世代別)
          </div>
          <div>
            <div>
              <div className=" grid grid-cols-3 bg-gray-500 text-white">
                <Link href="/db/pokemon/kanto">
                  <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                    カントー(第1世代)
                  </Button>
                </Link>
                <Link href="/db/pokemon/johto">
                  <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                    ジョウト(第2世代)
                  </Button>
                </Link>
                <Link href="/db/pokemon/hoenn">
                  <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                    ホウエン(第3世代)
                  </Button>
                </Link>
              </div>
              <div className=" grid grid-cols-3 bg-gray-600 text-white">
                <Link href="/db/pokemon/sinnoh">
                  <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                    シンオウ(第4世代)
                  </Button>
                </Link>
                <Link href="/db/pokemon/unova">
                  <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                    イッシュ(第5世代)
                  </Button>
                </Link>
                <Link href="/db/pokemon/kalos">
                  <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-400">
                    カロス(第6世代)
                  </Button>
                </Link>
              </div>
              <div className=" grid grid-cols-3 bg-gray-500 text-white">
                <Link href="/db/pokemon/alola">
                  <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                    アローラ(第7世代)
                  </Button>
                </Link>
                <Link href="/db/pokemon/galar">
                  <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                    ガラル(第8世代)
                  </Button>
                </Link>
                <Link href="/db/pokemon/paldea">
                  <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                    パルデア(第9世代)
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default pokemon00;
