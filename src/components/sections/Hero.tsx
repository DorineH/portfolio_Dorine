"use client";

import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import DownloadIcon from "@mui/icons-material/Download";

const legoColors = [
  "#f6c1d9", // pastel pink
  "#cfe9ff", // pastel blue
  "#d7f7d9", // pastel mint
  "#fff3bf", // pastel yellow
  "#e6d8ff", // pastel lavender
  "#ffe0cc", // pastel peach
];

function LegoChip({
  label,
  colorIndex = 0,
}: {
  label: string;
  colorIndex?: number;
}) {
  const bg = legoColors[colorIndex % legoColors.length];
  // const textColor = "#111"; // dark text for good contrast on pastel backgrounds

  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        bgcolor: bg,
        color: "#111",
        fontWeight: 700,
        borderRadius: "10px",
        px: 1.5,
        py: 0.6,
        mr: 1,
        mb: 1,
        boxShadow: "0 3px 0 rgba(0,0,0,0.12)",
      }}
    >
      {/* <Box component="span" sx={{ pl: 2 }}> */}
      {label}
      {/* </Box> */}
    </Box>
  );
}

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Photo */}
      <Box sx={{ flex: "0 0 auto" }}>
        <Avatar
          src="/photo_cv.jpg"
          alt="Portrait de Dorine Henry"
          sx={{
            width: 240,
            height: 240,
            mx: { xs: "auto", md: 0 },
            border: (t) => `6px solid ${t.palette.primary.main}`,
          }}
        />
      </Box>

      {/* Texte */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="h1" gutterBottom className="domino-title">
          Développeuse Full-Stack JS/TS
        </Typography>

        <Typography sx={{ opacity: 0.9, mb: 2 }}>
          Développeuse web full-stack JavaScript/TypeScript (React, Next.js,
          NestJS, Node.js) avec plus de 2 ans d&apos;expérience, je conçois des
          applications performantes et évolutives en alliant rigueur technique et sens produit.
          Passionnée par les technologies modernes et l’innovation, j’aime transformer des idées en solutions concrètes, de la preuve de concept jusqu’à la mise en production.
        </Typography>

        <Stack direction="row" flexWrap="wrap" mb={3}>
          {[
            "Next.js",
            "React",
            "TypeScript",
            "NestJS",
            "PostgreSQL",
            "MongoDB",
            "Cypress",
            "Jest",
          ].map((s, i) => (
            <LegoChip key={s} label={s} colorIndex={i} />
          ))}
        </Stack>

        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button href="#contact">Me contacter</Button>
          <Button
            href="https://github.com/DorineH"
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            endIcon={<LaunchIcon />}
          >
            GitHub
          </Button>
          <Button
            href="/Cv_Dorine_Henry.pdf"
            variant="outlined"
            endIcon={<DownloadIcon />}
          >
            Télécharger mon CV
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
