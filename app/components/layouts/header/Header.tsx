"use client";

import React from "react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";


const Header = () => {
  return (
    <header className=" bg-gray-900 p-4 mx-auto container flex flex-col items-center max-w-full">
      <div className=" space-y-4 items-center">
        <div className=" flex flex-col">
          <h1 className="text-4xl font-bold text-gray-400 ">
            おてスピチェック
          </h1>
          <div className="text-white flex justify-center">Let’s check your Pokemon’s Speed.</div>
        </div>
        <div className="flex justify-evenly">
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
                  <SheetTitle className="text-2xl font-medium">
                    アップデートのお知らせ
                  </SheetTitle>
                  <SheetDescription>
                  <Card className=" rounded shadow bg-sky-200 border-slate-400">
                    <CardHeader>
                      <CardTitle className=" text-purple-700">ポケモンの追加</CardTitle>
                      <CardDescription>2024/05/20 :「エンテイ」を追加しました</CardDescription>
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
                  <SheetTitle className="text-2xl font-medium">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
