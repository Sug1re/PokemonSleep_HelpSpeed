import React from 'react'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Level = () => {
  return (
    <div className="space-y-1.5 mx-10">
                    <Label className="text-2xl text-blue-700" htmlFor="レベル">レベル</Label>
                    <Input
                      id="level"
                      placeholder="Please tell me the level of the Pokémon."
                      className="bg-gray-400 text-white border-blue-700"
                    />
          </div>
  )
}

export default Level