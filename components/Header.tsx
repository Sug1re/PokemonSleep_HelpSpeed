"use client";

import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 6 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              backgroundColor: "#111827",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Button
              onClick={handleClick}
              color="inherit"
              sx={{
                textTransform: "none",
                backgroundColor: "transparent",
                ":hover": {
                  backgroundColor: "transparent",
                },
                boxShadow: "none",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "#fff",
                }}
              >
                おてスピ計
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
