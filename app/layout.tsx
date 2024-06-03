import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import { RocknRoll_One } from "next/font/google";
const RocknRollOne = RocknRoll_One({ weight: "400", subsets: ["latin"] });
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "おてスピ計算サイト",
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
        <GoogleAnalytics gaId="G-TL1C6DW00G" />
        <Header/>
        {children}
      </body>
    </html>
  );
}
