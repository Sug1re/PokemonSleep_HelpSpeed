"use client";

import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Typography,
  Box,
  Stack,
  FormControl,
  Slider,
  Grid,
  Input,
  Modal,
  Card,
} from "@mui/material";
import * as CustomHook from "@/hooks/index";
import CloseIcon from "@mui/icons-material/Close";
import { GoogleAnalytics } from "@next/third-parties/google";

const Calculation = () => {
  // GoogleAnalytics コンポーネントは return 内に移動すべき

  const [pokemonLabel, setPokemonLabel] = useState("ポケモン");
  const [personalityLabel, setPersonalityLabel] = useState("性格");
  const [subSkillLabel, setSubSkillLabel] = useState("サブスキル");

  const { isOpen, modalType, handleOpen, handleClose, handleSelect } =
    CustomHook.useModal({
      setPokemonLabel,
      setPersonalityLabel,
      setSubSkillLabel,
    });

  const getStyledLabel = (label: string) => {
    if (label.includes("▲▲")) {
      return (
        <>
          おてつだいスピード
          <span style={{ color: "#f44336" }}>▲▲</span>
        </>
      );
    }
    if (label.includes("▼▼")) {
      return (
        <>
          おてつだいスピード
          <span style={{ color: "#2196f3" }}>▼▼</span>
        </>
      );
    }
    return <>{label}</>;
  };

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
      const response = await axios.post(
        "https://pokemon-sleep-api-1059650888282.asia-northeast1.run.app/pokemonSpeed",
        // "http://0.0.0.0:9090/pokemonSpeed",
        {
          pokemonName: formData.pokemonName,
          personality: formData.personality,
          subSkill: formData.subSkill,
          level: formData.level,
        }
      );

      setResult(response.data);
    } catch (err: any) {
      setError(err.response?.data?.error || "エラーが発生しました");
    }
  };

  const button = {
    color: "#111827",
    backgroundColor: "#ffffff",

    transition: "all 0.3s ease", // なめらかなアニメーション
    ":hover": {
      color: "#ffffff",
      backgroundColor: "#111827",
      transform: "scale(1.05)", // ← スケールを1.05倍に
    },
  };

  return (
    <>
      <GoogleAnalytics gaId="G-TL1C6DW00G" />
      <Box>
        <form onSubmit={handleSubmit} method="post">
          <Stack spacing={2}>
            {/* クリック時にモーダル表示で */}

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
                  <Button
                    color="inherit"
                    disableRipple
                    disableElevation
                    sx={button}
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
                      ? getStyledLabel(selectedLabel)
                      : selectedLabel}
                  </Button>
                </FormControl>
              );
            })}

            <Modal
              open={isOpen}
              onClose={handleClose}
              BackdropProps={{
                sx: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              }}
            >
              <Card
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: "90%", sm: "80%", md: "60%" },
                  bgcolor: "background.paper",
                  px: 4,
                  py: 2,
                  borderRadius: 3,
                  border: `0.5px solid #FF6600`,
                }}
              >
                {/* 閉じるボタン */}
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#FFFFFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      py: 1,
                      gap: 1,
                      borderRadius: 2,
                      backgroundColor: "#FF6600",
                      width: "80%",
                    }}
                  >
                    {modalType === "pokemon"
                      ? "ポケモンを選択"
                      : modalType === "personality"
                      ? "性格を選択"
                      : "サブスキルを選択"}
                  </Typography>
                  <Button
                    onClick={handleClose}
                    sx={{
                      color: "#000000",
                      width: "20%",
                      backgroundColor: "transparent",
                      ":hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <CloseIcon />
                  </Button>
                </Box>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  {modalType === "pokemon" && (
                    <Stack spacing={1}>
                      {["フシギダネ", "ヒトカゲ", "ゼニガメ"].map(
                        (label, index) => {
                          return (
                            <Button
                              key={index}
                              color="inherit"
                              disableRipple
                              disableElevation
                              sx={button}
                              onClick={() =>
                                handleModalSelect("pokemon", label)
                              }
                            >
                              {label}
                            </Button>
                          );
                        }
                      )}
                    </Stack>
                  )}

                  {modalType === "personality" && (
                    <Stack spacing={1}>
                      {[
                        "おてつだいスピード▲▲",
                        "おてつだいスピード▼▼",
                        "無補正",
                      ].map((label, index) => (
                        <Button
                          key={index}
                          color="inherit"
                          disableRipple
                          disableElevation
                          sx={button}
                          onClick={() =>
                            handleModalSelect("personality", label)
                          }
                        >
                          {getStyledLabel(label)}
                        </Button>
                      ))}
                    </Stack>
                  )}

                  {modalType === "subSkill" && (
                    <Stack spacing={1}>
                      {[
                        "おてつだいスピードS",
                        "おてつだいスピードM",
                        "おてつだいスピードSとM",
                        "なし",
                      ].map((label, index) => {
                        return (
                          <Button
                            key={index}
                            color="inherit"
                            disableRipple
                            disableElevation
                            sx={button}
                            onClick={() => handleModalSelect("subSkill", label)}
                          >
                            {label}
                          </Button>
                        );
                      })}
                    </Stack>
                  )}
                </FormControl>
              </Card>
            </Modal>

            {/* レベル */}
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
              <Grid size="grow">
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
                    color: "#111827", // スライダーの色を変更
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
              <Grid>
                <Input
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
                />
              </Grid>
            </Grid>

            {/* ボタン */}
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#111827",
                transition: "all 0.3s ease", // なめらかなアニメーション
                ":hover": {
                  backgroundColor: "rgb(25, 61, 96)",
                  transform: "scale(1.05)", // ← スケールを1.05倍に
                },
              }}
            >
              計算する
            </Button>
          </Stack>
        </form>

        {result && (
          <Box mt={3}>
            <Typography variant="subtitle1">
              結果：
              {result.formatted_time}
            </Typography>
          </Box>
        )}

        {error && (
          <Box mt={3}>
            <Typography color="error">{error}</Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Calculation;
