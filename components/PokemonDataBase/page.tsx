"use client";

import React from "react";
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
  typeGroups4,
  typeGroups6,
  typeGroups7,
  typeGroups9,
} from "@/constants/PokemonDataBase";

const PokemonDataBase = () => {
  const router = useRouter();

  const isWideScreen1 = useMediaQuery("(min-width:675px)");
  const isWideScreen2 = useMediaQuery("(min-width:565px)");
  const isWideScreen3 = useMediaQuery("(min-width:455px)");
  const isWideScreen4 = useMediaQuery("(min-width:345px)");

  let numberGroups;

  if (isWideScreen1) {
    numberGroups = numberGroups6;
  } else if (isWideScreen2) {
    numberGroups = numberGroups5;
  } else if (isWideScreen3) {
    numberGroups = numberGroups4;
  } else if (isWideScreen4) {
    numberGroups = numberGroups3;
  } else {
    numberGroups = numberGroups3;
  }

  let typeGroups;

  if (isWideScreen1) {
    typeGroups = typeGroups9;
  } else if (isWideScreen2) {
    typeGroups = typeGroups7;
  } else if (isWideScreen3) {
    typeGroups = typeGroups6;
  } else {
    typeGroups = typeGroups4;
  }

  let sleepTypeGroups = sleepTypeGroups3;

  let strengthsGroups = strengthsGroups4;

  let skillGroups;

  if (isWideScreen1) {
    skillGroups = skillGroups4;
  } else if (isWideScreen2) {
    skillGroups = skillGroups3;
  } else {
    skillGroups = skillGroups2;
  }

  const handleRangeClick = (range: string) => {
    const path = range.replace("~", "-");
    router.push(`pages/zukan/${path}`);
  };

  return (
    <>
      <Box sx={{ pb: 4 }}>
        <Typography
          sx={{
            py: 2,
            pl: 1,
            mb: 2,
            borderRadius: 4,
            color: "#ffffff",
            backgroundColor: "#111827",
          }}
        >
          ポケモン図鑑
        </Typography>

        <Box>
          <Typography
            sx={{
              py: 2,
              pl: 1,
              mb: 0.5,
              borderRadius: 4,
              fontSize: "0.8rem",
              color: "#ffffff",
              backgroundColor: "#111827",
            }}
          >
            ポケモン一覧
          </Typography>
          <Box sx={{ mb: 3, border: "0.5px solid #ffffff" }}>
            {numberGroups.map((group, index) => (
              <Box
                key={index}
                sx={{
                  px: 2,
                  py: 1,
                  gap: 1,
                  color: "#ffffff",
                  backgroundColor: index % 2 === 0 ? "#111827" : "#1f2937",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                  {group.map((range) => (
                    <Typography
                      key={range}
                      sx={{
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#2196f3",
                        },
                      }}
                      onClick={() => handleRangeClick(range)}
                    >
                      {range}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              py: 2,
              pl: 1,
              mb: 0.5,
              borderRadius: 4,
              fontSize: "0.8rem",
              color: "#ffffff",
              backgroundColor: "#111827",
            }}
          >
            タイプ別
          </Typography>
          <Box sx={{ mb: 3, border: "0.5px solid #ffffff" }}>
            {typeGroups.map((group, index) => (
              <Box
                key={index}
                sx={{
                  px: 2,
                  py: 1,
                  gap: 1,
                  color: "#ffffff",
                  backgroundColor: index % 2 === 0 ? "#111827" : "#1f2937",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                  {group.map((range) => (
                    <Typography
                      key={range}
                      sx={{
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#2196f3",
                        },
                      }}
                      onClick={() => handleRangeClick(range)}
                    >
                      {range}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              py: 2,
              pl: 1,
              mb: 0.5,
              borderRadius: 4,
              fontSize: "0.8rem",
              color: "#ffffff",
              backgroundColor: "#111827",
            }}
          >
            睡眠タイプ別
          </Typography>
          <Box sx={{ mb: 3, border: "0.5px solid #ffffff" }}>
            {sleepTypeGroups.map((group, index) => (
              <Box
                key={index}
                sx={{
                  px: 2,
                  py: 1,
                  gap: 1,
                  color: "#ffffff",
                  backgroundColor: index % 2 === 0 ? "#111827" : "#1f2937",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                  {group.map((range) => (
                    <Typography
                      key={range}
                      sx={{
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#2196f3",
                        },
                      }}
                      onClick={() => handleRangeClick(range)}
                    >
                      {range}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              py: 2,
              pl: 1,
              mb: 0.5,
              borderRadius: 4,
              fontSize: "0.8rem",
              color: "#ffffff",
              backgroundColor: "#111827",
            }}
          >
            とくいなもの別
          </Typography>
          <Box sx={{ mb: 3, border: "0.5px solid #ffffff" }}>
            {strengthsGroups.map((group, index) => (
              <Box
                key={index}
                sx={{
                  px: 2,
                  py: 1,
                  gap: 1,
                  color: "#ffffff",
                  backgroundColor: index % 2 === 0 ? "#111827" : "#1f2937",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                  {group.map((range) => (
                    <Typography
                      key={range}
                      sx={{
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#2196f3",
                        },
                      }}
                      onClick={() => handleRangeClick(range)}
                    >
                      {range}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              py: 2,
              pl: 1,
              mb: 0.5,
              borderRadius: 4,
              fontSize: "0.8rem",
              color: "#ffffff",
              backgroundColor: "#111827",
            }}
          >
            メインスキル別
          </Typography>
          <Box sx={{ border: "0.5px solid #ffffff" }}>
            {skillGroups.map((group, index) => (
              <Box
                key={index}
                sx={{
                  px: 2,
                  py: 1,
                  gap: 1,
                  color: "#ffffff",
                  backgroundColor: index % 2 === 0 ? "#111827" : "#1f2937",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                  {group.map((range) => (
                    <Typography
                      key={range}
                      sx={{
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#2196f3",
                        },
                      }}
                      onClick={() => handleRangeClick(range)}
                    >
                      {range}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PokemonDataBase;
