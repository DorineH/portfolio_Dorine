"use client";

import * as React from "react";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ProjectVideo from "./ProjectVideo";

const pastel = [
  "#f6c1d9",
  "#cfe9ff",
  "#d7f7d9",
  "#fff3bf",
  "#e6d8ff",
  "#ffe0cc",
];

type ProjectVideo =
  | { type: "url"; src: string }
  | { type: "youtube"; id: string }
  | { type: "vimeo"; id: string };

type CodeLink = { label: string; href: string };

const projects: Array<{
  title: string;
  subtitle: string;
  desc: string | string[];
  tech: string[];
  video?:
    | { type: "url"; src: string }
    | { type: "youtube"; id: string }
    | { type: "vimeo"; id: string };
  links: {
    demo?: string;
    code?: CodeLink[];
  };
}> = [
  {
    title: "Site web qui centralisé toutes les offres d'emploie de IinkedIn",
    subtitle: "Projet perso – Vue.js, Python, PostgresSQL, N8N, Supabase",
    desc: [
      "Le projet permet d’obtenir les dernières offres d’emploi publiées sur LinkedIn. Le backend, développé en Python, se connecte à une base de données PostgreSQL.",
      "Celle-ci est alimentée automatiquement grâce à un service N8N, qui récupère",
      "et enregistre les nouvelles offres publiées sur LinkedIn. Le front est fait en Vue.js",
    ],
    tech: ["Vue.js", "Python", "PostgresSQL", "N8N", "Supabase"],
    links: {
      demo: "https://projet-linkedin-front.vercel.app/search",
      code: [
        {
          label: "Front",
          href: "https://github.com/DorineH/projet_linkedin_front",
        },
        {
          label: "Back",
          href: "https://github.com/DorineH/projet_linkedin_back",
        },
      ],
    },
  },
  {
    title: "PWA relation à distance",
    subtitle: "Projet perso – NextJS, NestJS, MongoDB",
    desc: [
      "Développement d’une application pour les couples à distance : choix technique, conception UX, budgétisation, communication et développement du MVP.",
      "Ce que j'ai réalisé :",
      "- Définir et justifié les  choix des technologiques utilisées (stack technique).",
      "- Gestion de projet (organisation, répartition des tâches, suivi). simuler la gestion d’une equipe",
      "- Réalisation de maquettes et prototypage.",
      "- Élaboration de la stratégie de communication et marketing.",
      "- Budgétisation du projet.",
      "- Développement du MVP en Next.js, NestJS et base de donnée noSQL MongoDB.",
    ],
    tech: ["Next.js", "NestJS", "MongoDB", "PWA"],
    video: {
      type: "url" as const,
      src: "/video/prototype_mvp_video_demo.mp4",
    },
    links: {
      demo: "#",
      code: [
        { label: "Repo Front", href: "https://github.com/DorineH/Then_app" },
        {
          label: "Repo Back",
          href: "https://github.com/DorineH/then-app-back",
        },
      ],
    },
  },
  // {
  //   title: "Générateur de recettes avec IA & CI/CD",
  //   subtitle: "Projet école – Modèle IA + pipeline CircleCI",
  //   desc: "Intégration d'un modèle IA, pipeline CI/CD automatisé (build, test, déploiement).",
  //   tech: ["Python", "CI/CD", "CircleCI", "Docker"],
  //   links: { demo: "#", code: "https://github.com/DorineH/fertilizer-project-compet-kaggle/blob/master/README.md" },
  // },
  {
    title: "Kaggle – Predicting Optimal Fertilizers",
    subtitle: "Projet école – Python, LightGBM",
    desc: "Optimisation d'un modèle LightGBM avec pipeline complet (prétraitement, features, CV).",
    tech: ["Python", "LightGBM", "Pandas"],
    links: {
      demo: "#",
      code: [
        {
          label: "Repo",
          href: "https://github.com/DorineH/fertilizer-project-compet-kaggle/blob/master/README.md",
        },
      ],
    },
  },
];

