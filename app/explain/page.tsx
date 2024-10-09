import React from "react";
const otesupi = () => {
  return (
    <main className=" pt-20">
      <ul className="pb-2">
        <div className=" h-36 py-2">
          <div className="bg-ピカチュウ.1-bg min-h-full bg-center bg-contain bg-no-repeat object-cover"></div>
        </div>
        <li className=" flex justify-center">
          <div className="mx-4 bg-gray-200">
            このピカチュウをチェックしてみよう!
          </div>
        </li>
        <div className=" space-y-2 my-2 grid sm:grid-cols-2 gap-4">
          <div>
            <li className=" mx-4 bg-blue-200 flex justify-center sm:mt-2">
              ①｢ポケモン｣｢性格｣｢レベル｣を入力
            </li>
            <div className=" flex justify-around">
              <div className=" h-40 w-40">
                <div className=" bg-input-bg min-h-full bg-center bg-contain bg-no-repeat object-cover"></div>
              </div>
              <div className=" h-40 w-40">
                <div className=" bg-ピカチュウ.2-bg min-h-full bg-center bg-contain bg-no-repeat object-cover"></div>
              </div>
            </div>
          </div>
          <div>
            <li className=" mx-4 bg-blue-200 ">
              <div className=" flex flex-col custom-sm:flex-row custom-sm:justify-center 2xs:flex-row 2xs:justify-center sm:flex-col">
                <div className=" flex justify-center">
                  ②｢サブスキル｣｢おてつだいボーナス｣
                </div>
                <div className=" flex justify-center">を選択</div>
              </div>
            </li>
            <div className=" flex justify-around">
              <div className=" h-36 w-36">
                <div className=" bg-select-bg min-h-full bg-center bg-contain bg-no-repeat object-cover"></div>
              </div>
              <div className=" h-36 w-36">
                <div className=" bg-ピカチュウ.3-bg min-h-full bg-center bg-contain bg-no-repeat object-cover"></div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <li className=" mx-4 bg-blue-200 flex justify-center">
              ③ Checkボタンをクリック!
            </li>
            <div className=" h-32">
              <div className=" mt-6 bg-button-bg min-h-full bg-center bg-contain bg-no-repeat object-cover"></div>
            </div>
          </div>
          <div>
            <li className=" mx-4 bg-blue-200 flex justify-center">
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
        </div>
        <li className=" flex justify-center sm:justify-start">
          <div className=" mx-4 bg-red-200 px-24 xs:px-28 sm:px-36 md:px-48 lg:px-60">
            ＊注意事項＊
          </div>
        </li>
        <li className=" mx-4">
          <div className="flex flex-col custom-md:flex-row custom-md:justify-center sm:justify-start">
            表示おてつだい時間 →
            <div className=" flex justify-end">
              <div className="text-green-600">｢おてつだいボーナス｣</div>は
              <div className=" text-green-600">｢０｣</div>を選択
            </div>
          </div>
          <div className="flex flex-col custom-md-2:flex-row custom-md-2:justify-center sm:justify-start">
            表示おてつだい時間 →
            <div className=" flex justify-end">
              <div className="text-green-600">｢げんき補正｣</div>は選択❌
            </div>
          </div>
          <div className="flex flex-col custom-md-2:flex-row custom-md-2:justify-center sm:justify-start">
            表示おてつだい時間 →
            <div className=" flex justify-end">
              <div className="text-green-600">｢げんき補正｣</div>は選択⭕️
            </div>
          </div>
          <div className=" flex flex-col ">
            <div className=" flex custom-md:justify-center sm:justify-start ">
              間違って｢げんき補正｣を選択した場合は
            </div>
            <div className=" flex flex-col custom-md-3:flex-row custom-md:justify-center sm:justify-start ">
              <div className=" flex flex-row justify-center ">
                <div className="text-green-600 flex">｢20未満｣</div>
                を選択すると
              </div>
              <div className=" flex justify-center">
                表示おてつだい時間が表示されます
              </div>
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default otesupi;
