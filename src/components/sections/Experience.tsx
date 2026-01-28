"use client";

import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

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
    <Box component="section" id="experience">
      <Typography variant="h2" gutterBottom className="the-lego-movie-title">
        Experiences
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "1fr", // 1 colonne sur mobile
            md: "repeat(2, 1fr)", // 2 cartes côte à côte dès md
          },
          alignItems: "stretch",
        }}
      >
        {" "}
        {experiences.map((e) => (
          <Card
            key={e.role}
            variant="outlined"
            sx={{
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Typography variant="h4">{e.role}</Typography>
              <Typography sx={{ opacity: 0.8 }}>
                {e.company} • {e.period}
              </Typography>
              <ul>
                {e.bullets.map((b, i) => (
                  <li key={i}>
                    <Typography>{b}</Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
