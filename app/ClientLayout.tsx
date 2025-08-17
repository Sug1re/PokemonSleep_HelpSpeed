"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../types/theme";
import Section from "@/components/Section/page";
import Header from "@/components/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
