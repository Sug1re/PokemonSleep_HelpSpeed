"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Skill from "./components/Skill";
import Bonuss from "./components/Bonuss";
// import Energy from "./components/Energy";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

//ポケモンの固有のおてつだい時間を示す表
const pokemonTimeMap: { [pokemonName: string]: number } = {
  フシギダネ: 4400,
  フシギソウ: 3300,
  フシギバナ: 2800,
  ヒトカゲ: 3500,
  リザード: 3000,
  リザードン: 2400,
  ゼニガメ: 4500,
  カメール: 3400,
  カメックス: 2800,
  キャタピー: 4400,
  トランセル: 4200,
  バタフリー: 2600,
  コラッタ: 4900,
  ラッタ: 3200,
  アーボ: 5000,
  アーボック: 3700,
  ピカチュウ: 2700,
  ハロウィンピカチュウ: 2600,
  ホリデーピカチュウ: 2600,
  ライチュウ: 2200,
  ピッピ: 4000,
  ピクシー: 2800,
  ロコン: 4700,
  キュウコン: 2600,
  プリン: 3900,
  プクリン: 2900,
  ディグダ: 4300,
  ダグトリオ: 2800,
  ニャース: 4400,
  ペルシアン: 2800,
  コダック: 5400,
  ゴルダック: 3400,
  マンキー: 4200,
  オコリザル: 2800,
  ガーディ: 4300,
  ウインディ: 2500,
  マダツボミ: 5200,
  ウツドン: 3800,
  ウツボット: 2800,
  イシツブテ: 5700,
  ゴローン: 4000,
  ゴローニャ: 3100,
  ヤドン: 5700,
  ヤドラン: 3800,
  コイル: 5800,
  レアコイル: 4000,
  ドードー: 3800,
  ドードーリオ: 2400,
  ゴース: 3800,
  ゴースト: 3000,
  ゲンガー: 2200,
  イワーク: 3100,
  カラカラ: 4800,
  ガラガラ: 3500,
  ガルーラ: 2800,
  バリヤード: 2800,
  カイロス: 2400,
  メタモン: 3500,
  イーブイ: 3700,
  シャワーズ: 3100,
  サンダース: 2200,
  ブースター: 2700,
  ミニリュウ: 5000,
  ハクリュウ: 3800,
  カイリュウ: 2600,
  チコリータ: 4400,
  ベイリーフ: 3300,
  メガニウム: 2800,
  ヒノアラシ: 3500,
  マグマラシ: 3000,
  バクフーン: 2400,
  ワニノコ: 4500,
  アリゲイツ: 3400,
  オオダイル: 2800,
  ピチュー: 4300,
  ピィ: 5600,
  ププリン: 5200,
  トゲピー: 4800,
  トゲチック: 3800,
  メリープ: 4600,
  モココ: 3300,
  デンリュウ: 2500,
  ウソッキー: 4000,
  エーフィー: 2400,
  ブラッキー: 3500,
  ヤドキング: 3400,
  ソーナンス: 3500,
  ハガネール: 3000,
  ヘラクロス: 2500,
  デリバード: 2500,
  デルビル: 4900,
  ヘルガー: 3300,
  ライコウ: 2100,
  // "エンテイ":time[11][1],
  // "スイクン":time[11][1],
  ヨーギラス: 4800,
  サナギラス: 3600,
  バンギラス: 2700,
  ラルトス: 4800,
  キルリア: 3500,
  サーナイト: 2400,
  ナマケロ: 4900,
  ヤルキモノ: 3500,
  ケッキング: 3800,
  ヤミラミ: 3600,
  ゴクリン: 5900,
  マルノーム: 3500,
  チルット: 4200,
  チルタリス: 3700,
  カゲボウズ: 3900,
  ジュペッタ: 2600,
  アブソル: 3100,
  ソーナノ: 5800,
  タマザラシ: 5600,
  トドクラー: 4000,
  トドゼルガ: 3000,
  ウソハチ: 6300,
  マネネ: 4300,
  リオル: 4200,
  ルカリオ: 2600,
  グレッグル: 5600,
  ドクロッグ: 3400,
  ユキカブリ: 5600,
  ユキノオー: 3000,
  ジバコイル: 3100,
  トゲキッス: 2600,
  リーフィア: 3000,
  グレイシア: 3200,
  エルレイド: 2400,
  ニンフィア: 2600,
  デデンネ: 2500,
  ヌイコグマ: 4100,
  キテルグマ: 2800,
  キュワワー: 2500,
  // 他のポケモン名と対応する時間を追加
};

