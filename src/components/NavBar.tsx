"use client";

import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const links = [
  { label: "Compétences", href: "#skills" },
  { label: "Expériences", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Éducation", href: "#education" },
  { label: "Certifs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(6px)",
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800 }}>
            Dorine <span className="u-underline">Henry</span>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {links.map((l) => (
              <Button key={l.href} href={l.href} color="inherit">
                {l.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={() => setOpen(true)} aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 260, p: 2 }}
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <List>
            {links.map((l) => (
              <ListItemButton component="a" href={l.href} key={l.href}>
                {l.label}
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
