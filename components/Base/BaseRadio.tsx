import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

type Option = {
  value: string;
  label: string;
};

type Props = {
  title: string;
  width?: string;
  maps: Option[];
  stateRadioLabel: string;
  onChange: (value: string) => void;
};

const BaseRadio = ({
  title,
  width = "auto",
  maps,
  stateRadioLabel,
  onChange,
}: Props) => {
  return (
    <>
      <Box
        sx={{
          width,
          color: "#111827 !important",
          borderLeft: "8px solid #4CAF50",
          borderBottom: "1px solid #ccc",
          pl: 1,
        }}
      >
        <Typography sx={{ mb: 1 }}>{title}</Typography>
      </Box>
      <RadioGroup
        value={stateRadioLabel}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          width,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        {maps.map(({ value, label }) => (
          <FormControlLabel
            key={label}
            value={value}
            control={
              <Radio
                sx={{
                  color: "#111827",
                  "&.Mui-checked": {
                    color: "#111827",
                  },
                }}
              />
            }
            label={label}
          />
        ))}
      </RadioGroup>
    </>
  );
};

export default BaseRadio;
