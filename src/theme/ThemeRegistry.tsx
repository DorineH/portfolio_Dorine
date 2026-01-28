"use client"

import { CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import React from "react";

// ---- COLORS ----
// Remplace les couleurs par celles de ton CV (hex exact)
const PRIMARY_MAIN = "#5f412e"; 
const PRIMARY_DARK = "#7b5b4c";
const PRIMARY_LIGHT = "#9b725e";
const ACCENT = "#E11D48"; // ex: framboise/rose
const NEUTRAL = "#0F172A"; // gris ardoise pour texte

const createEmotionCache = () => {
  return createCache({ key: "mui", prepend: true });
};

const makeTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: PRIMARY_MAIN, dark: PRIMARY_DARK, light: PRIMARY_LIGHT },
      secondary: { main: ACCENT },
      text: { primary: NEUTRAL },
      background: {
        default: mode === "light" ? "#F8FAFC" : "#0B1220",
        paper: mode === "light" ? "#FFFFFF" : "#0F172A",
      },
    },
    shape: { borderRadius: 14 },
    typography: {
      h1: { fontWeight: 800, fontSize: "clamp(2rem,4.2vw,3.25rem)" },
      h2: { fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2.25rem)" },
      h3: { fontWeight: 700 },
      button: { textTransform: "none", fontWeight: 700 },
    },
    components: {
      MuiButton: { defaultProps: { variant: "contained" } },
      MuiContainer: { defaultProps: { maxWidth: "lg" } },
    },
  });

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode] = React.useState<PaletteMode>("light");
  const cache = React.useMemo(() => createEmotionCache(), []);
  const theme = React.useMemo(() => makeTheme(mode), [mode]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
