import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Information = () => {
  return (
    <main className="min-h-screen pt-20 bg-white flex justify-center items-center">
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
              <p>「パルデアウパー」「ドオー」</p>
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
