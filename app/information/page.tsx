"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import React from "react";

const Information = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const data = [
    { date: "2024/05/20", content: "「エンテイ」" },
    { date: "2024/06/26", content: "「ウッウ」" },
    {
      date: "2024/07/18",
      content: "「ニャオハ」「ニャローテ」「マスカーニャ」",
    },
    {
      date: "2024/07/18",
      content: "「ホゲータ」「アチゲータ」「ラウドボーン」",
    },
    {
      date: "2024/07/18",
      content: "「クワッス」「ウェルカモ」「ウェーニバル」",
    },
    { date: "2024/08/21", content: "「ウパー」「ヌオー」" },
    { date: "2024/09/03", content: "「スイクン」" },
    {
      date: "2024/10/09",
      content: "「アゴジムシ」「デンヂムシ」「クワガノン」",
    },
    {
      date: "2024/10/09",
      content: "「コリンク」「ルクシオ」「レントラー」",
    },
    {
      date: "2024/10/09",
      content: "「ココドラ」「コドラ」「ボスゴドラ」",
    },
    {
      date: "2024/10/18",
      content: "「フワンテ」「フワライド」",
    },
  ];

  // 日付が新しい順にソート
  data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // 下から4番目のインデックス
  const accordionIndex = data.length - 4;

  // 下から4番目以降のデータのみ表示
  const displayData = data.slice(accordionIndex);

  // 下から4番目より上のデータ（順序を反転）
  const detailsData = data.slice(0, accordionIndex).reverse();

  return (
    <main className="min-h-screen pt-20">
      <div className="p-4">
        <div className=" pb-4 pl-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="rounded bg-gray-200 hover:bg-gray-300 border-gray-900 scale-125 "
              >
                ポケモン追加情報
              </Button>
            </DialogTrigger>
            <DialogContent className="border-4 border-gray-400 sm:max-w-[545px] sm:max-h-[530px] bg-blue-200 overflow-auto">
              <DialogHeader>
                <DialogTitle>ポケモン追加情報</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col-reverse space-y-reverse space-y-3 text-sm">
                {displayData.map((item, index) => {
                  if (index === 0) {
                    return (
                      <Accordion key={index} type="single">
                        <AccordionItem value={`item-${index}`}>
                          <AccordionTrigger
                            onClick={() =>
                              setOpenIndex(openIndex === index ? null : index)
                            }
                          >
                            {item.date} : {item.content}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div>
                              {detailsData.map((detail, detailIndex) => (
                                <div key={detailIndex}>
                                  {detail.date} : {detail.content}
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    );
                  } else {
                    return (
                      <div key={index}>
                        {item.date} : {item.content}
                      </div>
                    );
                  }
                })}
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <h1>おてつだい時間に関する情報の出典</h1>
        <a
          href="https://wikiwiki.jp/poke_sleep/%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E3%81%AE%E4%B8%80%E8%A6%A7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-red-400 duration-300"
        >
          ポケモンスリープ攻略・検証Wiki様
        </a>
      </div>
    </main>
  );
};

export default Information;
