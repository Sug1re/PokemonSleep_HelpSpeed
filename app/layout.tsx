import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/header/Header";
import { RocknRoll_One } from "next/font/google";
const RocknRollOne = RocknRoll_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon Sleep おてスピチェック",
  description: "ポケモンスリープのおてつだい時間を計算してくれます。＊本サイトはおてつだい時間の計算式が検証中のため誤差が生じる場合があります。",
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
