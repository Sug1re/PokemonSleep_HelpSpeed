"use client";

import { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Result = () => {
  const [helperTime, setHelperTime] = useState(0);

  return (
    <div className=" mx-96  pt-2 pb-4  flex justify-center items-center flex-col space-y-1.5 shadow-md rounded bg-sky-950">
         <Label
            htmlFor="helperTime"
            className="text-2xl text-white">おてつだい時間</Label>
          <Input
            id="helperTime"
            type="text"
            readOnly
            value={helperTime}
            className="bg-gray-400 text-white w-1/3 border-blue-700"
          />
    </div>
  );
}

export default Result