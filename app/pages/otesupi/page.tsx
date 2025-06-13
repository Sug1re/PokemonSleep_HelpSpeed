import React from "react";
import * as Components from "@/components/index";
import { Container } from "@mui/material";

const ZukanPage = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Components.Calculation />
      </Container>
    </>
  );
};
export default ZukanPage;
