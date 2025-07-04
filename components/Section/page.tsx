"use client";

import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import * as styles from "@/styles/section";

import { useRouter } from "next/navigation";

const menuLabels = ["イベント", "図鑑", "おてスピ計", "料理", "食材期待値"];

const pathMap: Record<string, string> = {
  イベント: "/events",
  図鑑: "/zukan",
  おてスピ計: "/otesupi",
  料理: "/cooking",
  食材期待値: "/ingredients",
};

const Section = () => {
  const router = useRouter();

  const handleClick = (label: string) => {
    const path = pathMap[label] || "/";
    router.push(path);
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 6 }}>
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
          {menuLabels.map((label, index) => {
            const isLast = index === menuLabels.length - 1;

            const dynamicButtonSx = {
              ...styles.buttonSx,
              borderLeft: "2px solid #b6b7b9",
              borderRight: isLast ? "2px solid #b6b7b9" : "none",
            };

            return (
              <Button
                key={label}
                onClick={() => handleClick(label)}
                color="inherit"
                disableRipple
                disableElevation
                sx={dynamicButtonSx}
              >
                {label}
              </Button>
            );
          })}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Section;