function FolderCard({
  color,
  title,
  onClick,
}: {
  color: string;
  title: string;
  onClick: () => void;
}) {
  return (
    <Box
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      sx={{
        cursor: "pointer",
        userSelect: "none",
        outline: "none",
        display: "grid",
        gap: 1,
        justifyItems: "center",
        p: 1,
        borderRadius: 3,
        "&:focus-visible": {
          boxShadow: `0 0 0 3px rgba(0,0,0,0.12)`,
        },
      }}
    >
      {/* Dossier */}
      <Box
        sx={{
          position: "relative",
          width: { xs: 150, sm: 170, md: 190 },
          height: { xs: 110, sm: 120, md: 130 },
          borderRadius: 3,
          background: color,
          boxShadow: "0 14px 35px rgba(0,0,0,0.12)",
          transition: "transform 160ms ease, box-shadow 160ms ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 18px 48px rgba(0,0,0,0.18)",
          },

          // petit grain léger
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: 3,
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.25), transparent 40%)",
            pointerEvents: "none",
          },
        }}
      >
        {/* Onglet du dossier */}
        <Box
          sx={{
            position: "absolute",
            top: -10,
            left: 16,
            width: "42%",
            height: 26,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            background: color,
            filter: "brightness(0.98)",
            boxShadow: "0 10px 18px rgba(0,0,0,0.10)",
          }}
        />

        {/* “feuille” interne */}
        <Box
          sx={{
            position: "absolute",
            left: 14,
            right: 14,
            top: 26,
            bottom: 14,
            borderRadius: 2,
            background: "rgba(255,255,255,0.55)",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        />
      </Box>

      {/* Titre sous le dossier */}
      <Typography
        variant="subtitle2"
        sx={{
          maxWidth: 220,
          textAlign: "center",
          fontWeight: 800,
          lineHeight: 1.2,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {title}
      </Typography>

      <Typography variant="caption" sx={{ opacity: 0.65 }}>
        Cliquer pour ouvrir
      </Typography>
    </Box>
  );
}

export default function Projects() {
  const [open, setOpen] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);

  const active = activeIdx === null ? null : projects[activeIdx];

  const handleOpen = (idx: number) => {
    setActiveIdx(idx);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // option : laisser activeIdx pour éviter un flash lors de la fermeture
    // setActiveIdx(null);
  };

  return (
    <Box component="section" id="projects">
      <Typography variant="h2" gutterBottom className="the-lego-movie-title">
        Projets realises
      </Typography>

      {/* Grille de dossiers */}
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          alignItems: "start",
        }}
      >
        {projects.map((p, idx) => (
          <FolderCard
            key={p.title}
            title={p.title}
            color={pastel[idx % pastel.length]}
            onClick={() => handleOpen(idx)}
          />
        ))}
      </Box>

      {/* Popup “grande fenêtre” */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: 4,
            overflow: "hidden",
          },
        }}
      >
        {/* Bandeau haut (rappel couleur dossier) */}
        <Box
          sx={{
            height: 14,
            background:
              activeIdx === null
                ? pastel[0]
                : pastel[activeIdx % pastel.length],
          }}
        />

        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 2,
            pr: 1,
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 0.5 }}>
              {active?.title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.75 }}>
              {active?.subtitle}
            </Typography>
          </Box>

          <IconButton aria-label="Fermer" onClick={handleClose}>
            <CloseRoundedIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Stack spacing={2}>
            <ProjectVideo video={active?.video} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>
                Description
              </Typography>

              {Array.isArray(active?.desc) ? (
                <Stack spacing={1}>
                  {active?.desc.map((line, i) => (
                    <Typography key={i} variant="body2">
                      {line}
                    </Typography>
                  ))}
                </Stack>
              ) : (
                <Typography variant="body2">{active?.desc}</Typography>
              )}
            </Box>

            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>
                Technologies
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {active?.tech?.map((t) => (
                  <Chip key={t} label={t} size="small" />
                ))}
              </Stack>
            </Box>
          </Stack>
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          {active?.links?.demo && active.links.demo !== "#" && (
            <Button
              href={active.links.demo}
              target="_blank"
              endIcon={<LaunchIcon />}
              variant="contained"
            >
              Démo
            </Button>
          )}

          {active?.links?.code?.length
            ? active.links.code
                .filter((c) => c?.href && c.href !== "#")
                .map((c) => (
                  <Button
                    key={`${c.label}-${c.href}`}
                    href={c.href}
                    target="_blank"
                    endIcon={<CodeRoundedIcon />}
                    variant="outlined"
                  >
                    {c.label}
                  </Button>
                ))
            : null}

          <Box sx={{ flex: 1 }} />

          <Button onClick={handleClose}>Fermer</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
