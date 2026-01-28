"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";

export default function Certifications() {
  return (
    <Box
      component="section"
      id="certifications"
      sx={{
        position: "relative",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Typography variant="h2" gutterBottom className="the-lego-movie-title">
        Certifications
      </Typography>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 3,
          borderColor: "rgba(70, 38, 9, 0.62)",
          bgcolor: "rgba(255,255,255,0.92)",
          px: { xs: 1, md: 1 },
          py: { xs: 1, md: 1 },
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          transition: "transform 160ms ease, box-shadow 160ms ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 18px 44px rgba(0,0,0,0.10)",
          },
        }}
      >
        <CardContent>
          <Typography>PSPO I – Professional Scrum Product Owner</Typography>
          <Typography sx={{ opacity: 0.8 }}>Label Handimanagement</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
