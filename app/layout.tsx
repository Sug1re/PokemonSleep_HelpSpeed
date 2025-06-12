import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "../app/ClientLayout";
import { rocknRollOne } from "../app/types/fonts";

export const metadata: Metadata = {
  title: "おてスピ計",
  description:
    "ポケモンスリープのおてつだい時間を計算するサイトです。今後実装されるであろうLv100まで対応しているのでぜひ一足先にLv100のおてつだい時間をチェックしてみてください。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={rocknRollOne.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
