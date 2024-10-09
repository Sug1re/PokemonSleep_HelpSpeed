"use client";

import React from "react";
// import Link from "next/link";
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Header = () => {
  return (
    <header className=" fixed top-0 w-full z-50 bg-gray-900 p-2 max-w-full">
      <nav className="flex justify-between items-center">
        <div>
          <h4 className="text-lg font-bold text-blue-500">おてスピ計</h4>
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
            <SheetContent className="bg-gray-900 text-white border-white border-l-2 border-b-2 bg-opacity-70">
              <SheetTitle className="text-blue-500">おてスピ計</SheetTitle>
              <SheetDescription className=" max-h-full overflow-y-auto">
                <ul className="p-4 my-10 space-y-16">
                  <li className="hover:text-gray-400 duration-300 w-full flex flex-col">
                    <a href="/" className="text-base">
                      トップ
                    </a>
                  </li>
                  <li className="w-full flex flex-col">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-base hover:text-blue-300 duration-300">
                          本サイトについて
                        </AccordionTrigger>
                        <AccordionContent className="mt-4 flex flex-col space-y-8">
                          <a
                            href="/explain"
                            className="text-sm hover:text-blue-300 duration-300"
                          >
                            おてスピ計の使い方
                          </a>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                  <li className="w-full flex flex-col">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-base hover:text-blue-300 duration-300">
                          お知らせ
                        </AccordionTrigger>
                        <AccordionContent className="mt-4 flex flex-col space-y-8">
                          <a
                            href="/information"
                            className="text-sm hover:text-red-300 duration-300"
                          >
                            アップデートのお知らせ
                          </a>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                  <li className="w-full flex flex-col">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-base hover:text-blue-300 duration-300">
                          料理レシピ
                        </AccordionTrigger>
                        <AccordionContent className="mt-4 flex flex-col space-y-8">
                          <a
                            href="#"
                            className="text-sm hover:text-red-300 duration-300"
                          >
                            カレー・シチュー
                          </a>
                          <a
                            href="#"
                            className="text-sm hover:text-green-300 duration-300"
                          >
                            サラダ
                          </a>
                          <a
                            href="#"
                            className="text-sm hover:text-blue-300 duration-300"
                          >
                            デザート・ドリンク
                          </a>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                  <li className="hover:text-yellow-300 duration-300 w-full flex flex-col">
                    <a href="#" className="text-base">
                      ポケモン図鑑
                    </a>
                  </li>
                  <li className="hover:text-green-300 duration-300 w-full flex flex-col">
                    {/* <a href="/inquiry" className="text-base"> */}
                    <a href="/inquiry" className="text-base">
                      お問い合わせ
                    </a>
                  </li>
                </ul>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
