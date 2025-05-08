"use client";

import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  MenuItem,
  Button,
  Typography,
  Box,
  Stack,
  Container,
} from "@mui/material";
import { GoogleAnalytics } from "@next/third-parties/google";

//使用する関数一覧
const FetchCalculation = () => {
  <GoogleAnalytics gaId="G-TL1C6DW00G" />;

  const [formData, setFormData] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);
    try {
      const form = new FormData();
      form.append("num1", formData.num1);
      form.append("num2", formData.num2);
      form.append("num3", formData.num3);
      form.append("num4", formData.num4);

      const response = await axios.post("http://localhost:9090/otesupi", form);
      setResult(response.data);
    } catch (err: any) {
      setError(err.response?.data?.error || "エラーが発生しました");
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ pt: 24 }}>
          <Typography variant="h5" gutterBottom>
            おてスピ計
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="ポケモン"
                name="num1"
                value={formData.num1}
                onChange={handleChange}
                required
              />
              <TextField
                label="性格"
                name="num2"
                value={formData.num2}
                onChange={handleChange}
                select
                required
              >
                <MenuItem value="1">おてつだいスピード上昇</MenuItem>
                <MenuItem value="2">おてつだいスピード下降</MenuItem>
                <MenuItem value="3">無補正</MenuItem>
              </TextField>
              <TextField
                label="サブスキル：おてつだいスピード"
                name="num3"
                value={formData.num3}
                onChange={handleChange}
                select
                required
              >
                <MenuItem value="1">S</MenuItem>
                <MenuItem value="2">M</MenuItem>
                <MenuItem value="3">S,M</MenuItem>
                <MenuItem value="4">なし</MenuItem>
              </TextField>
              <TextField
                label="レベル"
                name="num4"
                value={formData.num4}
                onChange={handleChange}
                required
              />
              <Button type="submit" variant="contained" color="primary">
                計算する
              </Button>
            </Stack>
          </form>

          {result && (
            <Box mt={3}>
              <Typography variant="subtitle1">結果：</Typography>
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </Box>
          )}

          {error && (
            <Box mt={3} color="error.main">
              <Typography color="error">{error}</Typography>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default FetchCalculation;
