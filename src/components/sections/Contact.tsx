"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = async () => {
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, subject, message }),
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        position: "relative",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Typography variant="h2" gutterBottom className="the-lego-movie-title">
        Contact
      </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {/* FORMULAIRE */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Card
            variant="outlined"
            sx={{
              borderRadius: { xs: 2.5, md: 3 },
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Stack spacing={{ xs: 1.8, md: 2.2 }}>
                <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>
                  Un besoin ? Discutons de votre projet.
                </Typography>

                {/* email + sujet */}
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    fullWidth
                    label="Votre e-mail"
                    type="email"
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Sujet"
                    size="small"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </Stack>

                {/* message */}
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  minRows={4}
                  size="small"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                {/* bouton envoyer */}
                <Button
                  variant="contained"
                  onClick={handleSend}
                  disabled={loading}
                  fullWidth
                  sx={{
                    py: 1.2,
                    fontWeight: 700,
                    fontSize: { xs: 14, md: 15 },
                  }}
                >
                  {loading ? "Envoi..." : "Envoyer"}
                </Button>

                {sent && (
                  <Typography color="green" sx={{ fontSize: 14 }}>
                    Message envoyé avec succès 🚀
                  </Typography>
                )}

                {/* infos contact */}
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.8,
                    textAlign: { xs: "center", md: "left" },
                    fontSize: { xs: 13, md: 14 },
                  }}
                >
                  Vous pouvez aussi me joindre à{" "}
                  <strong>dorine.h13@gmail.com</strong>
                  <br />
                  06 44 90 35 89
                </Typography>

                {/* boutons social */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mt: 1 }}
                >
                  <Button
                    href="https://www.linkedin.com/in/dorine-henry/"
                    target="_blank"
                    endIcon={<LaunchIcon />}
                    fullWidth
                  >
                    LinkedIn
                  </Button>

                  <Button
                    href="https://github.com/DorineH"
                    target="_blank"
                    variant="outlined"
                    fullWidth
                  >
                    GitHub
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* COLONNE DROITE */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card
            variant="outlined"
            sx={{
              borderRadius: { xs: 2.5, md: 3 },
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: 20, md: 24 },
                }}
              >
                Travaillons ensemble !
              </Typography>

              <Box
                component="ul"
                sx={{
                  pl: 2,
                  display: "grid",
                  gap: { xs: 0.7, md: 1 },
                }}
              >
                {[
                  "Création de site internet professionnel",
                  "Refonte de site existant",
                  "Site pour freelance, coach, restaurant, boutique",
                  "Optimisation SEO et performance",
                  "Livrables propres, testés et documentés",
                  "Culture produit & sens de l’UX",
                  "Fiabilité : CI/CD, qualité et performance",
                ].map((txt, i) => (
                  <Box component="li" key={i}>
                    <Typography sx={{ fontSize: { xs: 13.5, md: 14.5 } }}>
                      {txt}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
