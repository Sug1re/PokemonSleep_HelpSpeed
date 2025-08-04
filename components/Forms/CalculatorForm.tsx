"use client";

import React, { useState } from "react";
import { Box, Grid, Input, Slider, Stack, Typography } from "@mui/material";

import { calculatePokemonSpeed } from "@/lib/api/pokemon";
import * as styles from "@/styles/calculator";

import PokemonButton from "../Buttons/PokemonButton";
import PersonalityButton from "../Buttons/PersonalityButton";
import SubSkillButton from "../Buttons/SubSkillButton";
import FormSubmitButton from "../Buttons/FormSubmitButton";

const CalculatorForm = () => {
  const [formData, setFormData] = useState({
    pokemonName: "",
    personality: "",
    subSkill: "",
    level: 1,
  });
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSliderChange = (event: Event, newValue: number) => {
    setFormData((prev) => ({
      ...prev,
      level: newValue,
    }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value === "" ? 1 : Number(event.target.value);
    setFormData((prev) => ({
      ...prev,
      level: newValue,
    }));
  };

  const handleBlur = () => {
    setFormData((prev) => {
      let adjustedLevel = prev.level;
      if (adjustedLevel < 1) {
        adjustedLevel = 1;
      } else if (adjustedLevel > 100) {
        adjustedLevel = 100;
      }
      return {
        ...prev,
        level: adjustedLevel,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);
    console.log("送信データ:", formData);

    try {
      const data = await calculatePokemonSpeed(formData);
      setResult(data);
    } catch (err: any) {
      setError(err.response?.data?.error || "エラーが発生しました");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <Stack spacing={2} alignItems="center">
          <PokemonButton
            value={formData.pokemonName}
            onSelect={(name) =>
              setFormData((prev) => ({ ...prev, pokemonName: name }))
            }
          />
          <PersonalityButton
            value={formData.personality}
            onSelect={(name) =>
              setFormData((prev) => ({ ...prev, personality: name }))
            }
          />
          <SubSkillButton
            value={formData.subSkill}
            onSelect={(name) =>
              setFormData((prev) => ({ ...prev, subSkill: name }))
            }
          />

          <Grid container alignItems="center" spacing={2} width="80%">
            <Grid size="grow">
              <Slider
                name="level"
                value={typeof formData.level === "number" ? formData.level : 1}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                min={1}
                max={100}
                sx={{
                  width: "80%",
                  color: "#111827",
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#111827", // 進捗部分の色を変更
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "#111827", // 丸いスライダーの色を変更
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "rgb(25, 61, 96)", // 未選択部分の色を薄めの青に
                  },
                }}
              />
            </Grid>
            <Typography>Lv.</Typography>
            <Grid>
              <Input
                disableUnderline
                value={formData.level}
                name="level"
                size="small"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 100,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
                sx={{
                  borderBottom: 1,
                  borderColor: "#111827",
                }}
              />
            </Grid>
          </Grid>

          <FormSubmitButton />
        </Stack>
      </form>

      <Box sx={styles.formControl}>
        <Box
          sx={{
            mt: 8,
            mb: 4,
            width: "85%",
            borderRadius: 4,
            color: "#ffffff",
            backgroundColor: "#111827",
          }}
        >
          <Typography variant="subtitle1" sx={{ px: 2, py: 1 }}>
            おてつだい時間：
            {result && result.formatted_time}
          </Typography>
        </Box>
      </Box>

      {error && (
        <Box sx={styles.formControl}>
          <Typography color="error">{error}</Typography>
        </Box>
      )}
    </>
  );
};

export default CalculatorForm;
