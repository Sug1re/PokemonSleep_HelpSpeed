import React from 'react'

import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const Skill = () => {
  return (
    <div className="space-y-1.5 mx-10">
    <Label className="text-2xl text-white" htmlFor="skill">サブスキル</Label>
      <Select>
        <SelectTrigger id="skill" className="bg-gray-400 text-white border-blue-700">
          <SelectValue placeholder="サブスキル" />
        </SelectTrigger>
          <SelectContent position="popper" className="bg-gray-400 text-white border-blue-700">
          <SelectItem value="S" >おてつだいスピードS</SelectItem>
          <SelectItem value="M">おてつだいスピードM</SelectItem>
          <SelectItem value="M&S">両方</SelectItem>
          <SelectItem value="なし">なし</SelectItem>
        </SelectContent>
      </Select>
</div>
  )
}

export default Skill