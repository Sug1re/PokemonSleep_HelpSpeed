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
    <main>
      <div className="p-2">
        <Card className="p-4 rounded">
          <CardHeader className=" flex flex-row ">
            <div>
              <CardTitle>ポケモンの追加</CardTitle>
              <CardDescription>
                2024/05/20 : エンテイを追加
                エンテイのステータスURL
              </CardDescription>
            </div>
            <div>エンテイの写真</div>
          </CardHeader>
        </Card>
      </div>
      <div className="p-2">
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
