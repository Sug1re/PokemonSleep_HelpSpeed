import React from "react";
//375pxの時綺麗
const otesupi = () => {
  return (
    <main className=" bg-gray-100">
      <ul className="pb-2">
        <div className=" h-36 py-2">
          <div className="bg-ピカチュウ.1-bg min-h-full bg-center bg-contain bg-no-repeat object-cover"></div>
        </div>
        <li className="px-4">このピカチュウをチェックしてみよう!</li>
        <div className=" space-y-2 my-2">
          <li className=" bg-red-200 ml-4 mr-16">
            ①「ポケモン」「性格」「レベル」を入力
          </li>
          <div className=" flex justify-around">
            <div className=" h-40 w-40">
              <div className=" bg-input-bg min-h-full bg-center bg-contain bg-no-repeat object-cover"></div>
            </div>
            <div className=" h-40 w-40">
              <div className=" bg-ピカチュウ.2-bg min-h-full bg-center bg-contain bg-no-repeat object-cover"></div>
            </div>
          </div>
          <li className=" bg-red-200 ml-4 mr-2">
            ②「サブスキル」「おてつだいボーナス」を選択
          </li>
          <div className=" flex justify-around">
            <div className=" h-36 w-36">
              <div className=" bg-select-bg min-h-full bg-center bg-contain bg-no-repeat object-cover"></div>
            </div>
            <div className=" h-36 w-36">
              <div className=" bg-ピカチュウ.3-bg min-h-full bg-center bg-contain bg-no-repeat object-cover"></div>
            </div>
          </div>
          <li className=" bg-red-200 ml-4 mr-36">③ Checkボタンをクリック!</li>
          <div className=" h-32">
            <div className=" bg-button-bg min-h-full bg-center bg-contain bg-no-repeat object-cover"></div>
          </div>
          <li className=" bg-red-200 ml-4 mr-28">
            ④ おてつだい時間が表示される!!
          </li>
          <div className=" mx-4">
            <div className=" h-24 ">
              <div className=" bg-ピカチュウ.4-bg min-h-full bg-center bg-contain bg-no-repeat object-cover"></div>
            </div>
            <div className=" h-32 ">
              <div className=" bg-results-bg min-h-full bg-center bg-contain bg-no-repeat object-cover"></div>
            </div>
          </div>
        </div>
        <li className="bg-red-200 mx-4">
          <div>表示おてつだい時間 →</div>
          <div className=" flex justify-end">
            「おてつだいボーナス」は「０」を選択
          </div>
          <div>表示おてつだい時間 →「げんき補正」は選択❌</div>
          <div>内部おてつだい時間 →「げんき補正」は選択⭕️</div>
          <div>間違って選択してしまった場合は「20未満」を</div>
          <div>選択すると表示おてつだい時間が表示されます</div>
        </li>
      </ul>
    </main>
  );
};

export default otesupi;
