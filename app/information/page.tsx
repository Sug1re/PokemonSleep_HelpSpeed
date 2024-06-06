import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const information = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className=" p-4 ">
        <Card className=" rounded">
          <CardHeader className="">
            <div className=" flex justify-around">
              <div className=" flex flex-col">
                <CardTitle>ポケモンの追加</CardTitle>
                <div className=" container text-sm text-muted-foreground">
                  <div>2024/05/20 : エンテイを追加</div>
                  <div className=" text-blue-400 hover:text-red-400 duration-300">
                    エンテイのステータスURL
                  </div>
                </div>
              </div>
              <div className=" bg-244-bg min-w-16 min-h-16 bg-cover bg-center object-cover"></div>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div className="p-4">
        <h1>おてつだい時間に関する情報の出典</h1>
        <a
          href="https://wikiwiki.jp/poke_sleep/%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E3%81%AE%E4%B8%80%E8%A6%A7"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-blue-400 hover:text-red-400 duration-300"
        >
          ポケモンスリープ攻略・検証Wiki様
        </a>
      </div>
    </main>
  );
};

export default information;
