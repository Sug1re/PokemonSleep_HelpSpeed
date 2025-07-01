import React from "react";
import * as Components from "@/components/index";
import { Container } from "@mui/material";

const HOME = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Components.Calculator />
      </Container>
    </>
  );
};

export default HOME;
