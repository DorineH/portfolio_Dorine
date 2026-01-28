"use client";

import {
  Box,
  Card,
  CardContent,
  IconButton,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import React from "react";

const groups = [
  {
    title: "Front‑end",
    items: ["JavaScript", "TypeScript", "Next.js", "React", "Redux", "MUI"],
  },
  {
    title: "Back‑end",
    items: ["Node.js", "NestJS", "Python", "TypeORM", "Sequelize"],
  },
  {
    title: "Base de données",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Test unitaire / fonctionnels / CI/CD",
    items: ["Cypress", "Jest", "Cucumber", "CircleCI"],
  },
  {
    title: "Qualité et intégration",
    items: ["ESLint", "Prettier"],
  },
  {
    title: "Tests & CI/CD",
    items: ["Cypress", "Jest", "Cucumber", "CircleCI"],
  },
  {
    title: "Sécurité",
    items: ["JWT", "OAuth2"],
  },
  {
    title: "Cloud et déploiement",
    items: ["Microsoft Azure", "Google Cloud", "Docker", "Vercel"],
  },
  {
    title: "Outils",
    items: ["Git", "Figma", "Notion", "VS Code", "Docker", "ChatGPT", "Claude"],
  },
  {
    title: "Méthodologie",
    items: [
      "Agile/Scrum",
      "UML",
      "Gestion de projet", "(Gantt, budgétisation, cahier des charges)",
    ],
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

export default function Skills() {
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const reduceMotion = usePrefersReducedMotion();

  const scrollByCards = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;

    // largeur d’une card + gap (approx)
    const firstCard = el.querySelector<HTMLElement>("[data-skill-card]");
    const cardW = firstCard?.offsetWidth ?? 360;
    const gap = 16;

    el.scrollBy({
      left: dir * (cardW + gap),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <Box component="section" id="skills" sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          mb: 2,
        }}
      >
        <Typography variant="h2" className="the-lego-movie-title">
          Competences cles
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            aria-label="Faire défiler vers la gauche"
            onClick={() => scrollByCards(-1)}
          >
            <ChevronLeftRoundedIcon />
          </IconButton>
          <IconButton
            aria-label="Faire défiler vers la droite"
            onClick={() => scrollByCards(1)}
          >
            <ChevronRightRoundedIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Track */}
      <Box
        ref={trackRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          pb: 1,
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": { height: 10 },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: 999,
          },
          px: { xs: 0.5, sm: 1 },
        }}
      >
        {groups.map((g, idx) => {
          const tilt = idx % 2 === 0 ? -1.2 : 1.2;
          return (
            <Card
              key={g.title}
              data-skill-card
              variant="outlined"
              sx={{
                flex: "0 0 auto",
                width: { xs: 280, sm: 320, md: 360 },
                scrollSnapAlign: "start",
                borderRadius: 3,
                bgcolor: "#fff",
                borderColor: "rgba(0,0,0,0.08)",
                transform: `rotate(${tilt}deg)`,
                transition:
                  "transform 160ms ease, box-shadow 160ms ease, translate 160ms ease",
                "&:hover": {
                  transform: `rotate(0deg) translateY(-6px)`,
                  boxShadow: "0 18px 46px rgba(0,0,0,0.18)",
                },
                p: 1.5,
              }}
            >
              {/* Zone “photo” */}
              <Box
                sx={{
                  borderRadius: 2,
                  p: 1.5,
                  minHeight: 140,
                  bgcolor: "rgba(0,0,0,0.03)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {g.items.map((i) => (
                    <Chip
                      key={i}
                      label={i}
                      size="small"
                      sx={{
                        borderRadius: 999,
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              {/* Légende (titre en bas) */}
              <CardContent sx={{ pb: "14px !important" }}>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    textAlign: "center",
                    fontWeight: 800,
                    letterSpacing: 0.2,
                    color: "rgba(126, 86, 60, 1)"
                  }}
                >
                  {g.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ display: "block", textAlign: "center", opacity: 0.65 }}
                >
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
