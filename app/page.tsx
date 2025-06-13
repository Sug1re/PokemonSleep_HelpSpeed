import React from "react";
import * as Components from "@/components/index";
import { Container } from "@mui/material";

const HOME = () => {
  return (
    <>
      <Components.Header />

      <Components.Section />

      <Container maxWidth="sm">
        <Components.Calculation />
      </Container>
    </>
  );
};

export default HOME;
