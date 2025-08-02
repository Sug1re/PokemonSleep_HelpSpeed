import React from "react";
import PokemonButton from "../Buttons/PokemonButton";
import { Stack } from "@mui/material";

const CalculatorForm = () => {
  return (
    <>
      <form>
        <Stack spacing={2} alignItems="center">
          <PokemonButton />
        </Stack>
      </form>
    </>
  );
};

export default CalculatorForm;
