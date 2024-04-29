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


const Energy = () => {
  return (
    <div className="flex flex-row-reverse">
    <div className="flex flex-col space-y-1.5 mx-10">
        <Label className="text-2xl text-white " htmlFor="げんき補正">げんき補正</Label>
          <Select>
            <SelectTrigger
              id="げんき補正"
              className="bg-gray-400 text-white w-52 border-blue-700"
            >
              <SelectValue placeholder="げんき補正" />
            </SelectTrigger>
              <SelectContent
                position="popper"
                className="bg-gray-400 text-white border-blue-700"
              >
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
            className="text-1xl text-white">
              げんき補正
        </Label>
    </div>
</div>
  )
}

export default Energy