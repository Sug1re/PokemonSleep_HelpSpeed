"use client";

import React, { useEffect, useState } from "react";
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
import { PokemonInfo } from "@/types/pokemonInfo";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { GoogleAnalytics } from "@next/third-parties/google";

const Calculation = () => {
  // GoogleAnalytics コンポーネントは return 内に移動すべき

  const [pokemonData, setPokemonData] = useState<Record<string, PokemonInfo>>(
    {}
  );
  const [pokemonLabel, setPokemonLabel] = useState("ポケモン");
  const [personalityLabel, setPersonalityLabel] = useState("性格");
  const [subSkillLabel, setSubSkillLabel] = useState("サブスキル");

  const {
    isOpen,
    modalType,
    handleOpen,
    handleClose,
    handleSelect,
    handleModalTypeChange,
  } = CustomHook.useModal({
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

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const res = await axios.get(
          "https://pokemon-sleep-api-1059650888282.asia-northeast1.run.app/pokemonName"
          // "http://0.0.0.0:9090/pokemonName"
        );
        setPokemonData(res.data.pokemonData);
      } catch (error) {
        console.error("ポケモン名の取得に失敗しました", error);
      }
    };

    fetchPokemonData();
  }, [pokemonData]);

  const button = {
    color: "#111827",
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    width: "80%",
    transition: "all 0.3s ease", // なめらかなアニメーション
    ":hover": {
      color: "#ffffff",
      backgroundColor: "#111827",
      transform: "scale(1.05)", // ← スケールを1.05倍に
    },
  };

  const formControl = {
    alignItems: "center",
    mt: 2,
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
                <FormControl key={type} sx={formControl}>
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
                  border: `0.5px solid #111827`,
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
                      backgroundColor: "#111827",
                      width: "80%",
                    }}
                  >
                    {modalType === "pokemon"
                      ? "ポケモンを選択"
                      : modalType === "personality"
                      ? "性格を選択"
                      : modalType === "subSkill"
                      ? "サブスキルを選択"
                      : modalType === "pokemonFilter"
                      ? "絞り込む"
                      : "選択肢を表示"}
                  </Typography>
                  <Button
                    onClick={
                      modalType === "pokemonFilter"
                        ? handleModalTypeChange
                        : handleClose
                    }
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

                <FormControl fullWidth sx={formControl}>
                  {modalType === "pokemon" && (
                    <Stack
                      spacing={1}
                      sx={{
                        pt: 2,
                        width: "80%",
                        alignItems: "center",
                      }}
                    >
                      {/* OFFボタンは常に固定表示 */}
                      <Button
                        sx={{
                          color: "#ffffff",
                          backgroundColor: "#111827",
                          borderRadius: "4px",
                          width: "80%",
                          transition: "all 0.3s ease",
                          ":hover": {
                            color: "#ffffff",
                            transform: "scale(0.95)",
                          },
                          "& .MuiSvgIcon-root": {
                            color: "#ffffff",
                            transition: "color 0.3s ease",
                          },
                          ":hover .MuiSvgIcon-root": {
                            color: "#ffffff",
                          },
                        }}
                        onClick={() => {
                          if (modalType === "pokemon") {
                            handleOpen("pokemonFilter");
                          }
                        }}
                      >
                        <SearchIcon sx={{ mr: 1 }} />
                        OFF
                      </Button>

                      {/* スクロール可能なポケモンリスト */}
                      <Box
                        sx={{
                          maxHeight: 300,
                          overflowY: "auto",
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 1, // spacingの代わり
                          pt: 1, // OFFボタンとリストの間に余白
                        }}
                      >
                        {Object.keys(pokemonData).map((label, index) => (
                          <Button
                            key={index}
                            color="inherit"
                            disableRipple
                            disableElevation
                            sx={button}
                            onClick={() => handleModalSelect("pokemon", label)}
                          >
                            {label}
                          </Button>
                        ))}
                      </Box>
                    </Stack>
                  )}

                  {modalType === "pokemonFilter" && (
                    <Stack
                      spacing={1}
                      sx={{
                        maxHeight: 300,
                        width: "80%",
                        alignItems: "center",
                      }}
                    >
                      <Typography>
                        ポケモンフィルターの選択肢をここに表示
                      </Typography>
                    </Stack>
                  )}

                  {modalType === "personality" && (
                    <Stack
                      spacing={1}
                      sx={{
                        maxHeight: 300, // 必要に応じて高さを調整
                        width: "80%",
                        alignItems: "center",
                      }}
                    >
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
                    <Stack
                      spacing={1}
                      sx={{
                        maxHeight: 300, // 必要に応じて高さを調整
                        width: "80%",
                        alignItems: "center",
                      }}
                    >
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
            <Grid container spacing={2} sx={formControl}>
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
