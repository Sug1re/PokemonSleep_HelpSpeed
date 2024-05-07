import React from 'react'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Porsonality = () => {
  return (
    <div className="space-y-1.5 mx-10">
                    <Label className="text-2xl text-white" htmlFor="性格">性格</Label>
                    <Input
                      id="personality"
                      placeholder="Please input the Pokémon’s personality."
                      className="bg-gray-400 text-white border-blue-700"
                    />
    </div>
  )
}

export default Porsonality