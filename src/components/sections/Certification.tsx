"use client"

import { Box, Card, CardContent, Typography } from "@mui/material";

export default function Certifications() {
  return (
    <Box component="section" id="certifications">
      <Typography variant="h2" gutterBottom className="the-lego-movie-title">
        Certifications
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <Typography>PSPO I – Professional Scrum Product Owner</Typography>
          <Typography sx={{ opacity: 0.8 }}>Label Handimanagement</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
