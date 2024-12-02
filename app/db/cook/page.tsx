import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";

const cook00 = () => {
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
          className=" text-white hover:text-orange-400 flex justify-items-center justify-center border-l border-gray-400 hover:bg-gray-700 "
        >
          <Button className=" text-2xs md:text-xs">ポケモン図鑑</Button>
        </Link>
        <Link
          href="/db/cook/"
          className="text-blue-500 flex justify-items-center justify-center border-l border-gray-400 hover:bg-gray-700 "
        >
          <Button className=" text-2xs md:text-xs">料理</Button>
        </Link>
        <Link
          href="/db/otesupi/"
          className=" text-white hover:text-orange-400 flex justify-items-center justify-center border-l border-gray-400 hover:bg-gray-700 "
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
        <div className="py-3 pl-4 bg-gray-900 text-white">料理レシピ</div>
        {/*カレー・シチュー*/}
        <div className=" space-y-1">
          <div className=" py-3 pl-4 bg-gray-700 text-white text-xs">
            カレー・シチュー
          </div>
          <div>
            <div className=" grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="db/cook/curry#1">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  とくせんリンゴカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#2">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  あぶりテールカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#3" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  サンパワートマトカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#4" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ぜったいねむりバターカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#5" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  からくちネギもりカレー
                </Button>
              </Link>
            </div>
            <div className=" grid  grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="db/cook/curry#3" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  サンパワートマトカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#4" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ぜったいねむりバターカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#6" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  キノコのほうしカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#7" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  おやこあいカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#8" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  満腹チーズバーグカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#9" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ほっこりホワイトシチュー
                </Button>
              </Link>
              <Link href="/db/cook/curry#10" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  たんじゅんホワイトシチュー
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="db/cook/curry#5" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  からくちネギもりカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#6" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  キノコのほうしカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#11" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  マメバーグカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#12" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ベイビィハニーカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#13" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ニンジャカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#14" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ひでりカツレツカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#15" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  とけるオムカレー
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="db/cook/curry#7" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  おやこあいカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#8" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  満腹チーズバーグカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#16" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ビルドアップマメカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#17" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  じゅうなんコーンシチュー
                </Button>
              </Link>
              <Link href="db/cook/curry#18" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  れんごくコーンキーマカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#19" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ピヨピヨパンチ辛口カレー
                </Button>
              </Link>
              <Link href="db/cook/curry#20" className=" hidden md:block">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  めざめるパワーシチュー
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="db/cook/curry#9">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ほっこりホワイトシチュー
                </Button>
              </Link>
              <Link href="db/cook/curry#10">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  たんじゅんホワイトシチュー
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="db/cook/curry#11">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  マメバーグカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#12">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ベイビィハニーカレー
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="db/cook/curry#13">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ニンジャカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#14">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ひでりカツレツカレー
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="db/cook/curry#15">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  とけるオムカレー
                </Button>
              </Link>
              <Link href="db/cook/curry#16">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ビルドアップマメカレー
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="db/cook/curry#17">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  じゅうなんコーンシチュー
                </Button>
              </Link>
              <Link href="db/cook/curry#18">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  れんごくコーンキーマカレー
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="db/cook/curry#19">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ピヨピヨパンチ辛口カレー
                </Button>
              </Link>
              <Link href="db/cook/curry#20">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  めざめるパワーシチュー
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/*サラダ*/}
        <div className=" space-y-1">
          <div className=" py-3 pl-4 bg-gray-700 text-white text-xs">
            サラダ
          </div>
          <div>
            <div className=" grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/cook/salad#1">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ヤドンテールのペッパーサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#2">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  キノコのほうしサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#3" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ゆきかきシーザーサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#4" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  くいしんぼうポテトサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#5" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  うるおいとうふサラダ
                </Button>
              </Link>
            </div>
            <div className=" grid  grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/cook/salad#3" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ゆきかきシーザーサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#4" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  くいしんぼうポテトサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#6" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ばかぢからワイルドサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#7" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  マメハムサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#8" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  あんみんトマトサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#9" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  モーモーカプレーゼ
                </Button>
              </Link>
              <Link href="/db/cook/salad#10" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ムラっけチョコミートサラダ
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/cook/salad#5" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  うるおいとうふサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#6" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ばかぢからワイルドサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#11" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  オーバーヒートサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#12" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  とくせんリンゴサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#13" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  めんえきねぎサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#14" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  メロメロりんごのチーズサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#15" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ニンジャサラダ
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/cook/salad#7" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  マメハムサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#8" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  あんみんトマトサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#16" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ねっぷうとうふサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#17" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ワカクササラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#18" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  めいそうスイートサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#19" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  みだれづきコーンサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#20" className=" hidden md:block">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  クロスチョップドサラダ
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/cook/salad#9" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  モーモーカプレーゼ
                </Button>
              </Link>
              <Link href="/db/cook/salad#10" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ムラっけチョコミートサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#21" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  まけんきコーヒーサラダ
                </Button>
              </Link>
            </div>

            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/cook/salad#11">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  オーバーヒートサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#12">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  とくせんリンゴサラダ
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/cook/salad#13">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  めんえきねぎサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#14">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  メロメロりんごのチーズサラダ
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/cook/salad#15">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ニンジャサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#16">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ねっぷうとうふサラダ
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/cook/salad#17">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ワカクササラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#18">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  めいそうスイートサラダ
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/cook/salad#19">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  みだれづきコーンサラダ
                </Button>
              </Link>
              <Link href="/db/cook/salad#20">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  クロスチョップドサラダ
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/cook/salad#21">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  まけんきコーヒーサラダ
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/*デザート・ドリンク*/}
        <div className=" space-y-1">
          <div className=" py-3 pl-4 bg-gray-700 text-white text-xs">
            デザート・ドリンク
          </div>
          <div>
            <div className=" grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/cook/desserts#1">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  じゅくせいスイートポテト
                </Button>
              </Link>
              <Link href="/db/cook/desserts#2">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ふくつのジンジャークッキー
                </Button>
              </Link>
              <Link href="/db/cook/desserts#3" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  とくせんリンゴジュース
                </Button>
              </Link>
              <Link href="/db/cook/desserts#4" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  クラフトサイコソーダ
                </Button>
              </Link>
              <Link href="/db/cook/desserts#5" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ひのこのジンジャーティー
                </Button>
              </Link>
            </div>
            <div className=" grid  grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/cook/desserts#3" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  とくせんリンゴジュース
                </Button>
              </Link>
              <Link href="/db/cook/desserts#4" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  クラフトサイコソーダ
                </Button>
              </Link>
              <Link href="/db/cook/desserts#6" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  プリンのプリンアラモード
                </Button>
              </Link>
              <Link href="/db/cook/desserts#7" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  あくまのキッスフルーツオレ
                </Button>
              </Link>
              <Link href="/db/cook/desserts#8" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ねがいごとアップルパイ
                </Button>
              </Link>
              <Link href="/db/cook/desserts#9" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ネロリのデトックスティー
                </Button>
              </Link>
              <Link href="/db/cook/desserts#10" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  あまいかおりチョコケーキ
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/cook/desserts#5" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ひのこのジンジャーティー
                </Button>
              </Link>
              <Link href="/db/cook/desserts#6" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  プリンのプリンアラモード
                </Button>
              </Link>
              <Link href="/db/cook/desserts#11" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  モーモーホットミルク
                </Button>
              </Link>
              <Link href="/db/cook/desserts#12" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  かるわざソイケーキ
                </Button>
              </Link>
              <Link href="/db/cook/desserts#13" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  はりきりプロテインスムージ
                </Button>
              </Link>
              <Link href="/db/cook/desserts#14" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  マイぺースやさいジュース
                </Button>
              </Link>
              <Link href="/db/cook/desserts#15" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  おおきいマラサダ
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/cook/desserts#7" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  あくまのキッスフルーツオレ
                </Button>
              </Link>
              <Link href="/db/cook/desserts#8" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ねがいごとアップルパイ
                </Button>
              </Link>
              <Link href="/db/cook/desserts#16" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ちからもちソイドーナツ
                </Button>
              </Link>
              <Link href="/db/cook/desserts#17" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  だいばくはつポップコーン
                </Button>
              </Link>
              <Link href="/db/cook/desserts#18" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  おちゃかいコーンスコーン
                </Button>
              </Link>
              <Link href="/db/cook/desserts#19" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  はなびらのまいチョコタルト
                </Button>
              </Link>
              <Link href="/db/cook/desserts#20" className=" hidden md:block">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  フラワーギフトマカロン
                </Button>
              </Link>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/cook/desserts#9" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  ネロリのデトックスティー
                </Button>
              </Link>
              <Link href="/db/cook/desserts#10" className=" md:hidden ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  あまいかおりチョコケーキ
                </Button>
              </Link>
              <Link href="/db/cook/desserts#21" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  はやおきコーヒーゼリー
                </Button>
              </Link>
              <Link href="/db/cook/desserts#22" className=" hidden md:block ">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  スパークスパイスコーラ
                </Button>
              </Link>
            </div>

            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/cook/desserts#11">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  モーモーホットミルク
                </Button>
              </Link>
              <Link href="/db/cook/desserts#12">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  かるわざソイケーキ
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/cook/desserts#13">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  はりきりプロテインスムージ
                </Button>
              </Link>
              <Link href="/db/cook/desserts#14">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  マイぺースやさいジュース
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/cook/desserts#15">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  おおきいマラサダ
                </Button>
              </Link>
              <Link href="/db/cook/desserts#16">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500s">
                  ちからもちソイドーナツ
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/cook/desserts#17">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  だいばくはつポップコーン
                </Button>
              </Link>
              <Link href="/db/cook/desserts#18">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  おちゃかいコーンスコーン
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-600 text-white">
              <Link href="/db/cook/desserts#19">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  はなびらのまいチョコタルト
                </Button>
              </Link>
              <Link href="/db/cook/desserts#20">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  フラワーギフトマカロン
                </Button>
              </Link>
            </div>
            <div className=" md:hidden grid grid-cols-2 md:grid-cols-5 bg-gray-500 text-white">
              <Link href="/db/cook/desserts#21">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  はやおきコーヒーゼリー
                </Button>
              </Link>
              <Link href="/db/cook/desserts#22">
                <Button className=" text-2xs md:text-xs underline decoration-solid hover:text-orange-500">
                  スパークスパイスコーラ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default cook00;
