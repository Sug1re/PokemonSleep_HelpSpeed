"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Box,
  Stack,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Select,
  Slider,
  Grid,
  Input,
} from "@mui/material";
import { GoogleAnalytics } from "@next/third-parties/google";

const FetchCalculation = () => {
  // GoogleAnalytics コンポーネントは return 内に移動すべき
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
      const response = await axios.post("http://localhost:9090/pokemonSpeed", {
        pokemonName: formData.pokemonName,
        personality: formData.personality,
        subSkill: formData.subSkill,
        level: formData.level,
      });

      setResult(response.data);
    } catch (err: any) {
      setError(err.response?.data?.error || "エラーが発生しました");
    }
  };

  useEffect(() => {
    console.log("API結果:", result);
  }, [result]);

  return (
    <>
      <GoogleAnalytics gaId="G-TL1C6DW00G" />
      <Container maxWidth="sm">
        <Box sx={{ pt: 24 }}>
          <Typography variant="h5" gutterBottom>
            おてスピ計
          </Typography>
          <form onSubmit={handleSubmit} method="post">
            <Stack spacing={2}>
              {/* ポケモン */}
              <TextField
                label="ポケモン"
                name="pokemonName"
                value={formData.pokemonName}
                onChange={handleChange}
                required
              />
              {/* 性格 */}
              <FormControl>
                <InputLabel id="personality-label">性格</InputLabel>
                <Select
                  labelId="personality-label"
                  id="personality-select"
                  label="性格"
                  name="personality"
                  value={formData.personality}
                  onChange={handleChange}
                  required
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
                <InputLabel id="sub-skill-label">サブスキル</InputLabel>
                <Select
                  labelId="sub-skill-label"
                  id="sub-skill-select"
                  label="サブスキル"
                  name="subSkill"
                  value={formData.subSkill}
                  onChange={handleChange}
                  required
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
              <Button type="submit" variant="contained" color="primary">
                計算する
              </Button>
            </Stack>
          </form>

          {result && (
            <Box mt={3}>
              <Typography variant="subtitle1">
                結果：
                {/* <br />
                {result.name}
                <br />
                {result.speed}
                <br />
                {result.personality_value}
                <br />
                {result.sub_skill_value}
                <br />
                {result.level}
                <br /> */}
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
      </Container>
    </>
  );
};

export default FetchCalculation;
