"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../types/theme";
import Header from "@/components/Header/page";
import Section from "@/components/Section/page";

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
        <main>
          <Header />

          <Section />
          {children}
        </main>
      </ThemeProvider>
    </>
  );
}
