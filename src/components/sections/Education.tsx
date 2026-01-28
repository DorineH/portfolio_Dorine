"use client";

import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

const schools = [
  {
    title: "Mastère – Expert en Stratégie Digitale / Tech Lead",
    org: "Digital Campus Paris",
    period: "2023 – 2025",
    details: [
      "Architecture logiciel, gestion de projet, marketing digital",
      "Esprit analytique & résolution de problèmes",
    ],
  },
  {
    title: "Licence 3 Informatique (MIAGE)",
    org: "Université Paris‑Saclay (Évry)",
    period: "2019 – 2023",
    details: [
      "Dév. web (HTML, CSS, JavaScript)",
      "Bases de données (SQL, UML)",
      "Architectures logicielles (MVC, client/serveur)",
      "Comptabilité, finance et gestion d’entreprise",
    ],
  },
];

export default function Education() {
  return (
    <Box component="section" id="education">
      <Typography variant="h2" gutterBottom className="the-lego-movie-title">
        Education
      </Typography>
      <Stack spacing={2}>
        {schools.map((s) => (
          <Card
            key={s.title}
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
              <Typography variant="h4">{s.title}</Typography>
              <Typography sx={{ opacity: 0.8 }}>
                {s.org} • {s.period}
              </Typography>
              {/* <ul>
                {s.details.map((d, i) => (
                  <li key={i}>
                    <Typography>{d}</Typography>
                  </li>
                ))}
              </ul> */}
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
