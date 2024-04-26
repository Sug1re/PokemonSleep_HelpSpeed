import { Button } from "@/components/ui/button";
import {CardFooter} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// function CustomCheckbox(props: { id: string }) {
//   return (
//     <Checkbox
//       {...props}
//       className="rounded text-blue-700 bg-white border border-blue-700"
//       // チェックボックスのアイコンの色を青にする
//       iconClassName="text-blue-700"
//     />
//   );
// }

export default function Home() {
  return (
    <main className="min-h-screen  items-center justify-between  bg-blue-950">
      <form>
        <div className="grid lg:grid-cols-3 pt-4 px-24 gap-4">
          <div className="space-y-1.5">
                    <Label className="text-2xl text-blue-700" htmlFor="ポケモン">ポケモン</Label>
                    <Input
                      id="name"
                      placeholder="Please input the Pokémon."
                      className="bg-gray-400 text-white w-4/5"
                    />
          </div>
          <div className="space-y-1.5">
                    <Label className="text-2xl text-blue-700" htmlFor="性格">性格</Label>
                    <Input
                      id="name"
                      placeholder="Please input the Pokémon’s personality."
                      className="bg-gray-400 text-white w-4/5"
                    />
          </div>
          <div className="space-y-1.5">
                    <Label className="text-2xl text-blue-700" htmlFor="レベル">レベル</Label>
                    <Input
                      id="name"
                      placeholder="Please tell me the level of the Pokémon."
                      className="bg-gray-400 text-white w-4/5"
                    />
          </div>
          <div className="space-y-1.5">
                <Label className="text-2xl text-blue-700" htmlFor="framework">サブスキル</Label>
                  <Select>
                    <SelectTrigger id="framework" className="bg-gray-400 text-white w-4/5">
                      <SelectValue placeholder="サブスキル" />
                    </SelectTrigger>
                      <SelectContent position="popper" className="bg-gray-400 text-white">
                      <SelectItem value="S">おてつだいスピードS</SelectItem>
                      <SelectItem value="M">おてつだいスピードM</SelectItem>
                      <SelectItem value="M&S">両方</SelectItem>
                      <SelectItem value="なし">なし</SelectItem>
                    </SelectContent>
                  </Select>
          </div>
        </div>
        <div className="space-y-2 pr-48">
              <div className="flex flex-row-reverse">
                    <div className="flex flex-col space-y-1.5">
                        <Label className="text-2xl text-blue-700 " htmlFor="framework">おてつだいボーナス</Label>
                          <Select>
                            <SelectTrigger id="framework" className="bg-gray-400 text-white ">
                              <SelectValue placeholder="おてつだいボーナス" />
                            </SelectTrigger>
                              <SelectContent position="popper" className="bg-gray-400 text-white">
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5">5</SelectItem>
                              <SelectItem value="0">0</SelectItem>
                            </SelectContent>
                          </Select>
                    </div>
                    <div className="space-x-4 px-8 pt-10 ml-20">
                        <Checkbox
                            id="bonuss"
                            className="rounded text-white bg-gray-400"
                        />
                        <Label
                            htmlFor="bonuss"
                            className="text-1xl text-blue-700">
                              おてつだいボーナス
                        </Label>
                    </div>
              </div>
              <div className="flex flex-row-reverse">
                    <div className="flex flex-col space-y-1.5">
                        <Label className="text-2xl text-blue-700 " htmlFor="framework">げんき補正</Label>
                          <Select>
                            <SelectTrigger id="framework" className="bg-gray-400 text-white w-52">
                              <SelectValue placeholder="げんき補正" />
                            </SelectTrigger>
                              <SelectContent position="popper" className="bg-gray-400 text-white">
                              <SelectItem value="80">80以上</SelectItem>
                                  <SelectItem value="60">80未満60以上</SelectItem>
                                  <SelectItem value="40">60未満40以上</SelectItem>
                                  <SelectItem value="20">40未満20以上</SelectItem>
                                  <SelectItem value="0">20未満</SelectItem>
                            </SelectContent>
                          </Select>
                    </div>
                    <div className="space-x-4 px-8 pt-10 ml-20">
                        <Checkbox
                            id="energy"
                            className="rounded text-white bg-gray-400"
                        />
                        <Label
                            htmlFor="energy"
                            className="text-1xl text-blue-700">
                              げんき補正
                        </Label>
                    </div>
              </div>
        </div>
          <CardFooter className="flex flex-row justify-center items-center pt-10 pb-5 space-x-96">
            <div className=" pr-48">
                <Button className=" bg-gray-900  text-white rounded transform hover:bg-gray-800 hover:scale-95">
                  Cancel
                </Button>
            </div>
            <div className=" pl-48">
                <Button className=" bg-blue-700 text-white rounded transform hover:bg-blue-600 hover:scale-95">
                  Check
                </Button>
            </div>
          </CardFooter>
        <div className="px-8 flex justify-center items-center flex-col space-y-4">
            <Label
              htmlFor="result"
              className="text-2xl text-blue-700">おてつだい時間</Label>
            <Input
              id="result"
              readOnly type="text"
              value="0"
              className="bg-gray-400 text-white w-1/6 "
            />
        </div>
      </form>
    </main>
  );
}