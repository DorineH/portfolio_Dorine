"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";

const experiences = [
  {
    role: "Alternance / Stage – Développeuse Web Node.js",
    company: "Acensi France, Courbevoie",
    period: "Avril 2023 – Septembre 2025 (2 ans et 4 mois)",
    bullets: [
      "Développement, documentation et sécurisation d’API REST en TypeScript (NestJS), avec TypeORM et PostgreSQL, en veillant à la qualité, à la maintenabilité et à la fiabilité des échanges de données (Swagger).",
      "Participation à la conception fonctionnelle de modules applicatifs orientés utilisateurs (logique plateforme).",
      "Mise en place de tests automatisés (unitaires et fonctionnels) afin de garantir la fiabilité des parcours utilisateurs et la stabilité applicative (Cypress, Cucumber, Jest).",
      "Structuration d’interfaces web incluant profils utilisateurs, parcours de recherche et gestion de données métier.",
      "Sensibilisation aux problématiques d’internationalisation (i18n) et de structuration frontend pour des produits à vocation internationale.",
    ],
  },
  {
    role: "Job Étudiant – Vendeuse",
    company: "Go Sport",
    period: "Octobre 2021 – Mars 2023 (2 ans)",
    bullets: ["Relation client, merchandising, sens du service"],
  },
];

export default function Experience() {
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        position: "relative",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Typography variant="h2" gutterBottom className="the-lego-movie-title">
        Experiences
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: { xs: 2, sm: 2.5, md: 3 },
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)", // ✅ iPad / tablette = 2 colonnes
          },
          alignItems: "stretch",
        }}
      >
        {experiences.map((e) => (
          <Card
            key={e.role}
            variant="outlined"
            sx={{
              borderRadius: { xs: 2.5, md: 3 },
              borderColor: "rgba(70, 38, 9, 0.62)",
              bgcolor: "rgba(255, 255, 255, 0.7)",

              // mobile
              px: { xs: 1.5, sm: 2, md: 3 },
              py: { xs: 1.5, sm: 2, md: 3 },

              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              transition: "transform 160ms ease, box-shadow 160ms ease",

              // desktop
              "&:hover": {
                transform: { xs: "none", md: "translateY(-4px)" },
                boxShadow: {
                  xs: "0 10px 30px rgba(0,0,0,0.06)",
                  md: "0 18px 44px rgba(0,0,0,0.06)",
                },
              },
            }}
          >
            <CardContent
              sx={{
                p: 0,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.2,
                  fontSize: { xs: 18, sm: 18, md: 22 }, // mobile + tablette + desktop
                }}
              >
                {e.role}
              </Typography>
              <Typography
                sx={{
                  mt: 0.8,
                  opacity: 0.8,
                  fontSize: { xs: 12.5, sm: 13, md: 14 },
                }}
              >
                {e.company} • {e.period}
              </Typography>

              <Box
                component="ul"
                sx={{
                  mt: 1.5,
                  mb: 0,
                  pl: { xs: 2, md: 2.5 },
                  display: "grid",
                  gap: { xs: 0.8, md: 1 }, // espace entre bullets
                }}
              >
                {e.bullets.map((b, i) => (
                  <Box component="li" key={i} sx={{ lineHeight: 1.4 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: 13, sm: 13.5, md: 14.5 },
                      }}
                    >
                      {b}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* <ul>
                {e.bullets.map((b, i) => (
                  <li key={i}>
                    <Typography>{b}</Typography>
                  </li>
                ))}
              </ul> */}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
