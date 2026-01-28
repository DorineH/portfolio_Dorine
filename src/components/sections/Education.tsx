"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";

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
    org: "Université Paris-Saclay (Évry)",
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
    <Box
      component="section"
      id="education"
      sx={{
        position: "relative",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Typography variant="h2" gutterBottom className="the-lego-movie-title">
        Education
      </Typography>

      {/* ✅ 1 colonne mobile, 2 colonnes tablette+, spacing responsive */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          gap: { xs: 2, sm: 2.5, md: 3 },
          alignItems: "stretch",
        }}
      >
        {schools.map((s) => (
          <Card
            key={s.title}
            variant="outlined"
            sx={{
              borderRadius: { xs: 2.5, md: 3 },
              borderColor: "rgba(70, 38, 9, 0.62)",
              bgcolor: "rgba(255,255,255,0.92)",

              // ✅ cards plus compactes sur mobile
              px: { xs: 1.5, sm: 2, md: 3 },
              py: { xs: 1.5, sm: 2, md: 3 },

              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              transition: "transform 160ms ease, box-shadow 160ms ease",

              // ✅ hover seulement desktop (sinon inutile au touch)
              "&:hover": {
                transform: { xs: "none", md: "translateY(-4px)" },
                boxShadow: {
                  xs: "0 10px 30px rgba(0,0,0,0.06)",
                  md: "0 18px 44px rgba(0,0,0,0.10)",
                },
              },
            }}
          >
            <CardContent sx={{ p: 0 }}>
              {/* ✅ titre responsive */}
              <Typography
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.2,
                  fontSize: { xs: 18, sm: 18, md: 22 },
                }}
              >
                {s.title}
              </Typography>

              {/* ✅ sous-titre responsive */}
              <Typography
                sx={{
                  mt: 0.8,
                  opacity: 0.8,
                  fontSize: { xs: 12.5, sm: 13, md: 14 },
                }}
              >
                {s.org} • {s.period}
              </Typography>

              {/* ✅ détails (optionnel) */}
              {/* 
              <Box
                component="ul"
                sx={{
                  mt: 1.5,
                  mb: 0,
                  pl: { xs: 2, md: 2.5 },
                  display: "grid",
                  gap: { xs: 0.6, md: 0.9 },
                }}
              >
                {s.details.map((d, i) => (
                  <Box component="li" key={i} sx={{ lineHeight: 1.4 }}>
                    <Typography sx={{ fontSize: { xs: 13, sm: 13.5, md: 14.5 } }}>
                      {d}
                    </Typography>
                  </Box>
                ))}
              </Box>
              */}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
