import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sheet } from "lucide-react";
import { SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-300">
//       <div className="bg-white rounded w-[450px]">
//         <CardHeader className="items-center py-3">
//           <CardTitle className="text-2xl font-bold text-blue-950">
//             おてスピチェック
//           </CardTitle>
//           <CardDescription>
//             {/* Let's check your Pokémon's speed. */}
//             Let’s check your Pokemon’s speed.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form>
//             <div className="flex flex-col space-y-1.5 px-8 py-2">
//               <Label htmlFor="ポケモン">ポケモン</Label>
//               <Input
//                 id="name"
//                 placeholder="Please input the Pokémon."
//                 className="bg-white"
//               />
//             </div>
//             <div className="flex flex-col space-y-1.5 px-8 py-2">
//               <Label htmlFor="性格">性格</Label>
//               <Input
//                 id="name"
//                 placeholder="Please input the Pokémon's personality."
//                 className="bg-white"
//               />
//             </div>
//             <div className="flex flex-col space-y-1.5 px-8 py-2">
//               <Label htmlFor="framework">サブスキル</Label>
//               <Select>
//                 <SelectTrigger id="framework" className="bg-white">
//                   <SelectValue placeholder="サブスキル" />
//                 </SelectTrigger>
//                 <SelectContent position="popper" className="bg-white">
//                   <SelectItem value="S">おてつだいスピードS</SelectItem>
//                   <SelectItem value="M">おてつだいスピードM</SelectItem>
//                   <SelectItem value="M&S">両方</SelectItem>
//                   <SelectItem value="なし">なし</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="space-y-2">
//               <div className="flex  space-x-2 px-8 pt-10 ml-20">
//                 <Checkbox id="bonuss" className="rounded" />
//                 <Label htmlFor="bonuss">おてつだいポーナス</Label>
//               </div>
//               <div className="flex  space-x-6 px-8 ml-20">
//                 <Checkbox id="energy" className="rounded" />
//                 <Label htmlFor="energy">げんき補正</Label>
//               </div>
//             </div>
//             <div className="py-8">
//               <Slider defaultValue={[33]} max={100} step={1} />
//             </div>
//           </form>
//         </CardContent>
//         <CardFooter className="flex justify-between px-8 py-5">
//           <Button className=" bg-gray-200 rounded transform hover:bg-gray-100 hover:scale-95">
//             Cancel
//           </Button>
//           <Button className=" bg-blue-950 text-white rounded transform hover:bg-blue-900 hover:scale-95">
//             Check
//           </Button>
//         </CardFooter>
//       </div>
//     </main>
//   );
// }


export default function Home() {
  return (
    <main className="min-h-screen  items-center justify-between  bg-gray-100">
      <form>
       <div className="grid lg:grid-cols-3 py-4 px-8 gap-4">
        <div className="flex flex-col space-y-1.5">
                  <Label className="text-2xl" htmlFor="ポケモン">ポケモン</Label>
                  <Input
                    id="name"
                    placeholder="Please input the Pokémon."
                    className="bg-white"
                  />
        </div>
        <div className="flex flex-col space-y-1.5">
                  <Label className="text-2xl" htmlFor="性格">性格</Label>
                  <Input
                    id="name"
                    placeholder="Please input the Pokémon’s personality."
                    className="bg-white"
                  />
        </div>
        <div className="flex flex-col space-y-1.5">
              <Label className="text-2xl" htmlFor="framework">サブスキル</Label>
                <Select>
                  <SelectTrigger id="framework" className="bg-white">
                    <SelectValue placeholder="サブスキル" />
                  </SelectTrigger>
                    <SelectContent position="popper" className="bg-white">
                    <SelectItem value="S">おてつだいスピードS</SelectItem>
                    <SelectItem value="M">おてつだいスピードM</SelectItem>
                    <SelectItem value="M&S">両方</SelectItem>
                    <SelectItem value="なし">なし</SelectItem>
                  </SelectContent>
                </Select>
        </div>
      </div>
        <div >
          <Slider />
        </div>
        <div className="space-y-2">
              <div className="  space-x-2 px-8 pt-10 ml-20">
                <Checkbox id="bonuss" className="rounded" />
                <Label htmlFor="bonuss" className="text-1xl">おてつだいボーナス</Label>
              </div>
              <div className="space-x-6 px-8 ml-20">
                <Checkbox id="energy" className="rounded" />
                <Label htmlFor="energy" className="text-1xl">げんき補正</Label>
              </div>
        </div>
        <CardFooter className="flex justify-between px-14 py-5">
          <Button className=" bg-gray-200 rounded transform hover:bg-white hover:scale-95">
            Cancel
          </Button>
          <Button className=" bg-blue-950 text-white rounded transform hover:bg-blue-900 hover:scale-95">
            Check
          </Button>
        </CardFooter>
        <div className="px-8">
            <Label htmlFor="result" className="text-2xl">Result</Label>
            <Input id="result" readOnly type="text" value="0" className="bg-white"/>
        </div>
      </form>
    </main>
  );
}