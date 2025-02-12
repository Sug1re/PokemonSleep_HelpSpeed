import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";

const otesupi00 = () => {
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
          className="text-blue-500 flex justify-items-center justify-center border-l
           border-gray-400 hover:bg-gray-700  "
        >
          <Button className=" text-2xs md:text-xs"> おてスピ計</Button>
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
      <div className=" flex flex-col py-20 px-40 space-y-10 container">
        {/* <Button className=" relative bg-white rounded py-14 text-lg hover:scale-105 hover:bg-white duration-200">
          <Link href="">
            <span className="absolute inset-0 flex items-center justify-center">
              おてスピ計(選択式)
            </span>
          </Link>
        </Button> */}
        <Button
          variant="outline"
          className="rounded bg-white hover:bg-blue-100 border-gray-900 py-12 hover:scale-105 duration-1000"
        >
          <Link href="/OTESUPI/V1" className=" text-lg">
            おてスピ計(入力式)
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default otesupi00;
