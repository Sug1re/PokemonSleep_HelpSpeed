"use client";

import React, { useMemo } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import * as styles from "@/styles/pokemonDataBase";
import { getResponsiveGroups } from "@/lib/responsiveGroups";

const PokemonDataBase = () => {
  const router = useRouter();

  const isWideScreen1 = useMediaQuery("(min-width:820px)");
  const isWideScreen2 = useMediaQuery("(min-width:690px)");
  const isWideScreen3 = useMediaQuery("(min-width:550px)");
  const isWideScreen4 = useMediaQuery("(min-width:420px)");

  const {
    numberGroups,
    typeGroups,
    sleepTypeGroups,
    strengthsGroups,
    skillGroups,
  } = useMemo(
    () =>
      getResponsiveGroups(
        isWideScreen1,
        isWideScreen2,
        isWideScreen3,
        isWideScreen4
      ),
    [isWideScreen1, isWideScreen2, isWideScreen3, isWideScreen4]
  );

  const handleRangeClick = (range: string) => {
    const path = range.replace("〜", "-");
    router.push(`/zukan/${path}`);
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
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
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
      {renderGroupSection("睡眠タイプ別", sleepTypeGroups)}
      {renderGroupSection("とくいなもの別", strengthsGroups)}
      {renderGroupSection("メインスキル別", skillGroups)}
    </Box>
  );
};

export default PokemonDataBase;
