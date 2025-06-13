"use client";

import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { maxHeaderSize } from "http";

const Section = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  // 共通のButton sxスタイル
  const buttonSx = {
    textTransform: "none",
    backgroundColor: "transparent",
    ":hover": {
      backgroundColor: "rgb(25, 61, 96)",
    },
    boxShadow: "none",
    all: "unset",
    cursor: "pointer",
    fontSize: "0.7rem",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    p: 1,
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        mb: 6,
      }}
    >
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: "#111827",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {["イベント", "図鑑", "おてスピ計", "料理", "食材期待値"].map(
            (label, index, array) => {
              const isLast = index === array.length - 1;

              const dynamicButtonSx = {
                ...buttonSx,
                borderLeft: "2px solid #b6b7b9",
                borderRight: isLast ? "2px solid #b6b7b9" : "none",
              };

              return (
                <Button
                  key={label}
                  onClick={handleClick}
                  color="inherit"
                  disableRipple
                  disableElevation
                  sx={dynamicButtonSx}
                >
                  {label}
                </Button>
              );
            }
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Section;
