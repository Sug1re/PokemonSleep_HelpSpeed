import React from "react";
import { Stack } from "@mui/material";

import PokemonButton from "../Buttons/PokemonButton";
import PersonalityButton from "../Buttons/PersonalityButton";
import SubSkillButton from "../Buttons/SubSkillButton";

const CalculatorForm = () => {
  return (
    <>
      <form>
        <Stack spacing={2} alignItems="center">
          <PokemonButton />
          <PersonalityButton />
          <SubSkillButton />
        </Stack>
      </form>
    </>
  );
};

export default CalculatorForm;