//ポケモンの性格の倍率を示す表
const pokemonPersonalityMap: { [pokemonPersonality: string]: number } = {
  まじめ: 1.0,
  すなお: 1.0,
  てれや: 1.0,
  がんばりや: 1.0,
  きまぐれ: 1.0,
  ようき: 1.0,
  むじゃき: 1.0,
  せっかち: 1.0,
  のんき: 1.0,
  おっとり: 1.0,
  うっかりや: 1.0,
  なまいき: 1.0,
  しんちょう: 1.0,
  おとなしい: 1.0,
  のうてんき: 1.0,
  れいせい: 1.0,
  わんぱく: 1.0,
  おくびょう: 1.1,
  ひかえめ: 1.1,
  ずぶとい: 1.1,
  おだやか: 1.1,
  ゆうかん: 0.9,
  やんちゃ: 0.9,
  いじっぱり: 0.9,
  さみしがり: 0.9,
};

//使用する関数一覧
export default function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonPersonality, setPokemonPersonality] = useState("");
  const [pokemonLevel, setPokemonLevel] = useState("");
  const [pokemonSkill, setPokemonSkill] = useState("");
  const [pokemonBonuss, setPokemonBonuss] = useState("");
  const [pokemonEnergy, setPokemonEnergy] = useState("");
  const [helperTime, setHelperTime] = useState("");

  // TotalSkill の計算
const calculateTotalSkill = () => {
  const skill = parseFloat(pokemonSkill);
  const bonuss = parseFloat(pokemonBonuss);
  const totalSkill = 1 - skill - bonuss;
  return totalSkill < 0.65 ? 0.65 : totalSkill;
};

