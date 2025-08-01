import { Button } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "green" | "light";
  type?: "button" | "submit";
  width?: string;
  leftIcon?: React.ReactNode;
};

export const RoundButton = ({
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
        fontSize: "12px",
        borderRadius: "18px",
        border: 0.5,
        borderColor: color === "green" ? "#388E3C" : "#999",
        boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
        color: color === "green" ? "#ffffff" : "#111827",
        bgcolor: color === "green" ? "#4CAF50" : "#ffffff",
        "&:hover": {
          transform: "scale(0.95)",
          boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
        },
        transition: "all 0.3s ease",
      }}
      startIcon={leftIcon}
    >
      {children}
    </Button>
  );
};
