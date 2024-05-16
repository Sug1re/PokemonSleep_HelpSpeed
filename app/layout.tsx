import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/header/Header";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon Sleep おてスピチェック PC版",
  description: "ポケモンスリープのおてつだい時間を計算してくれます。＊本サイトはおてつだい時間の計算式が検証中のため誤差が生じる場合があります。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
