import React from "react";
import * as Components from "@/components/index";
import { Container, Typography } from "@mui/material";

const HOME = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Components.Calculator />

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 4,
            a: {
              color: "#2196f3",
              textDecoration: "none",
              "&:hover": {
                color: "#f44336",
              },
            },
          }}
        >
          引用元：
          <a
            href="https://wikiwiki.jp/poke_sleep/%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E3%81%AE%E4%B8%80%E8%A6%A7"
            target="_blank"
            rel="noopener noreferrer"
          >
            ポケモンスリープ攻略・検証wiki
          </a>
        </Typography>
      </Container>
    </>
  );
};

export default HOME;