const TotalSkill = calculateTotalSkill();


  //ポケモンの名前の入力フィールドの値が変更されたとき即座に対応する役割
  const handlePokemonNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPokemonName(event.target.value);
  };

  //ポケモンの性格の入力フィールドの値が変更されたとき即座に対応する役割
  const handlePokemonPesonalityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPokemonPersonality(event.target.value);
  };

  //ポケモンのレベルの入力フィールドの値が変更されたとき即座に対応する役割
  const handlePokemonlevelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const levelText = event.target.value;
    // 文字列から整数に変換
    const level = parseInt(levelText);
    // NaN（非数値）チェック
    if (!isNaN(level)) {
      // レベルが1未満の場合、1に制限する
      if (level < 1) {
        setPokemonLevel("1");
      } else {
        // レベルが100を超える場合、100に制限する
        if (level > 100) {
          setPokemonLevel("100");
        } else {
          setPokemonLevel(level.toString());
        }
      }
    } else {
      // 数値に変換できない場合、空文字列にする
      setPokemonLevel("");
    }
  };

  //checkボタンをクリック時のフォームのリセット防止
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      pokemonName.trim() === "" ||
      pokemonPersonality.trim() === "" ||
      pokemonLevel.trim() === "" ||
      pokemonSkill.trim() === "" ||
      pokemonBonuss.trim() === ""
      //  ||
      // pokemonEnergy.trim() === ""
    ) {
      return;
    }
  };

  //cancelボタンをクリック時のフォームを初期化
  const handleCancelClick = () => {
    // フォームの状態を初期化
    setHelperTime("");
    setPokemonName("");
    setPokemonPersonality("");
    setPokemonLevel("");
    setPokemonSkill("");
    setPokemonBonuss("");
    // setPokemonEnergy("");

    // その他の状態を初期化する場合はここに追加
  };

  // checkボタンをクリックしたときの処理
  const handleCheckButtonClick = () => {
    if (
      pokemonName.trim() === "" ||
      pokemonPersonality.trim() === "" ||
      pokemonLevel.trim() === "" ||
      pokemonSkill.trim() === "" ||
      pokemonBonuss.trim() === ""
      //  ||
      // pokemonEnergy.trim() === ""
    ) {
      return;
    }

    // ポケモンの名前と性格を数値に変換
    const pokemonTimeValue = pokemonTimeMap[pokemonName];
    const pokemonPersonalityValue = pokemonPersonalityMap[pokemonPersonality];

    console.log("ポケモン:",pokemonName);
    console.log("基礎時間:",pokemonTimeValue);
    console.log("性格:",pokemonPersonality);
    console.log("性格倍率:",pokemonPersonalityValue);
    console.log("レベル:",pokemonLevel);
    console.log("サブスキル倍率:",pokemonSkill);
    console.log("おてつだいボーナス倍率:",pokemonBonuss);
    console.log("トータルスキル倍率:",TotalSkill);
    // console.log("げんき倍率:",pokemonEnergy);

    // すべてのフォームが入力済みの場合のみ計算を行う
    if (
      pokemonTimeValue !== undefined &&
      pokemonPersonalityValue !== undefined &&
      pokemonLevel !== undefined &&
      pokemonSkill !== undefined &&
      pokemonBonuss !== undefined
      //  &&
      // pokemonEnergy !== undefined
    ) {
      // おてつだい時間を計算し、状態に設定する
      //掛けるたびに切り捨てする式
      const calculatedHelperTime = Math.floor(
        Math.floor(
          Math.floor(pokemonTimeValue * pokemonPersonalityValue) *
            (1.0 - Math.floor(Number(pokemonLevel) - 1) * 0.002)
        ) * TotalSkill
      );

      //最後に切り捨てする式
      // const calculatedHelperTime = Math.floor(
      //    pokemonTimeValue * pokemonPersonalityValue *
      //       (1.0 - (Number(pokemonLevel) - 1) * 0.002)
      //    * TotalSkill
      // );
      //ガルーラ誤差1秒
      //メリープ誤差1秒

      console.log("おてつだい時間:",calculatedHelperTime);


      if (calculatedHelperTime >= 3600) {
        const hours = Math.floor(calculatedHelperTime / 3600);
        const minutes = Math.floor((calculatedHelperTime % 3600) / 60);
        const seconds = Math.floor(calculatedHelperTime % 60);

        setHelperTime(`${hours}時間 ${minutes}分 ${seconds}秒`);
      } else {
        const minutes = Math.floor(calculatedHelperTime / 60);
        const seconds = Math.floor(calculatedHelperTime % 60);

        setHelperTime(`${minutes}分 ${seconds}秒`);
      }
    } else {
      // 存在しない場合はデフォルト値を設定
      setHelperTime("");
    }
  };

  return (
    <main className="min-h-screen items-center justify-between bg-blue-950">
      <form onSubmit={handleSubmit}>
        <div className="pt-4">
          <div className="grid lg:grid-cols-3 pb-4  pt-2 mx-24 gap-4 shadow-md rounded bg-sky-950">
            <div className="space-y-1.5 mx-10">
              <Label className="text-2xl text-white" htmlFor="pokemonName">
                ポケモン
              </Label>
              <Input
                id="pokemonName"
                type="text"
                placeholder="ポケモンを入力"
                className="bg-gray-400 text-white border-blue-700"
                value={pokemonName}
                onChange={handlePokemonNameChange}
              />
            </div>
            <div className="space-y-1.5 mx-10">
              <Label
                className="text-2xl text-white"
                htmlFor="pokemonPesonality"
              >
                性格
              </Label>
              <Input
                id="pokemonPersonality"
                type="text"
                placeholder="性格を入力"
                className="bg-gray-400 text-white border-blue-700"
                value={pokemonPersonality}
                onChange={handlePokemonPesonalityChange}
              />
            </div>
            <div className="space-y-1.5 mx-10">
              <Label className="text-2xl text-white" htmlFor="pokemonLevel">
                レベル
              </Label>
              <Input
                id="pokemonLevel"
                type="text"
                placeholder="レベルを入力"
                className="bg-gray-400 text-white border-blue-700"
                value={pokemonLevel}
                onChange={handlePokemonlevelChange}
              />
            </div>
            <Skill
              pokemonSkill={pokemonSkill}
              setPokemonSkill={setPokemonSkill}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 pb-4 my-7 pt-2 mx-24 gap-4 shadow-md rounded bg-sky-950">
          <Bonuss
            pokemonBonuss={pokemonBonuss}
            setPokemonBonuss={setPokemonBonuss}
          />
          {/* <Energy
            pokemonEnergy={pokemonEnergy}
            setPokemonEnergy={setPokemonEnergy}
          /> */}
        </div>
        <CardFooter className="flex flex-row justify-center items-center pt-10 pb-5 space-x-96">
          <div className=" pr-48">
            <Button
              className="bg-sky-900 text-white rounded transform hover:bg-sky-950 hover:scale-95"
              onClick={handleCancelClick} // クリックされたときに呼び出す関数を指定
            >
              Cancel
            </Button>
          </div>
          <div className=" pl-48">
            <Button
              className=" bg-gray-400 text-white rounded transform hover:bg-gray-500 hover:scale-95"
              onClick={handleCheckButtonClick} // "Check"ボタンがクリックされたときに実行される関数を指定
            >
              Check
            </Button>
          </div>
        </CardFooter>
        <div className=" mx-96  pt-2 pb-4  flex justify-center items-center flex-col space-y-1.5 shadow-md rounded bg-sky-950">
          <Label htmlFor="helperTime" className="text-2xl text-white">
            おてつだい時間
          </Label>
          <Input
            id="helperTime"
            type="text"
            readOnly
            value={helperTime}
            className="bg-gray-400 text-white w-1/3 border-blue-700"
          />
        </div>
      </form>
    </main>
  );
}
