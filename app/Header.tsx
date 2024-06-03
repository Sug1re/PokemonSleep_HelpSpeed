"use client";

import React, { useState, Dispatch, SetStateAction } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Header = () => {
  return (
    <header className="bg-gray-900 p-2 max-w-full">
      <nav className="flex justify-between items-center">
        <div>
          <h4 className="text-lg font-bold text-blue-500">おてスピ計算</h4>
          <div className="text-xs text-white">
            Let’s check your Pokemon’s Speed.
          </div>
        </div>
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="text-white flex flex-col -space-y-4 hover:text-blue-300 duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-gray-900 text-white border-gray-900 bg-opacity-70">
              <SheetTitle className="text-blue-500">おてスピ計算</SheetTitle>
              <SheetDescription className=" flex flex-col items-center min-h-screen ">
                <ul className=" mt-10 space-y-20">
                  <li className="hover:text-blue-300 duration-300">
                    <a href="#">トップ</a>
                  </li>
                  <li className="hover:text-blue-300 duration-300">
                    <a href="#">本サイトについて</a>
                  </li>
                  <li className="hover:text-blue-300 duration-300">
                    <a href="#">ブログ</a>
                  </li>
                  <li className="hover:text-blue-300 duration-300">
                    <a href="#">料理レシピ</a>
                  </li>
                  <li className="hover:text-blue-300 duration-300">
                    <a href="#">ポケモン一覧</a>
                  </li>
                  <li className="hover:text-blue-300 duration-300">
                    <a href="#">お問い合わせ</a>
                  </li>
                </ul>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
        {/* <div className="flex justify-evuenly">
          <div className="flex items-center justify-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className="text-white rounded transform hover:text-green-300 transition-all duration-300"
                  variant="outline"
                >
                  Infomation
                </Button>
              </SheetTrigger>
              <SheetContent className=" bg-gray-200">
                <SheetHeader>
                  <SheetTitle >
                    アップデートのお知らせ
                  </SheetTitle>
                  <SheetDescription>
                  <Card className=" rounded shadow bg-sky-200 border-slate-400">
                    <CardHeader>
                      <CardTitle className="text-xl text-purple-700">ポケモンの追加</CardTitle>
                      <CardDescription className="text-xs">2024/05/20 :「エンテイ」を追加</CardDescription>
                    </CardHeader>
                  </Card>
                    <div className="py-4 space-y-2">
                      <h1>おてつだい時間に関する情報の出典</h1>
                      <a
                        href="https://wikiwiki.jp/poke_sleep/%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E3%81%AE%E4%B8%80%E8%A6%A7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-blue-400 transform hover:text-red-400"
                      >
                        ポケモンスリープ攻略・検証Wiki様
                      </a>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center justify-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className="text-white rounded transform hover:text-green-300 transition-all duration-300 "
                  variant="outline"
                >
                  使い方
                </Button>
              </SheetTrigger>
              <SheetContent className=" bg-gray-200">
                <SheetHeader>
                  <SheetTitle>
                    当サイトの使用手順
                  </SheetTitle>
                  <SheetDescription>
                    <div className="space-y-4 max-h-[650px] overflow-y-auto">
                      <div className=" space-y-2">
                        <div className=" bg-inputbox-bg min-h-[350px] bg-cover bg-center object-cover "></div>
                        <div>
                          <p className=" bg-red-200 mr-16">
                            ①「ポケモン」「性格」「レベル」を入力
                          </p>
                        </div>
                      </div>
                      <div className=" space-y-2">
                        <div className=" bg-selectbox-bg min-h-[250px] bg-cover bg-center object-cover"></div>
                        <div>
                          <p className=" bg-red-200 mr-6">
                            ②「サブスキル」「おてつだいボーナス」を選択
                          </p>
                        </div>
                      </div>
                      <div className=" space-y-2">
                        <div className=" bg-energybox-bg min-h-[250px] bg-cover bg-center object-cover"></div>
                        <div>
                          <p className=" bg-red-200">
                            ③ ①,②の項目が終わったらCheckボタンをクリック!
                          </p>
                          <p className=" bg-red-200">
                            * 表示おてつだい時間を知りたい場合は「げんき補正」は無視 内部のおてつだい時間を知りたい場合は選択 もし間違って選択してしまった場合は「20未満」を選択すると表示おてつだい時間が表示されます *
                          </p>
                        </div>
                      </div>
                      <div className=" space-y-2">
                        <div className=" bg-helpertime-bg min-h-[150px] bg-cover bg-center object-cover"></div>
                        <div>
                          <p className=" bg-red-200 mr-28">
                            ④ おてつだい時間が表示される!!
                          </p>
                        </div>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
