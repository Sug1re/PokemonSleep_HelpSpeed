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
          href="/db/food/"
          className="text-white hover:text-orange-400 flex justify-items-center justify-center border-x border-gray-400 hover:bg-gray-700 "
        >
          <Button className=" text-2xs md:text-xs">食材期待値</Button>
        </Link>
      </div>
    </main>
  );
};

export default cook00;
