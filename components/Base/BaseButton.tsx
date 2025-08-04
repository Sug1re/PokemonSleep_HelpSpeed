import React from "react";
import { Button } from "@mui/material";
import { getStyledLabel } from "@/utils/index";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "dark" | "light";
  type?: "button" | "submit";
  width?: string;
  leftIcon?: React.ReactNode;
};

const BaseButton = ({
  children,
  onClick,
  color = "light",
  type = "button",
  width = "auto",
  leftIcon,
}: Props): React.ReactElement => {
  const renderChildren = () => {
    if (typeof children === "string") {
      if (children.includes("▲▲") || children.includes("▼▼")) {
        return getStyledLabel(children);
      }
    }
    return children;
  };
  return (
    <Button
      disableRipple
      disableElevation
      onClick={onClick}
      type={type}
      sx={{
        width,
        margin: "0 auto", // 中央寄せ
        display: "flex",
        color: color === "dark" ? "#ffffff" : "#111827",
        bgcolor: color === "dark" ? "#111827" : "#ffffff",
        "&:hover": {
          backgroundColor: "#111827",
          color: "#ffffff",
          transform: "scale(0.95)",
        },
        transition: "all 0.3s ease",
      }}
      startIcon={leftIcon}
    >
      {renderChildren()}
    </Button>
  );
};

export default BaseButton;
