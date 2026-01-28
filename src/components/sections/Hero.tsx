"use client";

import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
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
        alignItems: { xs: "center", sm: "flex-start" },
        gap: 6,
        flexDirection: { xs: "column", sm: "row" },
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      {/* Photo */}
      <Box
        sx={{
          flex: "0 0 auto",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Avatar
          src="/photo_cv.jpg"
          alt="Portrait de Dorine Henry"
          sx={{
            width: { sm: 140, md: 200, lg: 240 },
            height: { sm: 140, md: 200, lg: 240 },
            border: (t) => `6px solid ${t.palette.primary.main}`,
          }}
        />
      </Box>

      {/* Texte */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          variant="h1"
          gutterBottom
          className="domino-title"
          textAlign={"justify"}
        >
          Développeuse web freelance — <br className="desktop-break" /> je crée
          des sites modernes et performants
        </Typography>

        <Typography sx={{ opacity: 0.9, mb: 2, textAlign: "justify" }}>
          Développeuse web freelance spécialisée dans la création de sites
          internet modernes et performants pour indépendants et petites
          entreprises. J&apos;accompagne mes clients de l&apos;idée à la mise en
          ligne en concevant des sites clairs, rapides et adaptés à leurs
          besoins. Mon objectif : vous aider à développer votre visibilité en
          ligne avec un site professionnel et efficace.
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          mb={3}
          justifyContent={{ xs: "center", sm: "flex-start" }}
        >
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

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1.5, sm: 2 }}
          sx={{
            width: "100%",
            alignItems: { xs: "stretch", sm: "center" },
            justifyContent: { xs: "center", sm: "flex-start" },
          }}
        >
          <Button
            href="#contact"
            fullWidth
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            Me contacter
          </Button>
          <Button
            href="https://github.com/DorineH"
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            endIcon={<LaunchIcon />}
            fullWidth
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            GitHub
          </Button>
          <Button
            href="/Cv_Dorine_Henry.pdf"
            variant="outlined"
            endIcon={<DownloadIcon />}
            fullWidth
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            Télécharger mon CV
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
