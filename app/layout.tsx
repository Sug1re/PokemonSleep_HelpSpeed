import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/header/Header";
import { RocknRoll_One } from "next/font/google";
const RocknRollOne = RocknRoll_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "おてスピ計算ツール",
  description: "ポケモンスリープのおてつだい時間を計算するサイトです。今後実装されるであろうLv100まで対応しているのでぜひ一足先にLv100のおてつだい時間をチェックしてみてください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={RocknRollOne.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
