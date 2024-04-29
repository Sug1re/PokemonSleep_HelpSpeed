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
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Porsonality from "./components/Porsonality";
import Level from "./components/Level";
import Skill from "./components/Skill";
import Bonuss from "./components/Bonuss";
import Energy from "./components/Energy";
import Pokemon from "./components/Pokemon";

export default function Home() {

  return (
    <main className="min-h-screen items-center justify-between bg-blue-950">
      <form>
        <div className="pt-4">
          <div className="grid lg:grid-cols-3 pb-4  pt-2 mx-24 gap-4 shadow-md rounded bg-sky-950">
            <Pokemon />
            <Porsonality />
            <Level />
            <Skill />
          </div>
        </div>
        <div className="space-y-2 mx-24 my-7 pb-4 flex justify-center items-center shadow-md rounded  bg-sky-950 text-white ">
          <Bonuss />
          <Energy />
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
        <div className=" mx-96  pt-2 pb-4  flex justify-center items-center flex-col space-y-1.5 shadow-md rounded bg-sky-950">
            <Label
              htmlFor="result"
              className="text-2xl text-white">おてつだい時間</Label>
            <Input
              id="result"
              readOnly
              type="text"
              value={0}
              className="bg-gray-400 text-white w-1/3 border-blue-700"
             />
        </div>
      </form>
    </main>
  );
}
