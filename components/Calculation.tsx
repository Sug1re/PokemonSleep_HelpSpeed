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
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import * as CustomHook from "@/hooks/index";
import { PokemonInfo } from "@/types/pokemonInfo";
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
  const [selectedBerry, setSelectedBerry] = useState("");
  const [selectedSleepType, setSelectedSleepType] = useState("");
  const [selectedStrengths, setSelectedStrengths] = useState("");

  const {
    isOpen,
    modalType,
    handleOpen,
    handleClose,
    handleSelect,
    handleModalTypeChange,
    handleModalTypeNoChange: baseHandleModalTypeNoChange,
    resetFilterData: baseResetFilterData,
  } = CustomHook.useModal({
    setPokemonLabel,
    setPersonalityLabel,
    setSubSkillLabel,
  });

  const handleModalTypeNoChange = () => {
    setSelectedBerry(""); // これでフィルター選択をクリア
    setSelectedSleepType("");
    setSelectedStrengths("");
    baseHandleModalTypeNoChange();
  };

  const resetFilterData = () => {
    setSelectedBerry("");
    setSelectedSleepType("");
    setSelectedStrengths("");
    baseResetFilterData();
  };

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

  const getFilteredPokemonKeys = () => {
    return Object.keys(pokemonData).filter((name) => {
      const pokemon = pokemonData[name];

      const matchesBerry = !selectedBerry || pokemon.berry === selectedBerry;
      const matchesSleepType =
        !selectedSleepType || pokemon.sleepType === selectedSleepType;

      const matchesStrengths =
        !selectedStrengths || pokemon.strengths === selectedStrengths;

      return matchesBerry && matchesSleepType && matchesStrengths;
    });
  };

  const filterValues = {
    selectedBerry,
    selectedSleepType,
    selectedStrengths,
  };

  const { filterLabel } = CustomHook.useFilterState(filterValues);

  const selectButton = {
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

  const customRadio = {
    color: "#111827",
    "&.Mui-checked": {
      color: "#111827",
    },
  };

  const filterFormLabel = {
    color: "#111827 !important", // フォーカス時にも上書きされないように
    borderLeft: "8px solid #4CAF50",
    pl: 1,
  };

  const formBorder = {
    width: "100%",
    borderBottom: "1px solid #ccc",
    my: 1,
  };

  const formRadioGroup = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    mb: 2,
  };

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
                <FormControl key={type} sx={formControl}>
                  <Button
                    color="inherit"
                    disableRipple
                    disableElevation
                    sx={selectButton}
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
                  borderRadius: 3,
                }}
              >
                {/* 上部固定 */}
                <Box
                  sx={{
                    display: "flex",
                    position: "relative",
                    justifyContent: "center",
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
                  {/* キャンセル */}
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
                      transform: "translateY(-50%)", // ボタン自身の高さの半分だけ上にずらす
                      boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
                      color: "#111827",
                      backgroundColor: "#ffffff",
                      ":hover": {
                        backgroundColor: "#ffffff",
                        transform: "translateY(-50%) scale(0.95)", // ← 拡大しつつ中央位置キープ
                        boxShadow: "0px 2px 4px rgba(59, 49, 49, 0.4)",
                      },
                    }}
                  >
                    {modalType === "pokemonFilter" ? "リセット" : "キャンセル"}
                  </Button>
                </Box>

                <FormControl fullWidth sx={formControl}>
                  {modalType === "pokemon" && (
                    <Stack
                      spacing={1}
                      sx={{
                        width: "80%",
                        alignItems: "center",
                      }}
                    >
                      {/* OFFボタンは常に固定表示 */}
                      <Button
                        disableRipple
                        disableElevation
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
                        {filterLabel}
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
                        {getFilteredPokemonKeys().length === 0 ? (
                          <Typography sx={{ color: "#f44336" }}>
                            該当するポケモンが見つかりませんでした
                          </Typography>
                        ) : (
                          getFilteredPokemonKeys().map((label, index) => (
                            <Button
                              key={index}
                              color="inherit"
                              disableRipple
                              disableElevation
                              sx={selectButton}
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
                        width: "80%",
                      }}
                    >
                      <FormControl>
                        <FormLabel id="berry-label" sx={filterFormLabel}>
                          タイプ
                        </FormLabel>
                        <Box sx={formBorder} />
                        <RadioGroup
                          aria-labelledby="berry-label"
                          value={selectedBerry}
                          onChange={(e) => setSelectedBerry(e.target.value)}
                          name="berry"
                          sx={formRadioGroup}
                        >
                          <FormControlLabel
                            value="キーのみ"
                            control={<Radio sx={customRadio} />}
                            label="ノーマル"
                          />
                          <FormControlLabel
                            value="ヒメリのみ"
                            control={<Radio sx={customRadio} />}
                            label="ほのお"
                          />
                          <FormControlLabel
                            value="オレンのみ"
                            control={<Radio sx={customRadio} />}
                            label="みず"
                          />
                          <FormControlLabel
                            value="ウブのみ"
                            control={<Radio sx={customRadio} />}
                            label="でんき"
                          />
                          <FormControlLabel
                            value="ドリのみ"
                            control={<Radio sx={customRadio} />}
                            label="くさ"
                          />
                          <FormControlLabel
                            value="チーゴのみ"
                            control={<Radio sx={customRadio} />}
                            label="こおり"
                          />
                          <FormControlLabel
                            value="クラボのみ"
                            control={<Radio sx={customRadio} />}
                            label="かくとう"
                          />
                          <FormControlLabel
                            value="カゴのみ"
                            control={<Radio sx={customRadio} />}
                            label="どく"
                          />
                          <FormControlLabel
                            value="フィラのみ"
                            control={<Radio sx={customRadio} />}
                            label="じめん"
                          />
                          <FormControlLabel
                            value="シーヤのみ"
                            control={<Radio sx={customRadio} />}
                            label="ひこう"
                          />
                          <FormControlLabel
                            value="マゴのみ"
                            control={<Radio sx={customRadio} />}
                            label="エスパー"
                          />
                          <FormControlLabel
                            value="ラムのみ"
                            control={<Radio sx={customRadio} />}
                            label="むし"
                          />
                          <FormControlLabel
                            value="オボンのみ"
                            control={<Radio sx={customRadio} />}
                            label="いわ"
                          />
                          <FormControlLabel
                            value="ブリーのみ"
                            control={<Radio sx={customRadio} />}
                            label="ゴースト"
                          />
                          <FormControlLabel
                            value="ヤチェのみ"
                            control={<Radio sx={customRadio} />}
                            label="ドラゴン"
                          />
                          <FormControlLabel
                            value="ウイのみ"
                            control={<Radio sx={customRadio} />}
                            label="あく"
                          />
                          <FormControlLabel
                            value="ベリブのみ"
                            control={<Radio sx={customRadio} />}
                            label="はがね"
                          />
                          <FormControlLabel
                            value="モモンのみ"
                            control={<Radio sx={customRadio} />}
                            label="フェアリー"
                          />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel id="sleepType-label" sx={filterFormLabel}>
                          睡眠タイプ
                        </FormLabel>
                        <Box sx={formBorder} />

                        <RadioGroup
                          aria-labelledby="sleepType-label"
                          value={selectedSleepType}
                          onChange={(e) => setSelectedSleepType(e.target.value)}
                          name="sleepType"
                          sx={formRadioGroup}
                        >
                          <FormControlLabel
                            value="うとうと"
                            control={<Radio sx={customRadio} />}
                            label="うとうと"
                          />
                          <FormControlLabel
                            value="すやすや"
                            control={<Radio sx={customRadio} />}
                            label="すやすや"
                          />
                          <FormControlLabel
                            value="ぐっすり"
                            control={<Radio sx={customRadio} />}
                            label="ぐっすり"
                          />
                        </RadioGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel id="strengths-label" sx={filterFormLabel}>
                          睡眠タイプ
                        </FormLabel>
                        <Box sx={formBorder} />

                        <RadioGroup
                          aria-labelledby="strengths-label"
                          value={selectedStrengths}
                          onChange={(e) => setSelectedStrengths(e.target.value)}
                          name="strengths"
                          sx={formRadioGroup}
                        >
                          <FormControlLabel
                            value="きのみ"
                            control={<Radio sx={customRadio} />}
                            label="きのみ"
                          />
                          <FormControlLabel
                            value="食材"
                            control={<Radio sx={customRadio} />}
                            label="食材"
                          />
                          <FormControlLabel
                            value="スキル"
                            control={<Radio sx={customRadio} />}
                            label="スキル"
                          />
                          <FormControlLabel
                            value="オール"
                            control={<Radio sx={customRadio} />}
                            label="オール"
                          />
                        </RadioGroup>
                      </FormControl>
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
                          sx={selectButton}
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
                            sx={selectButton}
                            onClick={() => handleModalSelect("subSkill", label)}
                          >
                            {label}
                          </Button>
                        );
                      })}
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
              disableRipple
              disableElevation
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
