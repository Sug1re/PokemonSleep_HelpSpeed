"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../app/types/theme";
import Header from "./Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GoogleAnalytics gaId="G-TL1C6DW00G" />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
}
