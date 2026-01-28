"use client";

import React from "react";
import { Box, Card, Typography, useMediaQuery, useTheme } from "@mui/material";

const groups = [
  {
    title: "Front-end",
    items: ["JavaScript", "TypeScript", "Next.js", "React"], // , "Redux", "MUI"
  },
  {
    title: "Back-end",
    items: ["Node.js", "NestJS", "Python"],
  },
  {
    title: "ORM",
    items: ["TypeORM", "Sequelize"],
  },
  {
    title: "Base de données",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Qualité et intégration",
    items: ["ESLint", "Prettier"],
  },
  {
    title: "Test unitaire / fonctionnel",
    items: ["Cypress", "Cucumber", "Jest"],
  },
  // {
  //   title: "CI/CD",
  //   items: ["Jenkins", "CircleCI"]
  // },
  {
    title: "Sécurité",
    items: ["JWT", "OAuth2"],
  },
  {
    title: "Cloud et déploiement",
    items: ["Render", "Vercel", "Docker", "Microsoft Azure"],
  },
  {
    title: "Outils",
    items: ["Figma", "Notion", "VS Code", "Git"], // , "ChatGPT", "Claude"
  },
  // {
  //   title: "Méthodologie",
  //   items: [
  //     "Agile/Scrum",
  //     "UML",
  //     "Gestion de projet",
  //     "(Gantt, budgétisation, cahier des charges)",
  //   ],
  // },
];

function chunkPairs(items: string[], size = 2) {
  const out: string[][] = [];
  for (let i = 0; i < items.length; i += size)
    out.push(items.slice(i, i + size));
  return out;
}

export default function Skills() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const chunkSize = isMobile ? 2 : 4;

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        position: "relative",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Typography variant="h2" gutterBottom className="the-lego-movie-title">
        Stack Technique
      </Typography>

      {/* Grille 2 colonnes (responsive) */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr", md: "1fr 1fr" },
          gap: { xs: 1.5, sm: 2, md: 3 },
        }}
      >
        {groups.flatMap((group) => {
          const pairs = chunkPairs(group.items, chunkSize);

          return pairs.map((pair, idx) => {
            const label = pair.join(" / ");

            return (
              <Card
                key={`${group.title}-${idx}`}
                variant="outlined"
                sx={{
                  borderRadius: { xs: 2, md: 3 },
                  borderColor: "rgba(70, 38, 9, 0.62)",
                  bgcolor: "rgba(255,255,255,0.92)",
                  px: { xs: 1.2, sm: 2, md: 3 },
                  py: { xs: 1.2, sm: 2, md: 3 },
                  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                  transition: "transform 160ms ease, box-shadow 160ms ease",
                  "&:hover": {
                    transform: { xs: "none", md: "translateY(-4px)" },
                    boxShadow: {
                      xs: "0 6px 18px rgba(0,0,0,0.06)",
                      md: "0 18px 44px rgba(0,0,0,0.10)",
                    },
                  },
                }}
              >
                {/* Titre */}
                <Typography
                  sx={{
                    fontSize: { xs: 18, sm: 16, md: 24 },
                    fontWeight: 800,
                    color: "rgb(80, 59, 33)",
                    lineHeight: 1.2,
                    whiteSpace: "normal",
                    overflowWrap: "anywhere",
                  }}
                >
                  {/* {pair.map((t, i) => (
                    <React.Fragment key={t}>
                      {t}
                      {i < pair.length - 1 ? " / " : ""}
                    </React.Fragment>
                  ))} */}
                  {label}
                </Typography>

                {/* Sous-titre */}
                <Typography
                  sx={{
                    mt: { xs: 0.3, md: 1 },
                    fontSize: { xs: 11, sm: 12, md: 16 }, // ✅ plus petit mobile
                    color: "rgba(120, 130, 145, 1)",
                    fontWeight: 500,
                  }}
                >
                  {group.title}
                </Typography>
              </Card>
            );
          });
        })}
      </Box>
    </Box>
  );
}
