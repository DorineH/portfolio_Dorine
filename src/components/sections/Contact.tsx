"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
  Grid
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Contact() {
  return (
    <Box component="section" id="contact">
      <Typography variant="h2" gutterBottom className="the-lego-movie-title">
        Contact
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card variant="outlined">
            <CardContent>
              <Stack spacing={2}>
                <Typography>
                  Un besoin en Next.js / React ? Discutons de votre projet.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    fullWidth
                    label="Votre e‑mail"
                    type="email"
                    required
                  />
                  <TextField fullWidth label="Sujet" required />
                </Stack>
                <TextField fullWidth label="Message" multiline minRows={4} />
                <Button>Envoyer</Button>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Vous pouvez aussi me joindre à{" "}
                  <strong>dorinehenry3@gmail.com</strong> • 06 44 90 35 89
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    href="https://www.linkedin.com/in/dorine-henry/"
                    target="_blank"
                    endIcon={<LaunchIcon />}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    href="https://github.com/DorineH"
                    target="_blank"
                    variant="outlined"
                  >
                    GitHub
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h3" gutterBottom>
                Ce que je vous apporte
              </Typography>
              <ul>
                <li>
                  <Typography>
                    Livrables propres, testés et documentés
                  </Typography>
                </li>
                <li>
                  <Typography>Culture produit & sens de l'UX</Typography>
                </li>
                <li>
                  <Typography>
                    Fiabilité : pipelines CI/CD, qualité et performance
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
