"use client";

import React, { useState } from "react";
import {
  Button,
  Typography,
  Box,
  Stack,
  FormControl,
  Slider,
  Grid,
  Input,
} from "@mui/material";
import * as Components from "@/components/index";
import * as CustomHook from "@/hooks/index";
import * as utils from "@/utils/index";
import * as styles from "@/styles/calculator";
import { calculatePokemonSpeed } from "@/lib/api/pokemon";
import { filterPokemon } from "@/lib/filter";
import { GoogleAnalytics } from "@next/third-parties/google";

const Calculator = () => {
  // GoogleAnalytics コンポーネントは return 内に移動すべき

  const [pokemonLabel, setPokemonLabel] = useState("ポケモン");
  const [personalityLabel, setPersonalityLabel] = useState("性格");
  const [subSkillLabel, setSubSkillLabel] = useState("サブスキル");
  const [selectedBerry, setSelectedBerry] = useState<string>("");
  const [selectedSleepType, setSelectedSleepType] = useState<string>("");
  const [selectedStrengths, setSelectedStrengths] = useState<string>("");

  const resetFilterStates = () => {
    setSelectedBerry("");
    setSelectedSleepType("");
    setSelectedStrengths("");
  };

  const {
    isOpen,
    modalType,
    handleOpen,
    handleClose,
    handleSelect,
    handleModalTypeChange,
    handleModalTypeNoChange,
    resetFilterData,
  } = CustomHook.useModal({
    setPokemonLabel,
    setPersonalityLabel,
    setSubSkillLabel,
    resetFilterStates,
  });

  const { pokemonData } = CustomHook.usePokemonData();

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

  const handleModalSelect = (
    type: "pokemon" | "personality" | "subSkill",
    value: string
  ) => {
    // ラベル更新（モーダルの表示用）
    handleSelect(type, value);

    // formData 更新
    setFormData((prev) => ({
      ...prev,
      [type === "pokemon"
        ? "pokemonName"
        : type === "personality"
        ? "personality"
        : "subSkill"]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    try {
      const data = await calculatePokemonSpeed(formData);
      setResult(data);
    } catch (err: any) {
      setError(err.response?.data?.error || "エラーが発生しました");
    }
  };

  const getFilteredPokemonKeys = () => {
    return filterPokemon(pokemonData, {
      selectedBerry,
      selectedSleepType,
      selectedStrengths,
    });
  };

  const filterValues = {
    selectedBerry,
    selectedSleepType,
    selectedStrengths,
  };

  const { filterLabel } = CustomHook.useFilterState(filterValues);

  return (
    <>
      <GoogleAnalytics gaId="G-TL1C6DW00G" />
      <Box>
        <form onSubmit={handleSubmit} method="post">
          <Stack spacing={2}>
            {["ポケモン", "性格", "サブスキル"].map((_, index) => {
              const type = ["pokemon", "personality", "subSkill"][index] as
                | "pokemon"
                | "personality"
                | "subSkill";

              // ラベルの状態に応じて表示名を変更
              const selectedLabel =
                type === "pokemon"
                  ? pokemonLabel
                  : type === "personality"
                  ? personalityLabel
                  : subSkillLabel;

              const value =
                type === "pokemon"
                  ? formData.pokemonName
                  : type === "personality"
                  ? formData.personality
                  : formData.subSkill;

              return (
                <FormControl key={type}>
                  <Box sx={styles.formControl}>
                    <Button
                      color="inherit"
                      disableRipple
                      disableElevation
                      sx={{
                        width: "80%",
                        ...styles.selectButton,
                      }}
                      value={value}
                      name={
                        type === "pokemon"
                          ? "pokemonName"
                          : type === "personality"
                          ? "personality"
                          : "subSkill"
                      }
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          [type === "pokemon"
                            ? "pokemonName"
                            : type === "personality"
                            ? "personality"
                            : "subSkill"]: selectedLabel,
                        }));
                        handleOpen(type);
                      }}
                    >
                      {type === "personality"
                        ? utils.getStyledLabel(selectedLabel)
                        : selectedLabel}
                    </Button>
                  </Box>
                </FormControl>
              );
            })}

            <Components.Modal
              isOpen={isOpen}
              modalType={modalType}
              filterLabel={filterLabel}
              selectedBerry={selectedBerry}
              selectedSleepType={selectedSleepType}
              selectedStrengths={selectedStrengths}
              getFilteredPokemonKeys={getFilteredPokemonKeys}
              handleClose={handleClose}
              handleOpen={handleOpen}
              handleModalTypeChange={handleModalTypeChange}
              handleModalTypeNoChange={handleModalTypeNoChange}
              handleModalSelect={handleModalSelect}
              resetFilterData={resetFilterData}
              setSelectedBerry={setSelectedBerry}
              setSelectedSleepType={setSelectedSleepType}
              setSelectedStrengths={setSelectedStrengths}
            />

            {/* レベル */}
            <Grid container>
              <Grid size="grow" sx={styles.formControl}>
                <Slider
                  name="level"
                  value={
                    typeof formData.level === "number" ? formData.level : 1
                  }
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

            {/* ボタン */}
            <Box sx={styles.formControl}>
              <Button
                disableRipple
                disableElevation
                type="submit"
                variant="contained"
                sx={{
                  width: "50%",
                  backgroundColor: "#111827",
                  transition: "all 0.3s ease",
                  ":hover": {
                    transform: "scale(0.95)",
                  },
                }}
              >
                計算する
              </Button>
            </Box>
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
      </Box>
    </>
  );
};

export default Calculator;
