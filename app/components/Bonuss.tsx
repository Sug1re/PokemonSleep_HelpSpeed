import React from 'react'

import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";


const Bonuss = () => {
  return (
    <div className="flex flex-row-reverse">
    <div className="flex flex-col space-y-1.5 mx-10">
        <Label className="text-2xl text-white" htmlFor="おてつだいボーナス">おてつだいボーナス</Label>
          <Select>
            <SelectTrigger
              id="おてつだいボーナス"
              className="bg-gray-400 text-white border-blue-700"
            >
              <SelectValue placeholder="おてつだいボーナスを選択" />
            </SelectTrigger>
              <SelectContent
                position="popper"
                className="bg-gray-400 text-white border-blue-700"
              >
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
            className="rounded  bg-gray-400 appearance-none  border-white "
        />
        <Label
            htmlFor="bonuss"
            className="text-1xl text-white">
              おてつだいボーナス
        </Label>
    </div>
</div>
  )
}

export default Bonuss