import { Button } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "dark" | "light";
  type?: "button" | "submit";
  width?: string;
  leftIcon?: React.ReactNode;
};

export const BaseButton = ({
  children,
  onClick,
  color = "light",
  type = "button",
  width = "auto",
  leftIcon,
}: Props): React.ReactElement => {
  return (
    <Button
      disableRipple
      disableElevation
      onClick={onClick}
      type={type}
      sx={{
        width,
        margin: "0 auto", // ★ 中央寄せ
        display: "block", // ★ 横方向の中央寄せには block にする
        color: color === "dark" ? "#ffffff" : "#111827",
        bgcolor: color === "dark" ? "#111827" : "#ffffff",
        "&:hover": {
          backgroundColor: "#111827",
          color: color === "dark" ? "#111827" : "#ffffff",
          transform: "scale(0.95)",
        },
        transition: "all 0.3s ease",
      }}
      startIcon={leftIcon}
    >
      {children}
    </Button>
  );
};
