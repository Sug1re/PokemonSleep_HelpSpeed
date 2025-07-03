"use client";

import React, { useMemo } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  numberGroups3,
  numberGroups4,
  numberGroups5,
  numberGroups6,
  sleepTypeGroups3,
  strengthsGroups4,
  skillGroups2,
  skillGroups3,
  skillGroups4,
  typeGroups5,
  typeGroups7,
  typeGroups9,
} from "@/constants/PokemonDataBase";
import * as styles from "@/styles/pokemonDataBase";

const PokemonDataBase = () => {
  const router = useRouter();

  const isWideScreen1 = useMediaQuery("(min-width:820px)");
  const isWideScreen2 = useMediaQuery("(min-width:690px)");
  const isWideScreen3 = useMediaQuery("(min-width:550px)");

  const { numberGroups, typeGroups, skillGroups } = useMemo(() => {
    const number = isWideScreen1
      ? numberGroups6
      : isWideScreen2
      ? numberGroups5
      : isWideScreen3
      ? numberGroups4
      : numberGroups3;

    const type =
      isWideScreen1 || isWideScreen2
        ? typeGroups9
        : isWideScreen3
        ? typeGroups7
        : typeGroups5;

    const skill =
      isWideScreen1 || isWideScreen2
        ? skillGroups4
        : isWideScreen3
        ? skillGroups3
        : skillGroups2;

    return { numberGroups: number, typeGroups: type, skillGroups: skill };
  }, [isWideScreen1, isWideScreen2, isWideScreen3]);

  const handleRangeClick = (range: string) => {
    const path = range.replace("~", "-");
    router.push(`pages/zukan/${path}`);
  };

  const renderGroupSection = (
    title: string,
    groups: string[][],
    prefix?: string
  ) => (
    <Box>
      <Typography sx={styles.sectionTitleSx}>{title}</Typography>
      <Box sx={styles.groupBoxSx}>
        {groups.map((group, index) => (
          <Box key={index} sx={styles.groupRowSx(index)}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
              {group.map((item) => (
                <Typography
                  key={item}
                  sx={styles.linkSx}
                  onClick={() => handleRangeClick(item)}
                >
                  {prefix ? `${prefix}${item}` : item}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ pb: 4 }}>
      <Typography
        sx={{
          ...styles.sectionTitleSx,
          fontSize: "1rem",
          mb: 2,
        }}
      >
        ポケモン図鑑
      </Typography>

      {renderGroupSection("ポケモン一覧", numberGroups, "No.")}
      {renderGroupSection("タイプ別", typeGroups)}
      {renderGroupSection("睡眠タイプ別", sleepTypeGroups3)}
      {renderGroupSection("とくいなもの別", strengthsGroups4)}
      {renderGroupSection("メインスキル別", skillGroups)}
    </Box>
  );
};

export default PokemonDataBase;
