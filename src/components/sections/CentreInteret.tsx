"use client";

import * as React from "react";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import IceSkatingRoundedIcon from "@mui/icons-material/IceSkatingRounded";

const BROWN = "#5f412e";

const items = [
  {
    title: "LECTURE",
    description: "Policier, suspense, thriller.",
    icon: <MenuBookRoundedIcon />,
  },
  {
    title: "VOYAGE",
    description: "Road trip en van, découverte et liberté.",
    icon: <DirectionsCarFilledRoundedIcon />,
  },
  {
    title: "PATINAGE ARTISTIQUE",
    description: "Technique, grâce et persévérance.",
    icon: <IceSkatingRoundedIcon />,
  },
];

export default function CentreInteret() {
  return (
    <Box
      component="section"
      id="centreInteret"
      sx={{
        position: "relative",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Typography variant="h2" gutterBottom className="the-lego-movie-title">
        Centre interet
      </Typography>

      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 0, md: 0 } }}>
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} alignItems="stretch">
          {items.map((it) => (
            <Grid
              key={it.title}
              size={{ xs: 12, sm: 6, md: 4 }} // ✅ mobile=1 col, tablette=2 col, desktop=3 col
              sx={{ display: "flex" }}
            >
              <Paper
                elevation={0}
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",

                  // ✅ plus compact sur mobile
                  p: { xs: 2, sm: 3, md: 3.5 },
                  textAlign: "center",
                  borderRadius: { xs: 2.5, md: 3 },
                  border: "1px solid",
                  borderColor: "rgba(95, 65, 46, 0.12)",
                  boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
                  transition:
                    "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",

                  // ✅ hover seulement desktop (meilleur UX sur tactile)
                  "&:hover": {
                    transform: { xs: "none", md: "translateY(-3px)" },
                    boxShadow: {
                      xs: "0 10px 28px rgba(0,0,0,0.06)",
                      md: "0 14px 34px rgba(0,0,0,0.09)",
                    },
                    borderColor: {
                      xs: "rgba(95, 65, 46, 0.12)",
                      md: "rgba(95, 65, 46, 0.22)",
                    },
                  },
                }}
              >
                <Stack
                  spacing={{ xs: 1.2, md: 1.5 }}
                  alignItems="center"
                  justifyContent="center"
                  sx={{ flexGrow: 1 }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      // ✅ icône plus petite sur mobile
                      width: { xs: 60, sm: 72, md: 78 },
                      height: { xs: 60, sm: 72, md: 78 },
                      borderRadius: 3,
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "rgba(95, 65, 46, 0.08)",
                      color: BROWN,
                      "& svg": { fontSize: { xs: 34, sm: 40, md: 42 } },
                    }}
                  >
                    {it.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: BROWN,
                      fontSize: { xs: 14, sm: 15, md: 16 }, // ✅ plus petit sur mobile
                    }}
                  >
                    {it.title}
                  </Typography>

                  <Typography
                    sx={{
                      maxWidth: 360,
                      mx: "auto",
                      lineHeight: { xs: 1.55, md: 1.7 },
                      color: "rgba(95, 65, 46, 0.65)",
                      fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" }, // ✅ responsive
                    }}
                  >
                    {it.description}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
