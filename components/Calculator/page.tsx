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
  Modal,
  Card,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import * as CustomHook from "@/hooks/index";
import * as utils from "@/utils/index";
import * as styles from "@/styles/calculator";
import { calculatePokemonSpeed } from "@/lib/api/pokemon";
import { filterPokemon } from "@/lib/filter";
import SearchIcon from "@mui/icons-material/Search";
import { GoogleAnalytics } from "@next/third-parties/google";

const Calculator = () => {
  // GoogleAnalytics コンポーネントは return 内に移動すべき

  const [pokemonLabel, setPokemonLabel] = useState("ポケモン");
  const [personalityLabel, setPersonalityLabel] = useState("性格");
  const [subSkillLabel, setSubSkillLabel] = useState("サブスキル");
  const [selectedBerry, setSelectedBerry] = useState("");
  const [selectedSleepType, setSelectedSleepType] = useState("");
  const [selectedStrengths, setSelectedStrengths] = useState("");

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
                  borderRadius: 3,
                }}
              >
                {/* 上部固定 */}
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#FFFFFF",
                      pl: "10%",
                      py: 1,
                      gap: 1,
                      backgroundColor: "#f44336",
                      width: "100%",
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
                    disableRipple
                    disableElevation
                    onClick={
                      modalType === "pokemonFilter"
                        ? resetFilterData
                        : handleClose
                    }
                    sx={{
                      position: "absolute",
                      fontSize: "10px",
                      borderRadius: 4,
                      padding: 0,
                      px: 2.5,
                      py: 0.25,
                      top: "50%", // 垂直方向中央の起点
                      right: "5%",
                      transform: "translateY(-50%)",
                      boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
                      color: "#111827",
                      backgroundColor: "#ffffff",
                      ":hover": {
                        backgroundColor: "#ffffff",
                        transform: "translateY(-50%) scale(0.95)",
                        boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
                      },
                    }}
                  >
                    {modalType === "pokemonFilter" ? "リセット" : "キャンセル"}
                  </Button>
                </Box>

                <FormControl fullWidth sx={{ my: 2 }}>
                  {modalType === "pokemon" && (
                    <Stack spacing={1} sx={{ alignItems: "center" }}>
                      {/* OFFボタンは常に固定表示 */}
                      <Button
                        disableRipple
                        disableElevation
                        sx={{
                          color: "#ffffff",
                          backgroundColor: "#111827",
                          borderRadius: "4px",
                          px: 8,
                          alignItems: "center",
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
                        {filterLabel}
                      </Button>

                      <Box sx={styles.modalButton}>
                        {getFilteredPokemonKeys().length === 0 ? (
                          <Box sx={styles.formControl}>
                            <Typography
                              sx={{
                                color: "#f44336",
                              }}
                            >
                              該当するポケモンが見つかりませんでした
                            </Typography>
                          </Box>
                        ) : (
                          getFilteredPokemonKeys().map((label, index) => (
                            <Button
                              key={index}
                              color="inherit"
                              disableRipple
                              disableElevation
                              sx={styles.selectButton}
                              onClick={() =>
                                handleModalSelect("pokemon", label)
                              }
                            >
                              {label}
                            </Button>
                          ))
                        )}
                      </Box>
                    </Stack>
                  )}

                  {modalType === "pokemonFilter" && (
                    <Stack
                      spacing={1}
                      sx={{
                        maxHeight: 300,
                        overflowY: "auto",
                        mx: 12,
                      }}
                    >
                      <FormControl>
                        <FormLabel id="berry-label" sx={styles.filterFormLabel}>
                          タイプ
                        </FormLabel>
                        <Box sx={styles.formBorder} />
                        <RadioGroup
                          aria-labelledby="berry-label"
                          value={selectedBerry}
                          onChange={(e) => setSelectedBerry(e.target.value)}
                          name="berry"
                          sx={styles.formRadioGroup}
                        >
                          <FormControlLabel
                            value="キーのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="ノーマル"
                          />
                          <FormControlLabel
                            value="ヒメリのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="ほのお"
                          />
                          <FormControlLabel
                            value="オレンのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="みず"
                          />
                          <FormControlLabel
                            value="ウブのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="でんき"
                          />
                          <FormControlLabel
                            value="ドリのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="くさ"
                          />
                          <FormControlLabel
                            value="チーゴのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="こおり"
                          />
                          <FormControlLabel
                            value="クラボのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="かくとう"
                          />
                          <FormControlLabel
                            value="カゴのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="どく"
                          />
                          <FormControlLabel
                            value="フィラのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="じめん"
                          />
                          <FormControlLabel
                            value="シーヤのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="ひこう"
                          />
                          <FormControlLabel
                            value="マゴのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="エスパー"
                          />
                          <FormControlLabel
                            value="ラムのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="むし"
                          />
                          <FormControlLabel
                            value="オボンのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="いわ"
                          />
                          <FormControlLabel
                            value="ブリーのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="ゴースト"
                          />
                          <FormControlLabel
                            value="ヤチェのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="ドラゴン"
                          />
                          <FormControlLabel
                            value="ウイのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="あく"
                          />
                          <FormControlLabel
                            value="ベリブのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="はがね"
                          />
                          <FormControlLabel
                            value="モモンのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="フェアリー"
                          />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel
                          id="sleepType-label"
                          sx={styles.filterFormLabel}
                        >
                          睡眠タイプ
                        </FormLabel>
                        <Box sx={styles.formBorder} />

                        <RadioGroup
                          aria-labelledby="sleepType-label"
                          value={selectedSleepType}
                          onChange={(e) => setSelectedSleepType(e.target.value)}
                          name="sleepType"
                          sx={styles.formRadioGroup}
                        >
                          <FormControlLabel
                            value="うとうと"
                            control={<Radio sx={styles.customRadio} />}
                            label="うとうと"
                          />
                          <FormControlLabel
                            value="すやすや"
                            control={<Radio sx={styles.customRadio} />}
                            label="すやすや"
                          />
                          <FormControlLabel
                            value="ぐっすり"
                            control={<Radio sx={styles.customRadio} />}
                            label="ぐっすり"
                          />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel
                          id="strengths-label"
                          sx={styles.filterFormLabel}
                        >
                          睡眠タイプ
                        </FormLabel>
                        <Box sx={styles.formBorder} />

                        <RadioGroup
                          aria-labelledby="strengths-label"
                          value={selectedStrengths}
                          onChange={(e) => setSelectedStrengths(e.target.value)}
                          name="strengths"
                          sx={styles.formRadioGroup}
                        >
                          <FormControlLabel
                            value="きのみ"
                            control={<Radio sx={styles.customRadio} />}
                            label="きのみ"
                          />
                          <FormControlLabel
                            value="食材"
                            control={<Radio sx={styles.customRadio} />}
                            label="食材"
                          />
                          <FormControlLabel
                            value="スキル"
                            control={<Radio sx={styles.customRadio} />}
                            label="スキル"
                          />
                          <FormControlLabel
                            value="オール"
                            control={<Radio sx={styles.customRadio} />}
                            label="オール"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Stack>
                  )}

                  {modalType === "personality" && (
                    <Stack spacing={1} sx={{ alignItems: "center" }}>
                      <Box sx={styles.modalButton}>
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
                            sx={styles.selectButton}
                            onClick={() =>
                              handleModalSelect("personality", label)
                            }
                          >
                            {utils.getStyledLabel(label)}
                          </Button>
                        ))}
                      </Box>
                    </Stack>
                  )}

                  {modalType === "subSkill" && (
                    <Stack spacing={1} sx={{ alignItems: "center" }}>
                      <Box sx={styles.modalButton}>
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
                              sx={styles.selectButton}
                              onClick={() =>
                                handleModalSelect("subSkill", label)
                              }
                            >
                              {label}
                            </Button>
                          );
                        })}
                      </Box>
                    </Stack>
                  )}
                </FormControl>

                {/* 下部固定 */}
                {modalType === "pokemonFilter" && (
                  <Box
                    sx={{
                      borderTop: "1px solid #e0e0e0",
                      py: 1,
                      display: "flex",
                      justifyContent: "space-around",
                      bgcolor: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    <Button
                      disableRipple
                      disableElevation
                      onClick={handleModalTypeNoChange}
                      sx={{
                        fontSize: "12px",
                        borderRadius: 6,
                        px: 6,
                        border: 0.5,
                        boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
                        color: "#111827",
                        borderColor: "#999",
                        backgroundColor: "#ffffff",
                        ":hover": {
                          backgroundColor: "#ffffff",
                          transform: "scale(0.95)", // ← 拡大しつつ中央位置キープ
                          boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
                        },
                      }}
                    >
                      キャンセル
                    </Button>
                    <Button
                      disableRipple
                      disableElevation
                      onClick={handleModalTypeChange}
                      sx={{
                        fontSize: "12px",
                        borderRadius: 6,
                        px: 8,
                        border: 0.5,
                        boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
                        color: "#ffffff",
                        borderColor: "#388E3C",
                        backgroundColor: "#4CAF50",
                        ":hover": {
                          backgroundColor: "#4CAF50",
                          transform: " scale(0.95)",
                          boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
                        },
                      }}
                    >
                      OK
                    </Button>
                  </Box>
                )}
              </Card>
            </Modal>

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

export default Calculator;
