import React from "react";
import * as Components from "@/components/index";
import { Container } from "@mui/material";

const ZukanPage = () => {
  return (
    <>
      <Container maxWidth="md">
        <Components.pokemonDataBase />
      </Container>
    </>
  );
};
export default ZukanPage;
