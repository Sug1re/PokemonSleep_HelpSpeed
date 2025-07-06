"use client";

import { Box, Container, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

const DynamicPage = () => {
  const params = useParams();
  const rangeParam = params?.range;

  const formattedRange =
    typeof rangeParam === "string"
      ? decodeURIComponent(rangeParam).replace("-", "〜")
      : "";

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
