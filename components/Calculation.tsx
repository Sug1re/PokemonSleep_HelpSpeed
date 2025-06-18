"use client";

import React, { use, useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Box,
  Stack,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Select,
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

  const { isOpen, modalType, handleOpen, handleClose } = CustomHook.useModal();

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

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    try {
      const response = await axios.post(
        "https://pokemon-sleep-api-1059650888282.asia-northeast1.run.app/pokemonSpeed",
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

  const inputLabel = {
    color: "#111827",
    "&.Mui-focused": {
      color: "#111827", // フォーカス時の色
    },
  };

  const select = {
    backgroundColor: "#ffffff",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffffff", // 通常時の枠線色
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgb(25, 61, 96)", // ホバー時の枠線色
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#193d60", // フォーカス時の枠線色
    },
    color: "#111827", // テキストカラー
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

            {["ポケモン", "性格", "サブスキル"].map((label, index) => {
              const type = ["pokemon", "personality", "subSkill"][index] as
                | "pokemon"
                | "personality"
                | "subSkill";
              return (
                <FormControl key={type}>
                  <Button
                    color="inherit"
                    disableRipple
                    disableElevation
                    sx={button}
                    onClick={() => handleOpen(type)}
                  >
                    {label}
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
                  width: 330,
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
              </Card>
            </Modal>

            {/* ポケモン */}
            <TextField
              label="ポケモン"
              name="pokemonName"
              value={formData.pokemonName}
              onChange={handleChange}
              required
              sx={select}
            />

            {/* 性格 */}
            <FormControl>
              <InputLabel id="personality-label" sx={inputLabel}>
                性格
              </InputLabel>
              <Select
                labelId="personality-label"
                id="personality-select"
                label="性格"
                name="personality"
                value={formData.personality}
                onChange={handleChange}
                required
                sx={select}
              >
                <MenuItem value={1}>
                  おてつだいスピード
                  <span style={{ color: "#f44336" }}>▲▲</span>
                </MenuItem>
                <MenuItem value={2}>
                  おてつだいスピード
                  <span style={{ color: "#2196f3" }}>▼▼</span>
                </MenuItem>
                <MenuItem value={3}>無補正</MenuItem>
              </Select>
            </FormControl>

            {/* サブスキル */}
            <FormControl>
              <InputLabel id="sub-skill-label" sx={inputLabel}>
                サブスキル
              </InputLabel>
              <Select
                labelId="sub-skill-label"
                id="sub-skill-select"
                label="サブスキル"
                name="subSkill"
                value={formData.subSkill}
                onChange={handleChange}
                required
                sx={select}
              >
                <MenuItem value={1}>おてつだいスピードS</MenuItem>
                <MenuItem value={2}>おてつだいスピードM</MenuItem>
                <MenuItem value={3}>
                  おてつだいスピードS おてつだいスピードM
                </MenuItem>
                <MenuItem value={4}>なし</MenuItem>
              </Select>
            </FormControl>

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
