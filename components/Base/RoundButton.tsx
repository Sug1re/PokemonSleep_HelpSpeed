import { Button } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "green" | "light";
  type?: "button" | "submit";
  width?: string;
  size?: " normal" | "small";
  leftIcon?: React.ReactNode;
};

export const RoundButton = ({
  children,
  onClick,
  color = "light",
  type = "button",
  width = "auto",
  size = " normal",
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
        px: size === "small" ? 2.5 : 1,
        py: size === "small" ? 0.25 : 1,
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
