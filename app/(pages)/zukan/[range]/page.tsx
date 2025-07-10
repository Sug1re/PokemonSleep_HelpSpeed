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
import * as CustomHook from "@/hooks/index";
import * as styles from "@/styles/pokemonDataBase";
import { useParams } from "next/navigation";
import { getFormattedRange } from "@/utils/formatRange";

import { filterPokemonData } from "@/lib/filterPokemonData";

const DynamicPage = () => {
  const params = useParams();
  const rangeParam = params?.range;
  const formattedRange = getFormattedRange(rangeParam);
  const { pokemonData } = CustomHook.usePokemonData();

  if (!pokemonData || Object.keys(pokemonData).length === 0) {
    return (
      <Container maxWidth="md" sx={{ pb: 4 }}>
        <Box sx={{ ...styles.sectionTitleSx, mb: 2 }}>
          <Typography>ステータス：{formattedRange}</Typography>
        </Box>
        <Typography variant="h6" sx={{ color: "#2196f3", textAlign: "center" }}>
          データを読み込み中です...
        </Typography>
      </Container>
    );
  }
  const filteredPokemonData = filterPokemonData(pokemonData, formattedRange);

  return (
    <>
      <Container maxWidth="md" sx={{ pb: 4 }}>
        <Box sx={{ ...styles.sectionTitleSx, mb: 2 }}>
          <Typography>ステータス：{formattedRange}</Typography>
        </Box>

        {filteredPokemonData.length > 0 && (
          <TableContainer>
            <Table
              sx={{
                minWidth: 900,
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
                {filteredPokemonData.map(([name, data], index) => (
                  <TableRow
                    key={data.number}
                    sx={{
                      color: "#ffffff",
                      backgroundColor: index % 2 === 0 ? "#111827" : "#1f2937",
                      "& td, & th": {
                        color: "#ffffff",
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {data.number}
                    </TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{data.sleepType}</TableCell>
                    <TableCell>{data.strengths}</TableCell>
                    <TableCell>{data.berry}</TableCell>
                    <TableCell>{data.mainSkill}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {filteredPokemonData.length === 0 && (
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="body1" sx={{ color: "#f44336" }}>
              「{formattedRange}」に該当するポケモンは見つかりませんでした。
            </Typography>
          </Box>
        )}
      </Container>
    </>
  );
};

export default DynamicPage;
