"use client";

import { Box, Container, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

const DynamicPage = () => {
  const params = useParams();
  const rangeParam = params?.range;

  // 例: "001-050" → "001~050"
  const formattedRange =
    typeof rangeParam === "string" ? rangeParam.replace("-", "〜") : "";

  return (
    <>
      <Container maxWidth="md">
        <Typography>ステータス一覧</Typography>
        <Typography>図鑑ページ：{formattedRange}</Typography>
      </Container>
    </>
  );
};

export default DynamicPage;
