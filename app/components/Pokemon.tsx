import React from 'react'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Pokemon = () => {
  return (
    <div className="space-y-1.5 mx-10">
    <Label className="text-2xl text-white" htmlFor="pokemonName">ポケモン</Label>
    <Input
      id="pokemonName"
      type="text"
      placeholder="Please input the Pokémon."
      className="bg-gray-400 text-white border-blue-700"
    />
</div>
  )
}

export default Pokemon