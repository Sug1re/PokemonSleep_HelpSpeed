import { Box, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";

const BasicSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#111827",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "rgb(85, 87, 89)",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

type Props = {
  text: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const BaseSwitch = ({ checked, onChange, text }: Props) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", width: "80%" }}>
        <BasicSwitch
          sx={{ m: 1 }}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default BaseSwitch;
