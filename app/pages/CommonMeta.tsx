import { getpokemonData } from "@/app/api";
import { getpokemonData } from "@/app/api";
import { getpokemonData } from "@/app/api";
import { getpokemonData } from "@/app/api";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import Link from "next/link";
import Link from "next/link";
import Link from "next/link";
import Link from "next/link";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import { getpokemonData } from "../api";

type Props = {
  title: string;
  description: string;
  url: string;
  type: string;
  imageUrl: string;
};

const CommonMeta = (props: Props) => {
  const { title, description, url, type, imageUrl } = props;
  return (
    <Head>
      <title>{"おてスピ計算サイト"}</title>
      <meta
        name="description"
        content={
          "ポケモンスリープのおてつだい時間を計算するサイトです。今後実装されるであろうLv100まで対応しているのでぜひ一足先にLv100のおてつだい時間をチェックしてみてください。"
        }
      />
      <meta
        name="google-adsense-account"
        content="ca-pub-5584222931737430"
      ></meta>
      <meta
        name="keywords"
        content="ポケモンスリープ,ポケスリ,おてスピ,おてつだいスピード,おてつだい時間,おてつだい時間計算"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content={"おてスピ計算サイト"} />
      <meta
        property="og:description"
        content={
          "ポケモンスリープのおてつだい時間を計算するサイトです。lv100まで計算可能なので将来のおてスピをその目で確かめてみませんか？"
        }
      />
      <meta property="og:url" content={"https://otesupi.com/"} />
      <meta property="og:type" content={"websites"} />
      <meta property="og:image" content={"https://otesupi.com/favicon.png"} />
    </Head>
  );
};
export default CommonMeta;
export const pokemon00 = async () => {
  let pokemonData;

  try {
    pokemonData = await getpokemonData(); // データ取得
  } catch (error) {
    console.error("データ取得中にエラーが発生しました:", error);
    pokemonData = { name: "エラーが発生しました" }; // エラーハンドリング
  }
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
      <div className=" bg-white">
        <h1>ポケモンの名前：{pokemonData.name}</h1>
      </div>
    </main>
  );
};
