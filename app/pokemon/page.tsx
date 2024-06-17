import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  return [
    //ここにポケモン追加
    {
      id: "#001",
      おてつだい時間: 4400,
      ポケモン: "フシギダネ",
      メインスキル: "食材ゲットS",
      睡眠タイプ: "うとうと",
      得意なもの: "食材",
    },
    {
      id: "#244",
      おてつだい時間: 2400,
      ポケモン: "エンテイ",
      メインスキル: "おてつだいブースト(でんき)",
      睡眠タイプ: "すやすや",
      得意なもの: "スキル",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10 pt-20">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
