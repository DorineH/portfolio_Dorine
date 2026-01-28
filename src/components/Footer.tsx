"use client"

import { Box, Container, Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ mt: 8, py: 6, borderTop: (t) => `1px solid ${t.palette.divider}` }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>© {new Date().getFullYear()} Dorine Henry</Typography>
          <Stack direction="row" spacing={2}>
            <Link href="mailto:dorinehenry3@gmail.com">Email</Link>
            <Link href="https://github.com/DorineH" target="_blank">
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/dorine-henry/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
