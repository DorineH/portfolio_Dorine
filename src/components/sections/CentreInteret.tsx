// components/CentreInteret.tsx
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
    <Box component="section" sx={{ py: { xs: 5, md: 7 } }}>
      <Typography variant="h2" gutterBottom className="the-lego-movie-title">
        Centre Interet
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="stretch">
          {items.map((it) => (
            <Grid key={it.title} item xs={12} md={4} sx={{ display: "flex" }}>
              <Paper
                elevation={0}
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  p: { xs: 3, md: 3.5 },
                  textAlign: "center",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "rgba(95, 65, 46, 0.12)",
                  boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
                  transition:
                    "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 14px 34px rgba(0,0,0,0.09)",
                    borderColor: "rgba(95, 65, 46, 0.22)",
                  },
                }}
              >
                <Stack
                  spacing={1.5}
                  alignItems="center"
                  justifyContent="center"
                  sx={{ flexGrow: 1 }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      width: 78,
                      height: 78,
                      borderRadius: 3,
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "rgba(95, 65, 46, 0.08)",
                      color: BROWN,
                      "& svg": { fontSize: 42 },
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
                    }}
                  >
                    {it.title}
                  </Typography>

                  <Typography
                    sx={{
                      maxWidth: 360,
                      mx: "auto",
                      lineHeight: 1.7,
                      color: "rgba(95, 65, 46, 0.65)",
                      fontSize: "1.05rem",
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
