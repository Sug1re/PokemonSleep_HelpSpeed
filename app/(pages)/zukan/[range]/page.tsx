"use client";

import React from "react";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import * as styles from "@/styles/pokemonDataBase";
import { useParams } from "next/navigation";

function createData(
  number: number,
  name: string,
  sleepType: string,
  strengths: string,
  berry: string,
  mainSkill: string
) {
  return { number, name, sleepType, strengths, berry, mainSkill };
}

const rows = [
  createData(1, "フシギダネ", "うとうと", "食材", "ドリのみ", "食材ゲットS"),
  createData(4, "ヒトカゲ", "すやすや", "食材", "ヒメリのみ", "食材ゲットS"),
  createData(
    7,
    "ゼニガメ",
    "ぐっすり",
    "食材",
    "オレンのみ",
    "ゆめのかけらゲットS"
  ),
];

const DynamicPage = () => {
  const params = useParams();
  const rangeParam = params?.range;

  const formattedRange =
    typeof rangeParam === "string"
      ? decodeURIComponent(rangeParam).includes("-")
        ? "No." + decodeURIComponent(rangeParam).replace("-", "〜")
        : decodeURIComponent(rangeParam)
      : "";

  return (
    <>
      <Container maxWidth="md" sx={{ pb: 4 }}>
        <Box sx={{ ...styles.sectionTitleSx, mb: 2 }}>
          <Typography>ステータス：{formattedRange}</Typography>
        </Box>

        <TableContainer>
          <Table
            sx={{
              minWidth: 700,
              "& td, & th": {
                borderBottom: "none",
              },
            }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow sx={{ borderBottom: 10, borderColor: "#b6b7b9" }}>
                <TableCell sx={styles.tableSx}>No.</TableCell>
                <TableCell sx={styles.tableSx}>ポケモン</TableCell>
                <TableCell sx={styles.tableSx}>睡眠タイプ</TableCell>
                <TableCell sx={styles.tableSx}>とくいなもの</TableCell>
                <TableCell sx={styles.tableSx}>きのみ</TableCell>
                <TableCell sx={styles.tableSx}>メインスキル</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    color: "#ffffff",
                    backgroundColor: index % 2 === 0 ? "#111827" : "#1f2937",
                    "& td, & th": {
                      color: "#ffffff",
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.number}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.sleepType}</TableCell>
                  <TableCell>{row.strengths}</TableCell>
                  <TableCell>{row.berry}</TableCell>
                  <TableCell>{row.mainSkill}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default DynamicPage;
