import React from "react";

const otesupi = () => {
  return (
    <main>
          <div>
            <p className=" bg-red-200 ">
              ①「ポケモン」「性格」「レベル」を入力
            </p>
          </div>
          <div>
            <p className=" bg-red-200 ">
              ②「サブスキル」「おてつだいボーナス」を選択
            </p>
          </div>
          <div>
            <p className=" bg-red-200">
              ③ ①,②の項目が終わったらCheckボタンをクリック!
            </p>
            <p className=" bg-red-200">
              * 表示おてつだい時間を知りたい場合は「げんき補正」は無視
              内部のおてつだい時間を知りたい場合は選択
              もし間違って選択してしまった場合は「20未満」を選択すると表示おてつだい時間が表示されます
              *
            </p>
          </div>
          <div>
            <p className=" bg-red-200">④ おてつだい時間が表示される!!</p>
          </div>
    </main>
  );
};

export default otesupi;
